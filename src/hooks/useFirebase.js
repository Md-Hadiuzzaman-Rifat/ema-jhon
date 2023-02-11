import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitializeApp from "../Firebase/Firebase.initialize";

FirebaseInitializeApp();

const useFirebase = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }else{
        setLoading(false)
        setUser({})
      }
    });
    return unsubscribe
  }, []);

  async function login() {
    try {
      setError(false);
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setLoading(false);
      setError(true);
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    signOut(auth);
    setUser({})
  }

  return {
    login,
    logout,
    loading,
    error,
    user,
  };
};

export default useFirebase;
