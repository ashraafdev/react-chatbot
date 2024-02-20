import ConversationBody, {
  Button,
  ConversationDate,
} from "../../components/conversations/conversationComponents";
import Header from "../../components/header/header";

export default function Conversations() {
  return (
    <main className="bg-[#070F2B] h-screen flex flex-col">
      <Header />
      <div className="flex flex-col h-full w-full px-[5%] py-[20px]">
        <div className="flex w-full">
          <div className="w-[95%]">
            <h1 className="text-white text-3xl font-semibold">Conversations</h1>
          </div>
          <button>
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
              <Button name="Today" />
              <Button name="Yesterday" />
              <Button name="Week" />
              <Button name="Month" />
              <Button name="Rest" />
            </div>
          </div>
          <div className="w-full bg-[#265073] h-full rounded-lg p-5">
            <div className="grid grid-cols-4 gap-5 max-h-[450px] overflow-y-auto">
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
              <ConversationDate />
            </div>
          </div>
        </div>
        {/*  <ConversationBody />
        <ConversationBody />
        <ConversationBody />
        <ConversationBody /> */}
      </div>
    </main>
  );
}
