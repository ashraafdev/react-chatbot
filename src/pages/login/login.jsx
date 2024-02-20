import { useRef } from "react";
import { EmailPasswordAuth } from "../../containers/Auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  async function login(evnt) {
    evnt.preventDefault();
    try {
      await EmailPasswordAuth(email.current.value, password.current.value);
      toast.success("Logged with success");
      navigate("/home");
    } catch (err) {
      toast.error(`Error => ${err.message}`);
    }
  }

  return (
    <>
      <div className="flex flex-row h-screen bg-[#070F2B]">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex h-[70%] rounded-md p-10">
            <img src="/login-1.png" alt="" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex bg-[#265073] w-[90%] px-10 py-10 rounded-md m-5">
            <form onSubmit={(e) => login(e)} className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  ref={email}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  ref={password}
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 placeholder:text-dark text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="•••••••••"
                  required
                />
              </div>
              {/*   <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required
                    />
                    </div>
                    <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    I agree with the{" "}
                    <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        terms and conditions
                    </a>
                    .
                    </label>
                </div> */}
              <button
                type="submit"
                className="text-white bg-[#535C91] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
