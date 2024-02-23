import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import {
  Button,
  ConversationSummary,
} from "../../components/conversations/conversationComponents";
import Header from "../../components/header/header";
import ConversationId from "../../models/ConversationId";
import moment from "moment";
import { Spinner } from "../../components/misc/spinner";
import { useNavigate } from "react-router-dom";

export default function Conversations() {
  const { isAuthenticated, authState } = useContext(AuthContext);

  const [appIsLoaded, setAppIsLoaded] = useState(false);
  const [showDataOf, setShowDataOf] = useState("today");

  const navigate = useNavigate();

  const [conversations, setConversations] = useState({
    today: [],
    yesterday: [],
    week: [],
    month: [],
    rest: [],
  });

  const getConversations = async () => {
    let result = await (new ConversationId())
      .where("user_id", "in", [authState.uid])
      .orderBy("created_at", "desc")
      .fectchall();

    result.forEach((conversation) => {
      let dateOfConversation = moment(
        new Date(conversation.data.created_at.toDate()).setHours(0, 0, 0, 0)
      );

      if (dateOfConversation.isSame(moment(new Date().setHours(0, 0, 0, 0)))) {
        conversations["today"] = [...conversations["today"], conversation];
      } else if (
        dateOfConversation.isSame(
          moment(new Date().setHours(0, 0, 0, 0)).subtract(1, "day")
        )
      ) {
        conversations["yesterday"] = [
          ...conversations["yesterday"],
          conversation,
        ];
      } else if (
        dateOfConversation.isBetween(
          moment().subtract(7, "days"),
          moment(),
          undefined,
          "[]"
        )
      ) {
        conversations["week"] = [...conversations["week"], conversation];
      } else if (
        dateOfConversation.isBetween(
          moment().subtract(1, "months"),
          moment(),
          undefined,
          "[]"
        )
      ) {
        conversations["months"] = [...conversations["months"], conversation];
      } else {
        conversations["rest"] = [...conversations["rest"], conversation];
      }

      setConversations(conversations);
      setAppIsLoaded(true);
    });
  };

  useEffect(() => {
    if (isAuthenticated === false) navigate("/login");
    else if (isAuthenticated) {
      getConversations();
    }
  }, [isAuthenticated]);
  
  return (
    <main className="bg-[#070F2B] h-screen flex flex-col">
      {(isAuthenticated === null || appIsLoaded === false ) && <Spinner />}
      <Header />
      <div className="flex flex-col h-full w-full px-[5%] py-[20px]">
        <div className="flex w-full">
          <div className="w-[95%]">
            <h1 className="text-white text-3xl font-semibold">Conversations</h1>
          </div>
          <button onClick={() => navigate("/conversation")}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/add--v1.png"
              alt="add--v1"
            />
          </button>
        </div>
        <div className="h-full w-full flex gap-10 py-10">
          <div className="w-[20%] text-white my-[20px] flex flex-col justify-center items-center">
            <div className="w-full">
              <Button name="Today" onClick={() => setShowDataOf("today")} />
              <Button
                name="Yesterday"
                onClick={() => setShowDataOf("yesterday")}
              />
              <Button name="Week" onClick={() => setShowDataOf("week")} />
              <Button name="Month" onClick={() => setShowDataOf("month")} />
              <Button name="Rest" onClick={() => setShowDataOf("rest")} />
            </div>
          </div>
          <div className="w-full bg-[#265073] h-full rounded-lg p-5">
            <div className="grid grid-cols-4 gap-5 max-h-[450px] overflow-y-auto">
              {conversations[showDataOf] &&
                conversations[showDataOf].map((conversation) => {
                  return (
                    <ConversationSummary
                      onClick={() =>
                        navigate(
                          `/conversation/${conversation.data.conversation_id}`
                        )
                      }
                      conversationId={conversation.data.conversation_id}
                      summary={conversation.data.summary}
                      created_at={conversation.data.created_at}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
