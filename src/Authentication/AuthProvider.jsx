import React from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const name = "ariful";
  const authinfo = {
    name,
    createuser,signinuser
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
