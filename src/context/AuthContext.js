import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //signup function
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //login function
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //sign out function
  function signout() {
    setCurrentUser(null);
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // cleanup
    return () => {
      unsubscribe();
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
