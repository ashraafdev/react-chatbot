import { createContext, useContext, useEffect, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
import { EmailPasswordAuth } from "../../containers/Auth";
import { useAuthState } from "../../hooks/Auth";
import "./chatbot.css";

export const ChatBotContext = createContext(null);

export default function ChatBot() {
  const [message, setMessage] = useState("");

  const { authState } = useAuthState();

  const updateMessage = (val) => {
    setMessage(val);
  };

  /* useEffect(() => {
    console.log(message);
  }, [message]); */

  useEffect(() => {
    /* let newConversationId = new ConversationId(null, 2);
    newConversationId.save(); */
    /* EmailPasswordAuth("ijoifjqwf@qwqwf.com", "jqfqwfqwf"); */
  }, []);

  useEffect(() => {
   
  }, [authState]);

  return (
    <ChatBotContext.Provider value={[updateMessage]}>
      <main>
        <Header />
        <Body />
        <Footer />
      </main>
    </ChatBotContext.Provider>
  );
}
