import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../database/Database";

export async function EmailPasswordAuth(email, password) {
    try {
        await signInWithEmailAndPassword(FirebaseAuth, email, password)
    } catch (err) {
        console.error(err)
    }
}