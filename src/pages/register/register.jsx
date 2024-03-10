import { useContext, useEffect, useRef } from "react";
import { CreateUser } from "../../containers/Auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

export default function Register() {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  async function register(evnt) {
    evnt.preventDefault();
    if (password.current.value == confirmPassword.current.value) {
      toast.promise(CreateUser(email.current.value, password.current.value), {
        loading: "Loading",
        success: () => {
          setTimeout(() => {
            navigate("/conversations");
          }, 500);

          return "Registred with success";
        },
        error: (err) => `Error => ${err.message}`,
      });
    } else {
      toast.error("Please Confirm Your Password!");
    }
  }

  useEffect(() => {
    //if (isAuthenticated) navigate("/conversations");
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex flex-row h-screen bg-login-gradient">
        <div className="w-[60%] flex">
          <div className="flex h-full w-full rounded-r-3xl bg-login bg-center bg-cover"></div>
        </div>
        <div className="w-[40%] flex flex-row items-center">
          <div className="flex-1 space-y-2 flex flex-col divide-y divide-dashed">
            <div className="flex w-[90%] mx-auto py-5">
              <h1 className="text-5xl text-white">
                Start your journey with us!
              </h1>
            </div>
            <div className="flex w-[90%] mx-auto py-5">
              <form id="newMember" onSubmit={(e) => register(e)} className="w-full">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    ref={email}
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    ref={password}
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 placeholder:text-dark text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    ref={confirmPassword}
                    type="password"
                    className="bg-gray-50 border border-gray-300 placeholder:text-dark text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="w-[90%] mx-auto py-5">
              <button
                form="newMember"
                className="text-white bg-[#16a34a] hover:bg-[#15803d] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[1.75em] rounded-lg text-sm w-full px-5 py-4 text-center"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
