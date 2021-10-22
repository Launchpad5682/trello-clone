import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../auth/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //signup function
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //login function
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //sign out function
  function signout() {
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // cleanup
    return () => {
      setCurrentUser(null);
    };
  }, []);

  const value = { currentUser, signup, login, signout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};
