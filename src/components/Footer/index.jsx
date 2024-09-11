import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Img
import footerbg from "../../assets/image/footerbg.png";
import footerlogo from "../../assets/image/headerlogo.png";
//Icon
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { GiSmartphone } from "react-icons/gi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
//

const Footer = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  
  return (
    <div
      className="w-[100%] text-white  mt-[50px]"
      style={{
        background: "#101010",
      }}
    >
      <div
        className="flex items-center justify-between h-[200px]"
        style={{
          background: "#131313",
        }}
      >
        <div className="flex items-start flex-col gap-[20px] ml-[150px]">
          <h1 className="embed font-[700] text-[30px]">
            ПОДПИШИТЕСЬ НА НАШИ НОВОСТИ
          </h1>
          <div className="flex items-center gap-[20px]">
            <input
              type="text"
              placeholder="E-mail"
              className="w-[250px] h-[30px] text-black pl-[10px] rounded-[5px]"
            />
            <button className="w-[100px] h-[30px] rounded-[5px] bg-orange-500 text-[15px] font-[600]">
              Подписаться
            </button>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="">
              {check ? (
                <a className="cursor-pointer" onClick={() => setCheck(false)}>
                  <ImCheckboxChecked />
                </a>
              ) : (
                <a className="cursor-pointer" onClick={() => setCheck(true)}>
                  <ImCheckboxUnchecked />
                </a>
              )}{" "}
            </div>
            <h1>Согласен(на) на обработку персональных данных</h1>
          </div>
        </div>
        <img src={footerbg} alt="" className="w-[35%]" />
      </div>
      <div className="container w-[90%] h-[250px] pt-[10px]">
        <div className="flex items-start justify-between">
          <div className="flex items-start flex-col gap-[50px]">
            <img src={footerlogo} alt="" className="w-[30%]" />
            <p className="w-[280px] ">
              Компания World-bikes специализируется на продаже товаров для
              велосипедного спорта.
            </p>
          </div>
          <div className="flex items-start flex-col gap-[5px]">
            <h1 className="text-[25px] font-[600]">Каталог</h1>
            <h6>Trade in</h6>
            <h6 onClick={() => navigate("/bicycles")}>Велосипеды</h6>
            <h6 onClick={() => navigate("/spareparts")}>Запчасти</h6>
            <h6 onClick={() => navigate("/accessories")}>Аксессуары</h6>
          </div>
          <div className="flex items-start flex-col gap-[5px]">
            <h1 className="text-[25px] font-[600]">Для клиента</h1>
            <h6>О нас</h6>
            <h6 onClick={() => navigate("/contact")}>Контакты</h6>
            <h6 onClick={() => navigate("/velomaster")}>Веломастерская</h6>
            <h6 onClick={() => navigate("/userinfo")}>
              Пользовательское соглашение
            </h6>
          </div>
          <div className="flex items-start flex-col gap-[10px]">
            <h1 className="text-[25px] font-[600]">Контакты</h1>
            <div className="flex items-center gap-[10px]">
              <a className="text-[20px]">
                <GiSmartphone />
              </a>
              <h6>+996 (995) 25-55-92</h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <a className="text-[20px]">
                <TiLocationArrowOutline />
              </a>
              <h6>г.Бишкек</h6>
            </div>
            <div className="flex items-center gap-[10px]">
              <a className="text-[20px]">
                <MdOutlineMail />
              </a>
              <h6>ashimalievkyaz@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
