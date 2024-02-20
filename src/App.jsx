import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ChatBot from "./pages/main/chatbot.jsx";
import Login from "./pages/login/login.jsx";
import { useAuthState } from "./hooks/Auth.js";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Conversations from "./pages/conversation/conversation.jsx";

export const AuthContext = createContext();

function App() {
  const { authState, isPending } = useAuthState();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    console.log(1)
    if (!authState && !isPending)
      setIsAuthenticated(false)
    else if (authState && !isPending) 
      setIsAuthenticated(true)
  }, [authState, isPending]);

  return (
    <AuthContext.Provider value={{isAuthenticated, authState}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/conversations" exact element={<Conversations />} />
          <Route path="/home" exact element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
