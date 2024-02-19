import { createContext, useContext, useEffect, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
import "./chatbot.css";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import ConversationText from "../../models/ConversationText";

export const ChatBotContext = createContext(null);

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const updateMessage = (val) => {
    setMessage(val);
  };

  useEffect(() => {
    if (isAuthenticated === false) navigate('/login');
  }, [isAuthenticated]);

  useEffect(() => {
    let conversationText = new ConversationText(123, 'hello world!', 'bot');
    /*conversationText.save(); */

    /* conversationText.where('test', '==', 123).where('ttt', '==', 12345).go(); */
  }, []);

  {/* <ChatBotContext.Provider value={[updateMessage]}> */}
  return (
      <main>
        <Header />
        <Body />
        <Footer />
      </main>
  );
  {/* </ChatBotContext.Provider> */}
}
