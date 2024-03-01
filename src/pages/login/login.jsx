import { useContext, useEffect, useRef } from "react";
import { EmailPasswordAuth } from "../../containers/Auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  async function login(evnt) {
    evnt.preventDefault();
    try {
      toast.promise(EmailPasswordAuth(email.current.value, password.current.value), {
        loading: 'Loading',
        success: () => {
          setTimeout(() => {
            navigate("/conversations");
          });

          return 'Logged with success';
        },
        error: (err) => `Error => ${err.message}`,
      });
    } catch (err) {
      toast.error(`Error => ${err.message}`);
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/conversations");
  }, [isAuthenticated]);

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
              <div className="flex gap-5 items-center">
                <button
                  type="submit"
                  className="text-white bg-[#535C91] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <div className="text-white text-[20px]">or</div>
                <Link
                  to="/register"
                  className="text-white bg-[#16a34a] hover:bg-[#15803d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
