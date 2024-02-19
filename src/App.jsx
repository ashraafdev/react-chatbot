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
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
