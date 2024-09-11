import React from "react";
import notpage from "../../assets/image/notpage.jpg";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[100px]">
      <div
        className="container w-[90%]"
        style={{
          backgroundImage: `url(${notpage})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative">
          <button
            className="absolute top-[550px] left-[190px] w-[470px] text-[25px] text-white font-[700] rounded-[20px] h-[100px] bg-red-600"
            onClick={() => navigate("/")}
          >
            Главная
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
