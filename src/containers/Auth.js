import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FirebaseAuth } from "../database/Database";

export async function EmailPasswordAuth(email, password) {
    try {
        await signInWithEmailAndPassword(FirebaseAuth, email, password)
    } catch (err) {
        //console.error(err.message())
        throw new Error(err.message);
    }
}

export async function SignOut() {
    try {
        await signOut(FirebaseAuth);
    } catch (err) {
        //console.error(err.message())
        throw new Error(err.message);
    }
}

export function CurrentUser() {
    try {
        let connectedUser = FirebaseAuth.currentUser;
        return connectedUser
    } catch (err) {
        //console.error(err.message())
        throw new Error(err.message);
    }
}