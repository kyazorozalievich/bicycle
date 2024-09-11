import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Footer";
//Icon
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import {MdOutlineRadioButtonUnchecked,} from "react-icons/md";
//

const Order = () => {
  const navigate = useNavigate();
  const { order } = useSelector((s) => s.order);

  //USESTATE
  //Client
  const [clientName, setClientName] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientHome, setClientHome] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientStreet, setClientStreet] = useState("");
  const [clientComment, setClientComment] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  //Dostavka
  const [kyrier, setKyerier] = useState(false);
  const [samovuvoz, setSamovuvoz] = useState(false);
  //Oplata
  const [online, setOnline] = useState(false);
  const [magazine, setMagazine] = useState(false);
  const [kyriercarta, setKyriercarta] = useState(false);
  const [kyriernalichka, setKyriernalichka] = useState(false);
  //
  const [orderModal, setOrderModal] = useState(false);

  //function
  function postTelegram() {
    if (
      clientName.trim() === "" ||
      clientCity.trim() === "" ||
      clientHome.trim() === "" ||
      clientPhone.trim() === "" ||
      clientEmail.trim() === "" ||
      clientStreet.trim() === "" ||
      clientLastName.trim() === "" 
    ) {
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
    } else if (
      online === true ||
      kyrier === true ||
      magazine === true ||
      samovuvoz === true ||
      kyriercarta === true ||
      kyriernalichka === true 
    ) {
      setOrderModal(true);

      let my_id = `-1002155692436`;
      let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
      let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

      let newProduct = {
        chat_id: my_id,
        parse_model: "html",
        text: `
        Поступил заказ!
        Имя клиента: ${clientName}
        Адрес клиента: г.${clientCity},ул.${clientStreet},д.${clientHome}
        Номер телефона: ${clientPhone}
        Email клиента: ${clientEmail}
        Товар: ${order.map((el) => el.name)}
        Штук: ${order.map((el) => el.count)}
        Цена: ${order.reduce(
          (acc, el) => acc + ((el.price * 90) / 100) * el.count,
          0
        )} Сом
        Комментарий клиента: ${clientComment}
        Выбранный способ доставки: ${
          kyrier ? "Курьером" : samovuvoz ? "Самовывозом" : ""
        }
        Выбранный способ оплаты: ${
          online
            ? "Онлайн оплата"
            : kyriercarta
            ? "Курьеру картой"
            : kyriernalichka
            ? "Курьеру наличкой"
            : magazine
            ? "Оплата в магазине"
            : ""
        }

        `,
      };

      axios.post(api_key, newProduct);
      setClientHome("");
      setClientCity("");
      setClientName("");
      setClientEmail("");
      setClientPhone("");
      setClientStreet("");
      setClientComment("");
      setClientLastName("");
      setOnline(false);
      setKyerier(false);
      setMagazine(false);
      setSamovuvoz(false);
      setKyriercarta(false);
      setKyriernalichka(false);
    }
  }
  //

  return (
    <>
      <div className="pt-[100px]">
        <div className="container w-[90%]">
          <div className="flex items-center">
            <h5 className="cursor-pointer" onClick={() => navigate("/")}>
              Главная
            </h5>
            /
            <h5 className="cursor-pointer text-orange-500">
              {" "}
              Оформление заказа
            </h5>
          </div>
          <h1 className="embed text-[30px] font-[600] my-[50px]">
            ОФОРМЛЕНИЕ ЗАКАЗА
          </h1>
          <div className="flex items-center flex-col gap-[30px]">
            <div className="flex items-center gap-[30px]">
              <div className="w-[800px] h-[450px] border-2 border-solid rounded-[10px] flex items-start p-10 flex-col justify-center gap-[30px]">
                <h1 className="text-[30px] font-[700]">1 ДЕТАЛИ ОПЛАТЫ</h1>
                <div className="flex items-center justify-center gap-[10px] flex-col">
                  <div className="flex items-center gap-[10px]">
                    <input
                      type="text"
                      placeholder="Имя*"
                      className="w-[350px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientName(e.target.value)}
                      value={clientName}
                    />
                    <input
                      type="text"
                      placeholder="Фамилия*"
                      className="w-[350px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientLastName(e.target.value)}
                      value={clientLastName}
                    />
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input
                      type="text"
                      placeholder="Город*"
                      className="w-[240px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientCity(e.target.value)}
                      value={clientCity}
                    />
                    <input
                      type="text"
                      placeholder="Улица*"
                      className="w-[300px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientStreet(e.target.value)}
                      value={clientStreet}
                    />
                    <input
                      type="text"
                      placeholder="Дом*"
                      className="w-[150px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientHome(e.target.value)}
                      value={clientHome}
                    />
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input
                      type="text"
                      placeholder="Телефон*"
                      className="w-[350px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientPhone(e.target.value)}
                      value={clientPhone}
                    />
                    <input
                      type="text"
                      placeholder="E-mail*"
                      className="w-[350px] h-[50px] pl-[10px] outline-none bg-gray-100 rounded-[10px]"
                      onChange={(e) => setClientEmail(e.target.value)}
                      value={clientEmail}
                    />
                  </div>
                  <textarea
                    type="text"
                    placeholder=" Коментарий к заказу"
                    className="w-[710px] h-[150px] pl-[10px] pt-[10px] outline-none bg-gray-100 rounded-[10px]"
                    onChange={(e) => setClientComment(e.target.value)}
                    value={clientComment}
                  ></textarea>
                </div>
              </div>
              <div className="w-[350px] h-[450px] border-2 border-solid rounded-[10px] flex items-start flex-col justify-center gap-[20px] p-8">
                <h1 className="text-[30px] font-[700]">
                  2 ДЕТАЛИ <br /> ДОСТАВКИ
                </h1>
                <div className="flex items-start flex-col gap-[10px]">
                  <h1 className="text-[20px] font-[600]">Способ доставки</h1>
                  <div className="flex items-start flex-col gap-[10px]">
                    <div className="text-[15px] text-gray-500 font-[600] flex items-center gap-[5px]">
                      <a className="text-[25px]">
                        {kyrier ? (
                          <MdOutlineRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => setKyerier(false)}
                          />
                        ) : (
                          <MdOutlineRadioButtonUnchecked
                            onClick={() => {
                              setKyerier(true), setSamovuvoz(false);
                            }}
                          />
                        )}
                      </a>
                      <h1>Курьерская доставка</h1>
                    </div>
                    <div className="text-[15px] text-gray-500 font-[600] flex items-center gap-[5px]">
                      <a className="text-[25px]">
                        {samovuvoz ? (
                          <MdOutlineRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => setSamovuvoz(false)}
                          />
                        ) : (
                          <MdOutlineRadioButtonUnchecked
                            onClick={() => {
                              setKyerier(false), setSamovuvoz(true);
                            }}
                          />
                        )}
                      </a>
                      <h1>Самовывоз</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-start flex-col gap-[10px]">
                  <h1 className="text-[20px] font-[600]">Способ оплаты</h1>
                  <div className="flex items-start flex-col gap-[10px]">
                    <div className="text-[15px] text-gray-500 font-[600] flex items-center gap-[5px]">
                      <a className="text-[25px]">
                        {online ? (
                          <MdOutlineRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => setOnline(false)}
                          />
                        ) : (
                          <MdOutlineRadioButtonUnchecked
                            onClick={() => {
                              setOnline(true);
                              setMagazine(false);
                              setKyriercarta(false);
                              setKyriernalichka(false);
                            }}
                          />
                        )}
                      </a>
                      <h1>Оплата онлайн, на сайте</h1>
                    </div>
                    <div className="text-[15px] text-gray-500 font-[600] flex items-center gap-[5px]">
                      <a className="text-[25px]">
                        {kyriercarta ? (
                          <MdOutlineRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => setKyriercarta(false)}
                          />
                        ) : (
                          <MdOutlineRadioButtonUnchecked
                            onClick={() => {
                              setOnline(false);
                              setMagazine(false);
                              setKyriercarta(true);
                              setKyriernalichka(false);
                            }}
                          />
                        )}
                      </a>
                      <h1>Оплата курьеру картой</h1>
                    </div>
                    <div className="text-[15px] text-gray-500 font-[600] flex items-center gap-[5px]">
                      <a className="text-[25px]">
                        {kyriernalichka ? (
                          <MdOutlineRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => setKyriernalichka(false)}
                          />
                        ) : (
                          <MdOutlineRadioButtonUnchecked
                            onClick={() => {
                              setOnline(false);
                              setMagazine(false);
                              setKyriercarta(false);
                              setKyriernalichka(true);
                            }}
                          />
                        )}
                      </a>
                      <h1>Оплата курьеру наличными</h1>
                    </div>
                    <div className="text-[15px] text-gray-500 font-[600] flex items-center gap-[5px]">
                      <a className="text-[25px]">
                        {magazine ? (
                          <MdOutlineRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => setMagazine(false)}
                          />
                        ) : (
                          <MdOutlineRadioButtonUnchecked
                            onClick={() => {
                              setOnline(false);
                              setMagazine(true);
                              setKyriercarta(false);
                              setKyriernalichka(false);
                            }}
                          />
                        )}
                      </a>
                      <h1>Оплата в магазине</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1180px] h-[250px] border-2 border-solid rounded-[10px] flex items-center justify-between p-8">
              <h1 className="text-[30px] font-[700]">3 ВАШ ЗАКАЗ</h1>
              <div className="flex items-start flex-col gap-[10px] w-[300px] ">
                <h1 className="text-[20px] font-[500] text-orange-500">
                  Курьерская доставка
                </h1>
                <div className="flex items-center gap-[20px]">
                  <div className="flex items-start flex-col gap-[10px] ">
                    <h1 className="text-[15px] text-gray-500 font-[500] mb-[20px]">
                      Адрес:
                    </h1>
                    <h1 className="text-[15px] text-gray-500 font-[500]">
                      Кому:
                    </h1>
                    <h1 className="text-[15px] text-gray-500 font-[500]">
                      Телефон:
                    </h1>
                    <h1 className="text-[15px] text-gray-500 font-[500]">
                      E-mail:
                    </h1>
                  </div>
                  <div className="flex items-end flex-col gap-[10px] ">
                    <h1 className="text-[15px] font-[500] flex text-end">
                      г.{clientCity === "" ? "неизвестно" : clientCity},ул.
                      {clientStreet === "" ? "неизвестно" : clientStreet},{" "}
                      <br /> д.
                      {clientHome === "" ? "неизвестно" : clientHome}
                    </h1>

                    <h1 className="text-[15px] font-[500]">
                      {clientName === "" ? "неизвестно" : clientName}
                      {clientLastName === "" ? " неизвестно" : clientLastName}
                    </h1>

                    <h1 className="text-[15px] font-[500]">
                      {clientPhone === "" ? "неизвестно" : clientPhone}
                    </h1>
                    <h1 className="text-[15px] font-[500]">
                      {clientEmail === "" ? "неизвестно" : clientEmail}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[350px] flex items-start flex-col gap-[15px]">
                <div className="flex items-center gap-[40px] text-[20px] font-[700]">
                  <h1>Итого {order.length} товара</h1>
                  <h1>
                    {order.reduce(
                      (acc, el) => acc + ((el.price * 90) / 100) * el.count,
                      0
                    )}
                    Сом
                  </h1>
                </div>
                <hr className="border-1 border-solid w-[300px]" />
                <button
                  className="w-[300px] h-[40px] rounded-[10px] text-[17px] font-[600] text-white bg-orange-500"
                  onClick={() => {
                    postTelegram();
                  }}
                >
                  Подтвердить заказ
                </button>
                <p className="w-[320px] text-[12px]">
                  Ваши личные данные будут использоваться для обработки ваших
                  заказов, упрощения вашей работы с сайтом и для других целей,
                  описанных в нашей{" "}
                  <span className="text-orange-500">
                    политике конфиденциальности
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className=""
            style={{
              display: orderModal ? "block" : "none",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: 49,
              padding: "20px",
            }}
            onClick={() => {
              setOrderModal(false);
            }}
          ></div>
          <div
            className="bg-white z-50 w-[450px] h-[400px] absolute top-[150px] left-[450px] py-[40px] px-[40px] rounded-[10px] "
            style={{
              display: orderModal ? "block" : "none",
              position: "fixed",
              top: 150,
              left: 450,
            }}
          >
            <a
              className="text-[30px] text-black absolute cursor-pointer top-[10px] right-[10px]"
              onClick={() => setOrderModal(false)}
            >
              <IoCloseSharp />
            </a>
            <div className="flex items-start flex-col gap-[20px]">
              <h1 className="embed text-[40px] font-[700]">
                ВАШ ЗАКАЗ <br /> ПОТВЕРЖДЕН
              </h1>
              <p className="text-[12px] text-gray-500 w-[350px]">
                Lorem ipsum dolor sit amet consectetur. Congue malesuada quisque
                purus faucibus est adipiscing aliquam malesuada. Turpis
                ultricies diam at facilisis varius nunc lectus scelerisque enim.
                Nisl pulvinar adipiscing turpis ultricies posuere nibh faucibus.{" "}
              </p>
              <button
                className="w-[350px] rounded-[5px] h-[40px] font-[600] bg-orange-500 text-white"
                onClick={() => delToPassword()}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Order;
