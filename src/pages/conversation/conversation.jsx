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
import { SignOut } from "../../containers/Auth";
import NoData from "../../components/common/nodata";

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
    let result = await new ConversationId()
      .where("user_id", "in", [authState.uid])
      .orderBy("created_at", "desc")
      .fectchall();

    console.log(result);

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
        conversations["month"] = [...conversations["month"], conversation];
      } else {
        conversations["rest"] = [...conversations["rest"], conversation];
      }

      console.log(conversations);

      setConversations(conversations);
    });
    setAppIsLoaded(true);
  };

  const logout = async () => {
    try {
      await SignOut();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated === false) navigate("/login");
    else if (isAuthenticated) {
      getConversations();
    }
  }, [isAuthenticated]);

  return (
    <main className="bg-login-gradient h-screen flex flex-col">
      {(isAuthenticated === null || appIsLoaded === false) && <Spinner />}
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
          <div className="w-[20%] flex flex justify-center items-center">
            <div className="flex items-center w-full h-full text-white my-[20px] ">
              <div className="flex items-stretch flex-wrap h-full w-full">
                <div className="flex flex-wrap">
                  <Button
                    className="w-full flex justify-center items-center bg-yellow-500 duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-[#265073] cursor-pointer active:bg-yellow-400 mb-[10px] bg-red"
                    name="Today"
                    onClick={() => setShowDataOf("today")}
                  />
                  <Button
                    className="w-full flex justify-center items-center bg-yellow-500 duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-[#265073] cursor-pointer active:bg-yellow-400 mb-[10px] bg-red"
                    name="Yesterday"
                    onClick={() => setShowDataOf("yesterday")}
                  />
                  <Button
                    className="w-full flex justify-center items-center bg-yellow-500 duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-[#265073] cursor-pointer active:bg-yellow-400 mb-[10px] bg-red"
                    name="Week"
                    onClick={() => setShowDataOf("week")}
                  />
                  <Button
                    className="w-full flex justify-center items-center bg-yellow-500 duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-[#265073] cursor-pointer active:bg-yellow-400 mb-[10px] bg-red"
                    name="Month"
                    onClick={() => setShowDataOf("month")}
                  />
                  <Button
                    className="w-full flex justify-center items-center bg-yellow-500 duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-[#265073] cursor-pointer active:bg-yellow-400 mb-[10px] bg-red"
                    name="Rest"
                    onClick={() => setShowDataOf("rest")}
                  />
                </div>
                <Button
                  className="w-full flex justify-center items-center self-end bg-red-500 duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-[#265073] cursor-pointer active:bg-red-400 mb-[10px] bg-red"
                  name="Logout"
                  onClick={() => logout()}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-[#00000040] h-full rounded-lg p-5 gap-5 overflow-y-auto">
            {conversations[showDataOf].length ? (
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
              })
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
