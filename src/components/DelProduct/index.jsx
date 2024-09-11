import React from "react";
import { useNavigate } from "react-router-dom";
//Img
import velo from "../../assets/image/velosiped.png";
import zapchasti from "../../assets/image/zapchasti.png";
import acsessuar from "../../assets/image/acsessuar.png";
//

const DelProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white pt-[100px]">
      <div className="container w-[90%]">
        <div className="flex items-center flex-col justify-center mt-[50px] gap-[40px]">
          <div className="flex items-center gap-[30px]">
            <div
              className="w-[910px] h-[250px] bg-black relative flex items-start justify-center rounded-[10px] cursor-pointer"
              onClick={() => navigate("/delbicycle")}
            >
              <h1 className="text-[20px] font-[700] mr-[350px] mt-[40px]">
                УДАЛИТЬ ВЕЛОСИПЕДЫ
              </h1>
              <img
                src={velo}
                alt=""
                className="w-[70%] absolute bottom-0 right-0"
              />
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <div
              className="w-[440px] h-[200px] bg-black rounded-[10px] flex items-center justify-center relative cursor-pointer"
              onClick={() => navigate("/delacces")}
            >
              <img
                src={acsessuar}
                alt=""
                className="absolute top-0 right-0 w-[40%]"
              />
              <h1 className="text-[20px] font-[700] mt-[40px]">
                УДАЛИТЬ АКСЕССУАРЫ
              </h1>
            </div>
            <div
              className="w-[440px] h-[200px] rounded-[10px] bg-black flex items-start relative cursor-pointer"
              onClick={() => navigate("/delspareparts")}
            >
              <h1 className="text-[20px] font-[700] ml-[50px] mt-[100px]">
                УДАЛИТЬ ЗАПЧАСТИ
              </h1>
              <img
                src={zapchasti}
                alt=""
                className="w-[20%] absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelProduct;
