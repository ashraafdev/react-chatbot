import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1m0Z4aDVc505GfUvDLXEADg_OKX1luyA",
    authDomain: "chatbot-ashraafdev.firebaseapp.com",
    projectId: "chatbot-ashraafdev",
    storageBucket: "chatbot-ashraafdev.appspot.com",
    messagingSenderId: "584964740150",
    appId: "1:584964740150:web:5edb79470743b446d93497",
    measurementId: "G-R1R5NGQRL9"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;