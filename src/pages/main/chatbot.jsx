import { createContext, useContext, useEffect, useState } from "react";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./chatbot.css";

export const ChatBotContext = createContext(null);

export default function ChatBot() {
    const [message, setMessage] = useState('');

    const updateMessage = (val) => {
        setMessage(val)
    }

    useEffect(() => {
        console.log(message)
    }, [message]);

    return (
        <ChatBotContext.Provider value={[updateMessage]}>
            <main>
                <Header />
                <Body />
                <Footer />
            </main>
        </ChatBotContext.Provider>
    );
}