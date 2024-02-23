import { createContext, useContext, useEffect, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
import { AuthContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import ConversationText from "../../models/ConversationText";
import OpenAI from "openai";
import {
  CreateConversation,
  RetreiveConversationText,
} from "../../containers/Conversation";
import { Spinner } from "../../components/misc/spinner";

export const ChatBotContext = createContext(null);

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const { isAuthenticated, authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [conversations, setConversations] = useState(null);

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  const { conversationId } = useParams();

  /* const updateMessage = (val) => {
    setMessage(val);
  }; */

  const newConversation = async () => {
    const conversationId = await CreateConversation(null, null, authState.uid);
    navigate(`/conversation/${conversationId}`, {replace: true});
    setAppIsLoaded(true); 
  };

  useEffect(() => {
    if (isAuthenticated === false) navigate("/login");
    else if (isAuthenticated && conversationId === undefined) {
      newConversation();
    } else if (isAuthenticated && conversationId) {
      RetreiveConversationText(conversationId, setConversations);
      setAppIsLoaded(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    /* let conversationText = new ConversationText();
    

    console.log(new Date(new Date().setDate(19)));

    let tempDate = new Date();
    tempDate = tempDate.setDate(19);
    tempDate = new Date(tempDate).setHours(3, 0, 0, 0);
    console.log(new Date(tempDate));
    conversationText.where("created_at", ">=", new Date(tempDate)).go(); */
    /* const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_TOKEN, dangerouslyAllowBrowser: true });
    
    const startWithOpenAI = async () => {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });

      console.log(completion.choices[0]);
    };

    startWithOpenAI(); */
  }, []);

  {
    /* <ChatBotContext.Provider value={[updateMessage]}> */
  }
  return (
    <main className="relative flex flex-col h-screen bg-[#070F2B]">
      {(isAuthenticated === null || appIsLoaded === false) && <Spinner />}
      <Header />
      <Body conversations={conversations} />
      <Footer />
    </main>
  );
  {
    /* </ChatBotContext.Provider> */
  }
}
