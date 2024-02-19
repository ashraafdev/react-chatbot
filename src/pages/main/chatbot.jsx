import { createContext, useContext, useEffect, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
import "./chatbot.css";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

/* export const ChatBotContext = createContext(null); */

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
