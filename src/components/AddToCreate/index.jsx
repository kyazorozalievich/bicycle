import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Img
import velo from "../../assets/image/velosiped.png";
import zapchasti from "../../assets/image/zapchasti.png";
import acsessuar from "../../assets/image/acsessuar.png";
//

const AddToCreate = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white pt-[100px]">
      <div className="container w-[90%]">
        <div className="flex items-center flex-col justify-center mt-[50px] gap-[40px]">
          <div className="flex items-center gap-[30px]">
            <div
              className="w-[910px] h-[250px] bg-black relative flex items-start justify-center rounded-[10px] cursor-pointer"
              onClick={() => navigate("/create")}
            >
              <h1 className="text-[40px] font-[700] mr-[250px] mt-[40px]">
                ВЕЛОСИПЕДЫ+
              </h1>
              <img
                src={velo}
                alt=""
                className="w-[60%] absolute bottom-0 right-0"
              />
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div
              className="w-[440px] h-[200px] bg-black rounded-[10px] flex items-center justify-center relative cursor-pointer"
              onClick={() => navigate("/createaccessories")}
            >
              <img
                src={acsessuar}
                alt=""
                className="absolute top-0 right-0 w-[50%]"
              />
              <h1 className="text-[40px] font-[700] mt-[40px] mr-[100px]">
                АКСЕССУАРЫ+
              </h1>
            </div>
            <div
              className="w-[440px] h-[200px] rounded-[10px] bg-black flex items-start relative cursor-pointer"
              onClick={() => navigate("/createspareparts")}
            >
              <h1 className="text-[40px] font-[700] ml-[50px] mt-[90px]">
                ЗАПЧАСТИ+
              </h1>
              <img
                src={zapchasti}
                alt=""
                className="w-[30%] absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCreate;
