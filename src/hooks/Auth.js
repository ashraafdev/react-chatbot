import { useState } from "react";
import { FirebaseAuth } from "../database/Database";
import { onAuthStateChanged } from "firebase/auth";

export function useAuthState() {
  const [authState, setAuthState] = useState(false);

  onAuthStateChanged(FirebaseAuth, (user) => {
    if (user) {
      setAuthState(user);
    } else {
      setAuthState(false);
    }
  });

  return { authState };
}
