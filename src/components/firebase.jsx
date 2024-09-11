import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjdBSLB6c_03a-Hf8VH5zUZu_5hVCxezQ",
  authDomain: "authbicycle.firebaseapp.com",
  projectId: "authbicycle",
  storageBucket: "authbicycle.appspot.com",
  messagingSenderId: "604001890508",
  appId: "1:604001890508:web:dd224aa1096f8a391f5269",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
