import { useContext, useEffect } from "react";
import { BotMessage, ClientMessage } from "../chat/chat";
import "./body.css";
import { ChatDivContext } from "../../pages/main/chatbot";

export default function Body({conversations}) {

  const chatDiv = useContext(ChatDivContext);
  
  return (
    <div id="chatDiv" ref={chatDiv} className="w-full h-[80%] overflow-y-auto">
      {conversations && conversations.map(conversation => {
        if (conversation.data.write_by == 'bot')
          return <BotMessage key={conversation.id} message={conversation.data.content} />
        else
          return <ClientMessage key={conversation.id} message={conversation.data.content} />
      })}
     {/*  <div className="botBox">
        <div className="botMessage">
          <div>
            <img
              className="botImg"
              width="40"
              src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png"
            />
          </div>
          <div className="text">
            gggggggggggggggwqfqwfqwfqwfqwfqwfqwfqwfqwfqwfqwfqfqwfqwfqwf
          </div>
        </div>
      </div>
      <div className="clientBox">
        <div className="clientMessage">
          <div>
            <img
              className="botImg"
              width="40"
              src="https://i.ibb.co/YjsZM3B/man.png"
            />
          </div>
          <div className="text">
            gggggggggggggggwqfqwfqwfqwfqwfqwfqwfqwfqwfqwfqwfqfqwfqwfqwf
          </div>
        </div>
      </div>
      <div className="clientBox">
        <div className="clientMessage">
          <div>
            <img
              className="botImg"
              width="40"
              src="https://i.ibb.co/YjsZM3B/man.png"
            />
          </div>
          <div className="text">
            gggggggggggggggwqfqwfqwfqwfqwfqwfqwfqwfqwfqwfqwfqfqwfqwfqwf
          </div>
        </div>
      </div>
      <div className="botBox">
        <div className="botMessage">
          <div>
            <img
              className="botImg"
              width="40"
              src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png"
            />
          </div>
          <div className="text">
            gggggggggggggggwqfqwfqwfqwfqwfqwfqwfqwfqwfqwfqwfqfqwfqwfqwf
          </div>
        </div>
      </div>
      <div className="botBox">
        <div className="botMessage">
          <div>
            <img
              className="botImg"
              width="40"
              src="https://cdn-icons-png.flaticon.com/512/10061/10061872.png"
            />
          </div>
          <div className="text">
            gggggggggggggggwqfqwfqwfqwfqwfqwfqwfqwfqwfqwfqwfqfqwfqwfqwf
          </div>
        </div>
      </div> */}
    </div>
  );
}
