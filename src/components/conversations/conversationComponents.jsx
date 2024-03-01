import moment from "moment";

export default function ConversationBody(props) {
  return (
    <div className="flex h-[20%] bg-[#265073] rounded-lg mt-[40px] scroll-smooth">
      <div className=" flex w-[15%] text-white justify-center items-center">
        Today
      </div>
      <div className="flex gap-5 w-[85%] overflow-x-auto p-2">
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
  );
}

export function ConversationSummary(props) {
  return (
    <div onClick={props.onClick} className="col-span-1 flex flex-col justify-center items-center h-[80px] bg-[#9290C3] px-[10px] py-[7.5px] rounded-md shrink-0 text-white">
      <h4 className="text-md">{props.summary}</h4>
      <h3 className="text-2xl">{moment(props.created_at.toDate()).format('YYYY-MM-DD')}</h3>
    </div>
  );
}

export function Button(props) {
  return (
    <div onClick={props.onClick} className={props.className}>
      <div className="py-2 px-3 text-lg font-semibold">{props.name}</div>
    </div>
  );
}
