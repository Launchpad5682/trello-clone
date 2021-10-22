import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const value = {};

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
