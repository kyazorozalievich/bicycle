import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
//Img
import america from "../../assets/image/america.png";
import france from "../../assets/image/france.png";
import ispany from "../../assets/image/ispany.png";
import italy from "../../assets/image/italy.webp";
import shvecaria from "../../assets/image/shvecaria.jpg";
//Icon
import { RiNavigationLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
//

const BicycleCard = ({ el }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  //UseSatate
  const [openOver, setOpenOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //function
  function postTelegram() {
    if (name.trim() === "" || phone.trim() === "") {
      toast.error("Заполните все обязательные поля", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success("Сообщение отрправлено!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      let my_id = `-1002155692436`;
      let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
      let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

      let newProduct = {
        chat_id: my_id,
        parse_model: "html",
        text: `
      Поступило Сообщение!
      Имя: ${name}
      Телефон: ${phone}
      `,
      };
      axios.post(api_key, newProduct);
      setOpenModal(false);
      setName("");
      setPhone("");
    }
  }

  function authTelegram() {
    if (!user) {
      toast.error("Авторизуйтесь чтобы отправлять сообщения через Telegram", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      setOpenModal(true);
    }
  }
  //

  return (
    <div className="">
      <div
        className="w-[300px] h-[520px] bg-gray-50 rounded-[10px] flex items-center flex-col pt-[50px] gap-[20px] relative shadow-xl"
        onMouseOver={() => setOpenOver(true)}
        onMouseOut={() => setOpenOver(false)}
      >
        <div className="">
          <img
            src={el.country === "america" ? america : null}
            alt=""
            className="w-[120px]  absolute top-[5px] left-[5px] rounded-[10px] "
          />
          <img
            src={el.country === "france" ? france : null}
            alt=""
            className="w-[100px]  absolute top-[-10px] left-[5px] rounded-[30px] "
          />
          <img
            src={el.country === "italy" ? italy : null}
            alt=""
            className="w-[100px]  absolute top-[5px] left-[5px] "
          />
          <img
            src={el.country === "shvecia" ? shvecaria : null}
            alt=""
            className="w-[100px]  absolute top-[-10px] left-[5px] rounded-[30px] "
          />
          <img
            src={el.country === "ispania" ? ispany : null}
            alt=""
            className="w-[100px]  absolute top-[5px] left-[5px] rounded-[5px] "
          />
        </div>
        <div className="w-[300px] h-[200px] flex items-center justify-center pl-[20px]">
          <Zoom>
            <img src={el.img} alt="" className="w-[90%]" />
          </Zoom>
        </div>
        <div className="w-[300px] p-5 flex items-start justify-start flex-col gap-[10px]">
          <div className="flex items-start flex-col gap-[10px]">
            <div className="flex items-start flex-col justify-start">
              <h1 className="text-[20px] ">{el.name}</h1>
              <h1 className="text-[20px] ">{el.brend}</h1>
            </div>
          </div>
          <div className="flex items-center gap-[50px]">
            <h1 className="text-gray-600">{el.price} Сом</h1>

            <button
              className="podrobnoe w-[100px] rounded-[5px] font-[600] text-[12px] h-[30px] border-2 border-solid border-black "
              onClick={() => navigate(`/details/${el._id}`)}
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          className=""
          style={{
            display: openOver ? "block" : "none",
          }}
          onClick={() => authTelegram()}
        >
          <div className="absolute bottom-[20px] right-[50px] w-[200px] h-[40px] bg-orange-500 text-white font-[600] flex items-center justify-center gap-[10px] rounded-[10px] cursor-pointer">
            <a className="">
              <RiNavigationLine />
            </a>
            <h1>В 1 клик</h1>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div
        className=""
        style={{
          display: openModal ? "block" : "none",
        }}
      >
        <div
          className=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 49,
          }}
          onClick={() => setOpenModal(false)}
        ></div>
        <div
          className="rounded-[10px]"
          style={{
            position: "fixed",
            top: 150,
            left: 400,
            width: "700px",
            height: "460px",
            backgroundColor: "white",
            zIndex: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex items-center p-5 relative">
            <a
              className="absolute top-[-20px] right-[20px] text-[20px] text-gray-500"
              onClick={() => setOpenModal(false)}
            >
              <AiOutlineClose />
            </a>
            <div className="w-[50%] flex items-center flex-col gap-[40px]">
              <h1 className="embed text-[20px] font-[700] ">
                ЗАКАЗ В ОДИН КЛИК
              </h1>
              <img src={el.img} alt="" className="w-[90%]" />
              <h1>
                {el.name},{el.brend}
              </h1>
            </div>
            <div className="w-[50%] flex items-start flex-col gap-[20px]">
              <p className="text-[15px]">
                Укажите ваше имя и телефон, и наш менеджер <br /> свяжется с
                вами для оформления заказа.
              </p>
              <input
                type="text"
                placeholder="Имя"
                className="w-[300px] h-[40px] text-[15px] bg-gray-100 rounded-[10px] pl-[10px]"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="number"
                placeholder="Телефон"
                className="w-[300px] h-[40px] text-[15px] bg-gray-100 rounded-[10px] pl-[10px]"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <p className="text-[10px]">
                Нажимая на кнопку «Заказать» я даю своё согласие на обработку
                персональных данных и принимаю{" "}
                <span className="text-orange-500">условия соглашения</span>
              </p>
              <button
                className="w-[300px] h-[40px] bg-orange-500 rounded-[10px] text-white font-[600] "
                onClick={() => postTelegram()}
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;
