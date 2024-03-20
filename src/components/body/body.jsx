import { useContext, useEffect } from "react";
import { BotMessage, ClientMessage } from "../chat/chat";
import "./body.css";
import { ChatDivContext } from "../../pages/main/chatbot";

export default function Body({conversations}) {

  const chatDiv = useContext(ChatDivContext);
  
  return (
    <div id="chatDiv" ref={chatDiv} className="w-full h-[80%] overflow-y-auto">
      {conversations && conversations.map(conversation => {
        if (conversation.data.write_by == 'assistant')
          return <BotMessage key={conversation.id} message={conversation.data.content} />
        else
          return <ClientMessage key={conversation.id} message={conversation.data.content} />
      })}
    </div>
  );
}
