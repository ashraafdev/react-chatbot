import {
  Route,
  Routes,
  useLocation,
  redirect,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import ChatBot from "./pages/main/chatbot.jsx";
import "./App.css";
import Login from "./pages/login/login.jsx";
import RequireAuth from "./middleware/Auth.jsx";
import { CurrentUser, SignOut } from "./containers/Auth.js";
import toast from "react-hot-toast";
import Test from "./pages/testss/Test.jsx";
import { useAuthState } from "./hooks/Auth.js";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function App() {
  const { authState, isPending } = useAuthState();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (!authState && !isPending)
      setIsAuthenticated(false)
    else if (authState && !isPending) 
      setIsAuthenticated(true)
  }, [authState, isPending]);

  return (
    <AuthContext.Provider value={{isAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<ChatBot />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/test" exact element={<Test />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
