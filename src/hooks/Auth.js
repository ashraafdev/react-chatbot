import { useEffect, useState } from "react";
import { FirebaseAuth } from "../database/Database";
import { onAuthStateChanged } from "firebase/auth";

export function useAuthState() {
  const [authState, setAuthState] = useState(false);
  const [isPending, setIsPending] = useState(true);

  onAuthStateChanged(FirebaseAuth, async (user) => {
    setIsPending(true);
    
    if (user) {
      setAuthState(user);
    } else {
      setAuthState(false);
    }

    setIsPending(false);
  });

  return { authState, isPending };
}
