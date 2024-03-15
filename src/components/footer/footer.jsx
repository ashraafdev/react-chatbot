/* import { ChatBotContext } from "./../../pages/main/chatbot"; */
import { useContext, useEffect } from "react";

export default function Footer({ setMessage, getResponseFromAI }) {
  /* const [updateMessage] = useContext(ChatBotContext); */

  return (
    <div className="h-[10%] w-[99%] mx-auto">
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
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Be Genius"
          className="peer h-full w-full rounded-[7px] !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
        ></textarea>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5  hidden h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        <button onClick={() => getResponseFromAI()}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEPUlEQVR4nO1YW2wUVRg+QcKL8akxc2Z3AauU4goaa4JIyzm7ra1QLraNlVK0lUtBSKMtjZRbsWLLrWlrY2mBzbJbZmcGatAHDfqgkQQTuSRIKbuJ7+qDl0R9IRDgN2fYWWY6292Zss50k/2SPyc5ey7ft+c///nnRyiHHHLIIYccJgHHLSvFPB3FPP0N8/Qe5inYY+QuxvRXtjfHET+yCq/XOwtjcso+wjS1YRpknEwLwDwJOU6anyiCBKy4TWIix9Mwz9MFCKEZyD7MwJg8y/FE0Ivw0bQz4z6vkh9BDoPDNKJxpTNpJ8QvrDLB5fIXqv3CmOARY/JnYlT6V4zJYJf1fTOUOIH5z624L0alc2JULEghgNxVJyBU+5hKPhKT/rKTuBg3YVxKCHC5fUof4xL+edQ92QkkJqh9yj/vAHkxJkPPV4O6y6z2R2LyWfMCbHYbMSbDsQsnYVXjFuDdvuQCotLfVk7ANuKByyGoe/898MwtTRpOtWMtCej7+hisbGiCps5dEP5JyDjxkesR2PxhO+QXVKR8D6YsgKx+K9FfuKgSWvo6IXJTemTikZsStPZ3woLnVxrILil7E7pG+zMjoHZ7s2GDouIa2D9ydMrkO8JH4MXiasO6ixa/DrtOdDM/V8ZlRAALZ81HO1gsNmxIV62Hni8HTRM//MUAlFTWG9Zhazcf6YDT46JufEYEqBa6JsCm/TvhqXnluoV5lw9eq9sIn353YlLig98HoKppmyGyzMkvg/rWFgheHUk6L6MCVDv5Y0hxK7fHr9vAPbtU6deSCVwKKwQ9c/SRxT3brwga/iGY8sT+FwHap76sptHgDk8XVigRq7G9DeY+Yzyt5es2wsC3x025nDUBmI7FE6cxMwJU+/hMLyz216ZNi4tXrINDnw+Yvi+idQElT2JMGlhrRYBqe4KHYeFLawzEX3i5CnYOd1kiLk5FQDJY3fD0jQjsGPgI1ryzFaq3bIP2492P9GZguwVk2njXg6jFWhMuRA5ymNxi7XQR8Er5WkUAa9MK4DC9zQazdroICF0T4IDUq7TpT0Djb9NBgDAuQe/5IaWd+FtWCCitaXgQfpfXmT0B4yelkwLyCx4+gssq63WpfNqP+ng5xVEB2w/t04VRf9XbSphOJUBTViGC0wLEmAxbD+zWiXj1jUYlY00ehTji1w5mdRn2NZbsEtlpDe1tOhEVazckXNx4CpgG0+U0Zs1btNqQtK1vazFksXgKxvPkaqribiBTIlhWqhXA8v9MrY1SgdUiMU/PsoqYy+PLnhOYCKWc5/BFfvfgXh35pRV1vyBEZyIzkGPyfDEq/+kU+db+zkRCx6yksv5Oz/lhL7ICVotk5TwxKv9jJ/kPhrpA675FxdW/d5/7ZCHKFnCY/PHwXaJX8vKWPoGyCRwmFxUBmI65XGV5KNvAceWPcxz1sdZpLjmgJPgP0wwdScgF8ucAAAAASUVORK5CYII=" />
        </button>
      </div>
    </div>
  );
}
