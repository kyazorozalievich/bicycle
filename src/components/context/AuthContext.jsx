import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";

const authContext = createContext();
export const useAuth = () => useContext(authContext);
const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const googleProvider = new GoogleAuthProvider();

  //Function
  async function signInWithGoogle() {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error.message);
    }
  }
  function logOutWithGoogle() {
    return signOut(auth);
  }
  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({ type: "GET_USER", payload: user });
    });
  }
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  //

  useEffect(() => {
    getUser();
  }, []);

  const value = {
    register,
    signIn,
    signInWithGoogle,
    logOutWithGoogle,
    user: state.user,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
