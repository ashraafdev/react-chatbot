import "./footer.css";
/* import { ChatBotContext } from "./../../pages/main/chatbot"; */
import { useContext, useEffect } from "react";

export default function Footer() {
  /* const [updateMessage] = useContext(ChatBotContext); */

  return (
    <div className="footer">
      <textarea
        /* onChange={(e) => updateMessage(e.target.value)} */
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button>
        <img
          width="50"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nGNgGAWjYBSMglEwCtCAwK1H9kI3Hm0Wuvn4ndDNx/8HGL8TuvFok8DNR3YMxADBG48rhG48+jcIHP4fBd949E/wxqMy/I6//sh9UDr+JsITQrceuuL2wM1HewbckTfxY8Ebj3fh88BnZMXaafX/tZOq/osdv0x3h4odv/xfJ7Hqv1Z6A6oHbj76hNMD6IbopNT8N3JN/K8fkvdfcs8pujlecs+p//rBuWC7tVNqMOSJ9oDIpTv/NfPbwAYZ+qT/l1m7l+aOl9544L+BbwbYTq3s5v8i52+T7wEQFr724L969USIJ9yT/8vPWUczx8st2PTf0CMZbJd6We9/4Sv3saojyQNgfOPRf6X+RWCDQVildSZYjGqOv0Ga+aR7ABZCCzcTFUKkYOFrD/6rVU0gKYbJ9gAISyGn0awmrGmUWCwCymN5rSTnMYo8AMIS+8/81wsrAFusG1dGVjErevLqf52ESkgpF5z7X2LPSaL1UuwBsANOXQOX0+Q4ABQA+qH50AAoJzkAqOIBcotZYopJIXp5gNRilthiUoieHiCqGKRyMcxAdQ9Asfz8DeBYAIdwZd9/0dPXwRjEhsfQ/A0U2SFESw+gF7PImJpNEQZaegCExY9e+q9e3vtfPyAbjEFskBi1zGegtQdojRlGPXBzNAb+D/skpJXe8F8nqRrcZBmSHtBJrgYXv3rhhf/FjlwgzgOgDvNAO1wIikUu3ALHAqSxmIPok994/GHIDKsIX76H0lgEVZJ4h1WEbj10G2wDW8KgxmJ5L8QTnin/VSv7G3B6ABwLNx6VDTZPCN149F+1cSrEE64Jv43d4gPwegI0kAoaUBW6+egNNR0CGihDbyMZkYENXRPuMgwEMHRJPDKkPUA2qK9nMnJNmE50EhpMQCs0lM3IJXEFOPRdEn4YuiQEMQwVYOyTxmXkmrgdknQSPhs4J7owDBWg6x0lCMszhq4JL0yckwwZhhIwck04DUk2ifcNXBJUGYYaMASHfsIxQ5ckqYF2yygY1gAAAQyAQFb0CksAAAAASUVORK5CYII="
        />
      </button>
    </div>
  );
}
