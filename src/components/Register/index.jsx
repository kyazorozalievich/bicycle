import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
//Img
import iconEmail from "../../assets/image/iconEmail.png";
//Icon
import { FcGoogle } from "react-icons/fc";
import { RxExit } from "react-icons/rx";
//

const Register = () => {
  const navigate = useNavigate();
  const { register, signIn, signInWithGoogle, user, logOutWithGoogle } =
    useAuth();

  //USESTATE
  const [authBlock, setAuthBlock] = useState(false);
  //Sign In
  const [signinUser, setSigninUser] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  //Sign Up
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  //function
  async function handleSignIn() {
    if (
      signinUser.trim() === "" ||
      signinEmail.trim() === "" ||
      signinPassword.trim() === ""
    ) {
      toast.error("Заполните пустые поля!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setAuthBlock(true);
      try {
        await register(signinEmail, signinPassword);
        setSigninUser("");
        setSigninEmail("");
        setSigninPassword("");
      } catch (error) {
        alert(error.message);
      }
    }
  }
  async function handleSignUp() {
    try {
      await signIn(signupEmail, signupPassword);
      navigate("/");
      setSignupEmail("");
      setSignupPassword("");
    } catch (error) {
      alert(error.message);
    }
  }
  //

  return (
    <div className="">
      {user ? (
        <div className="w-[100%] pt-[100px]">
          <div className="flex items-center justify-center mt-[50px] flex-col gap-[5px]">
            <div className="">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-[100px] rounded-[50px]"
                />
              ) : (
                <img src={iconEmail} alt="" className="w-[100px]" />
              )}
            </div>
            <h1 className="text-[20px] font-[600]">{user?.displayName}</h1>
            <h1>{user?.email}</h1>
            <button
              className="w-[200px] h-[40px] rounded-[50px] border-2 border-solid border-red-600 text-red-600 mt-[30px] flex items-center gap-[10px] justify-center"
              onClick={() => logOutWithGoogle()}
            >
              Выйти из аккаунта
              <RxExit />
            </button>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <ToastContainer />
          <section>
            {!authBlock ? (
              <div className="form-box">
                <div className="form-value">
                  <form action="">
                    <h2 className="login font-[600]">Войти</h2>
                    <div className="inputbox">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input
                        className="input"
                        type="email"
                        required
                        onChange={(e) => setSignupEmail(e.target.value)}
                        value={signupEmail}
                      />
                      <label for="">E-mail*</label>
                    </div>
                    <div className="inputbox">
                      <ion-icon name="lock-closed-outline"></ion-icon>
                      <input
                        className="input"
                        type="password"
                        required
                        onChange={(e) => setSignupPassword(e.target.value)}
                        value={signupPassword}
                      />
                      <label for="">Пароль*</label>
                    </div>
                    <div className="forget">
                      <label>
                        <input className="input" type="checkbox" /> Remember me
                      </label>
                      <label>
                        <a href="#">Forgot password?</a>
                      </label>
                    </div>
                    <button
                      className="loginbutton text-white"
                      onClick={() => handleSignUp()}
                    >
                      Войти
                    </button>
                    <div className="register">
                      <p>
                        У меня нет аккаунта ?{" "}
                        <a href="#" onClick={() => setAuthBlock(true)}>
                          Регистрация
                        </a>
                      </p>
                    </div>
                    <div
                      className="flex items-center justify-center ml-[30px] cursor-pointer gap-[10px] w-[250px] font-[600] h-[40px] rounded-[50px] bg-white"
                      onClick={() => signInWithGoogle()}
                    >
                      <h1>Войти через Google</h1>
                      <a className="">
                        <FcGoogle />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="form-box">
                <div className="form-value">
                  <form action="">
                    <h2 className="login font-[600]">Регистрация</h2>
                    <div className="inputbox">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input
                        className="input"
                        type="text"
                        required
                        onChange={(e) => setSigninUser(e.target.value)}
                        value={signinUser}
                      />
                      <label for="">Имя*</label>
                    </div>
                    <div className="inputbox">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input
                        className="input"
                        type="email"
                        required
                        onChange={(e) => setSigninEmail(e.target.value)}
                        value={signinEmail}
                      />
                      <label for="">E-mail*</label>
                    </div>
                    <div className="inputbox">
                      <ion-icon name="lock-closed-outline"></ion-icon>
                      <input
                        className="input"
                        type="password"
                        required
                        onChange={(e) => setSigninPassword(e.target.value)}
                        value={signinPassword}
                      />
                      <label for="">Пароль*</label>
                    </div>
                    <div className="forget">
                      <label>
                        <input className="input" type="checkbox" /> Remember me
                      </label>
                      <label>
                        <a href="#">Forgot password?</a>
                      </label>
                    </div>
                    <button
                      className="loginbutton text-white"
                      onClick={() => handleSignIn()}
                    >
                      Регистрация
                    </button>
                    <div className="register">
                      <p>
                        Уже есть аккаунт ?{" "}
                        <a href="#" onClick={() => setAuthBlock(false)}>
                          Войти
                        </a>
                      </p>
                    </div>
                    <div
                      className="flex items-center justify-center ml-[30px] cursor-pointer gap-[10px] w-[250px] font-[600] h-[40px] rounded-[50px] bg-white"
                      onClick={() => signInWithGoogle()}
                    >
                      <h1>Войти через Google</h1>
                      <a className="">
                        <FcGoogle />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default Register;
