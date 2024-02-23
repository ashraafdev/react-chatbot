import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
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
    if (!authState && !isPending) setIsAuthenticated(false);
    else if (authState && !isPending) setIsAuthenticated(true);
  }, [authState, isPending]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authState }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Navigate to="/login" replace={true} />}
          />
          <Route path="/login" exact element={<Login />} />
          <Route path="/conversations" exact element={<Conversations />} />
          <Route
            path="/conversation/:conversationId?"
            exact
            element={<ChatBot />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
