/* import { ChatBotContext } from "./../../pages/main/chatbot"; */
import { useContext, useEffect } from "react";

export default function Footer() {
  /* const [updateMessage] = useContext(ChatBotContext); */

  return (
    <div className="h-[10%] bg-[#265073]">
      {/* <textarea
         onChange={(e) => updateMessage(e.target.value)} 
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea> */}
      {/*  */}
      <div className="relative h-[80%] mt-2 w-full flex gap-2">
        <textarea
          placeholder="Be Genius"
          className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
        ></textarea>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5  hidden h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        <button>
          <img
            width="50"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nGNgGAWjYBSMglEwCtCAwK1H9kI3Hm0Wuvn4ndDNx/8HGL8TuvFok8DNR3YMxADBG48rhG48+jcIHP4fBd949E/wxqMy/I6//sh9UDr+JsITQrceuuL2wM1HewbckTfxY8Ebj3fh88BnZMXaafX/tZOq/osdv0x3h4odv/xfJ7Hqv1Z6A6oHbj76hNMD6IbopNT8N3JN/K8fkvdfcs8pujlecs+p//rBuWC7tVNqMOSJ9oDIpTv/NfPbwAYZ+qT/l1m7l+aOl9544L+BbwbYTq3s5v8i52+T7wEQFr724L969USIJ9yT/8vPWUczx8st2PTf0CMZbJd6We9/4Sv3saojyQNgfOPRf6X+RWCDQVildSZYjGqOv0Ga+aR7ABZCCzcTFUKkYOFrD/6rVU0gKYbJ9gAISyGn0awmrGmUWCwCymN5rSTnMYo8AMIS+8/81wsrAFusG1dGVjErevLqf52ESkgpF5z7X2LPSaL1UuwBsANOXQOX0+Q4ABQA+qH50AAoJzkAqOIBcotZYopJIXp5gNRilthiUoieHiCqGKRyMcxAdQ9Asfz8DeBYAIdwZd9/0dPXwRjEhsfQ/A0U2SFESw+gF7PImJpNEQZaegCExY9e+q9e3vtfPyAbjEFskBi1zGegtQdojRlGPXBzNAb+D/skpJXe8F8nqRrcZBmSHtBJrgYXv3rhhf/FjlwgzgOgDvNAO1wIikUu3ALHAqSxmIPok994/GHIDKsIX76H0lgEVZJ4h1WEbj10G2wDW8KgxmJ5L8QTnin/VSv7G3B6ABwLNx6VDTZPCN149F+1cSrEE64Jv43d4gPwegI0kAoaUBW6+egNNR0CGihDbyMZkYENXRPuMgwEMHRJPDKkPUA2qK9nMnJNmE50EhpMQCs0lM3IJXEFOPRdEn4YuiQEMQwVYOyTxmXkmrgdknQSPhs4J7owDBWg6x0lCMszhq4JL0yckwwZhhIwck04DUk2ifcNXBJUGYYaMASHfsIxQ5ckqYF2yygY1gAAAQyAQFb0CksAAAAASUVORK5CYII="
          />
        </button>
      </div>
    </div>
  );
}
