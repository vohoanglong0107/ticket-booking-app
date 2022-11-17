import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { firebase } from "./firebase";

export type AuthUser = {
  email: string;
} | null;

interface IAuthContext {
  user: AuthUser;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = createContext<IAuthContext | null>(null);
export const AuthProvider = ({ children }) => {
  const auth = getAuth(firebase);
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const value = { user: auth.currentUser, login, logout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
