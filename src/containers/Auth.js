import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FirebaseAuth } from "../database/Database";

export async function EmailPasswordAuth(email, password) {
  try {
    await signInWithEmailAndPassword(FirebaseAuth, email, password);
    return true;
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
    return connectedUser;
  } catch (err) {
    //console.error(err.message())
    throw new Error(err.message);
  }
}

export async function CreateUser(email, password) {
  try {
    await fetch("https://9lonbzqf61.execute-api.us-east-1.amazonaws.com/dev", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  } catch (err) {
    throw new Error(err.message);
  }
}
