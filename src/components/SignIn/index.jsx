import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { data } from "autoprefixer";

const SignIn = () => {
  const { register, signIn } = useAuth();

  //UseState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useState("");

  //function
  async function handleRegister() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }
  async function handlSignIn() {
    try {
      await signIn(email, password);
      setEmail("");
      setPassword("");
      dataUser("");
    } catch (error) {
      alert(error.message);
    }
  }
  //
  
  return (
    <div className="pt-[100px] bg-white rounded-[10px] flex items-center justify-center">
      <div className="flex items-center flex-col gap-[20px] mt-[150px]">
        <input
          type="text"
          placeholder="Ф.И.О"
          className="w-[300px] h-[40px] bg-gray-100 rounded-[10px] pl-[10px]"
          onChange={(e) => setDataUser(e.target.value)}
          value={dataUser}
        />
        <input
          type="text"
          placeholder="E-mail"
          className="w-[300px] h-[40px] bg-gray-100 rounded-[10px] pl-[10px]"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-[300px] h-[40px] bg-gray-100 rounded-[10px] pl-[10px]"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex items-center gap-[10px]">
          <button
            className="w-[120px] h-[40px] rounded-[10px] bg-black text-white font-[600]"
            onClick={() => handleRegister()}
          >
            SignUp
          </button>
          <button
            className="w-[120px] h-[40px] rounded-[10px] bg-black text-white font-[600]"
            onClick={() => handlSignIn()}
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
