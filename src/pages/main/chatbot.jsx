import { createContext, useContext, useEffect, useRef, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
import { AuthContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddConversation,
  CreateConversation,
  RetreiveConversationText,
} from "../../containers/Conversation";
import { Spinner } from "../../components/misc/spinner";

export const ChatDivContext = createContext(null);

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(null);
  const { isAuthenticated, authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [conversations, setConversations] = useState(null);

  const chatDiv = useRef(null);

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  const { conversationId } = useParams();

  const newConversation = async () => {
    const conversationId = await CreateConversation(null, null, authState.uid);
    navigate(`/conversation/${conversationId}`, {replace: true});
    setAppIsLoaded(true); 
  };

  const getResponseFromAI = async () => {
    try {
      let response = await fetch('https://qlmmu97872.execute-api.us-east-1.amazonaws.com/dev', {
        method: 'post',
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: authState.uid,
          prompt: message,
        }),
      });

      let jsonData = await response.json();
      let data = JSON.parse(JSON.parse(jsonData.body));

      AddConversation(conversationId, message, 'client');
      AddConversation(conversationId, data.response, 'bot');

      await (new ConversationId()).where('conversation_id', '==', conversationId).set([{summary: data.summary}]).save();

      setKey(Math.random() * 99999);

    } catch (err) {
      console.err(err);
    }
  }

  useEffect(() => {
    if (isAuthenticated === false) navigate("/login");
    else if (isAuthenticated && conversationId === undefined) {
      newConversation();
    } else if (isAuthenticated && conversationId) {
      RetreiveConversationText(conversationId, setConversations);
      setAppIsLoaded(true);
    }
  }, [isAuthenticated, key]);

  useEffect(() => {
    setTimeout(() => {
      if (appIsLoaded) chatDiv.current.scrollTop = chatDiv.current.scrollHeight
    }, 500)
  }, [appIsLoaded, key]);

  {
    /* <ChatBotContext.Provider value={[updateMessage]}> */
  }
  return (
    <ChatDivContext.Provider value={chatDiv}>
      <main className="relative flex flex-col h-screen bg-[#070F2B]">
        {(isAuthenticated === null || appIsLoaded === false) && <Spinner />}
        <Header />
        <Body conversations={conversations} />
        <Footer setMessage={setMessage} getResponseFromAI={getResponseFromAI} />
      </main>
    </ChatDivContext.Provider>
  );
  {
    /* </ChatBotContext.Provider> */
  }
}
