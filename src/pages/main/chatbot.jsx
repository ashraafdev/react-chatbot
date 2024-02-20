import { createContext, useContext, useEffect, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
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
    if (isAuthenticated === false) navigate("/login");
  }, [isAuthenticated]);

  useEffect(() => {
    let conversationText = new ConversationText();
    /*conversationText.save(); */

    console.log(new Date(new Date().setDate(19)));

    let tempDate = new Date();
    tempDate = tempDate.setDate(19);
    tempDate = new Date(tempDate).setHours(3, 0, 0, 0);
    console.log(new Date(tempDate));
    conversationText.where("created_at", ">=", new Date(tempDate)).go();
  }, []);

  {
    /* <ChatBotContext.Provider value={[updateMessage]}> */
  }
  return (
    <main className="flex flex-col h-screen bg-[#070F2B]">
      <Header />
      <Body />
      <Footer />
    </main>
  );
  {
    /* </ChatBotContext.Provider> */
  }
}
