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
    <div className="w-full flex items-center h-[80px] bg-[#9290C3] px-[15px] py-[7.5px] px-6 rounded-md shrink-0 text-white">
      <h4 className="text-xl basis-8/12">{props.summary}</h4>
      <h3 className="text-2xl flex flex-row-reverse basis-3/12">
        {moment(props.created_at.toDate()).format("YYYY-MM-DD HH:MM:SS")}
      </h3>
      <div className="flex flex-row-reverse basis-1/12">
        <img
          onClick={props.onClick}
          className="cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2UPQ7CMAyFOyAWCgMzEkdp4TocAIHYKcfoDVDhBDBxATYm/g7AwPghCw+ocpKWoWLgSVny/J6d2EkU/fHTAPrABNgCZ+Cp66x7wvW/MW4BM+BBGA+NbVU1HwAH6uMg2pD5EDgZ4jWQAB1dKVAYcaIdusxj4GiIpp6C5ka8eMRWcG5VHr25NrACbsAVyGRPuY2hy8vmcmQLifJiWEam3MihTT8T7B1BsfJSeRl35boO7a5OgqvBXZTrVUmQ+o6JfUVL5cY+bajJxUeTMz1Jucnyov1NDozp3DOmi8pjGnhoG52WWNfYUbn7oTXyVTTy2TXyXf/RKF7rQNF5f1bC6AAAAABJRU5ErkJggg=="
        />
      </div>
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
