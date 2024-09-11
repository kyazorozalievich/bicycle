import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/reducers/sliceProduct";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Footer from "../Footer";
import BicycleCard from "../BicycleCard";
import {
  clearOrder,
  createOrder,
  deleteOrder,
} from "../../redux/reducers/sliceOrder";
import {
  clearBasket,
  decrementBasket,
  delBicycleBasket,
  incrementBasket,
} from "../../redux/reducers/sliceBasket";
//Img
import cart from "../../assets/image/basket.png";
//Icon
import { FaPlus } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";

const Basket = () => {
  const { user } = useAuth();
  const { bicyclebasket } = useSelector((s) => s.basket);
  const { order } = useSelector((s) => s.order);
  const { product } = useSelector((s) => s.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //UseState
  const [curs, setCurs] = useState("");

  //function
  function addToOrder() {
    if (!user) {
      toast.error("Авторизуйтесь чтобы оформить заказ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (order.length === 0) {
      toast.error("Выберите товар!", {
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
      navigate("/order");
    }
  }

  async function getBicycle() {
    try {
      let { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle`
      );
      dispatch(getProducts(data));
    } catch (error) {
      alert(error.message);
    }
  }

  function clearBaskets() {
    if (!user) {
      toast.error("Авторизуйтесь чтобы очистить корзину!", {
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
      dispatch(clearBasket()), dispatch(clearOrder());
    }
  }
  //

  useEffect(() => {
    getBicycle();
  }, []);

  return (
    <>
      <div className="pt-[100px]">
        <div className="container w-[90%]">
          <ToastContainer />
          <div className="flex items-start flex-col gap-[30px]">
            <div className="flex items-center">
              <h1
                className="text-[15px] font-[600] cursor-pointer"
                onClick={() => navigate("/")}
              >
                Главная/
              </h1>
              <h1 className="text-[15px] font-[600] cursor-pointer text-orange-500">
                Корзина
              </h1>
            </div>
            <h1 className="embed text-[40px] font-[600]">КОРЗИНА</h1>
            <div className="flex items-center justify-between w-[850px]">
              <h1
                className="text-[16px] font-[600] text-orange-500 cursor-pointer"
                onClick={() => navigate("/bicycles")}
              >
                Вернутся к покупкам
              </h1>
              <h1
                className="text-[16px] font-[600] text-gray-400 cursor-pointer"
                onClick={() => clearBaskets()}
              >
                Очистить корзину
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <div className="scroll w-[900px] h-[550px] mt-[30px] flex items-start flex-col gap-[20px] overflow-y-scroll">
              {!user ? (
                <div className="flex items-center justify-center flex-col ml-[300px] mt-[150px] gap-[20px]">
                  <h1 className="text-[16px] font-[600] text-gray-400 cursor-pointer flex text-center">
                    Войдите или зарегистрируйтесь, чтобы <br /> добавлять товары
                    в корзину
                  </h1>
                  <button
                    className="w-[150px] h-[40px] bg-orange-500 rounded-[50px] text-white font-[600]"
                    onClick={() => navigate("/register")}
                  >
                    Авторизовать
                  </button>
                </div>
              ) : bicyclebasket.length === 0 ? (
                <div className="ml-[150px] flex items-center justify-center flex-col pt-[40px]">
                  <img
                    src={cart}
                    alt=""
                    className="w-[70%] cursor-pointer"
                    onClick={() => navigate("/bicycles")}
                  />
                  <h1 className="text-[30px] font-[700] ml-[50px]">
                    Корзина пуста
                  </h1>
                </div>
              ) : (
                bicyclebasket.map((el, id) => (
                  <div className="flex items-start flex-col gap-[20px]">
                    <div className="flex items-center gap-[30px]" key={id}>
                      <div className="relative w-[25%]">
                        <div
                          className={`basket-product-color-block w-[40px] h-[20px] absolute top-0 right-0 rounded-[5px] b ${
                            el.color === "red"
                              ? "bg-red-600"
                              : el.color === "yellow"
                              ? "bg-yellow-500"
                              : el.color === "orange"
                              ? "bg-orange-500"
                              : el.color === "green"
                              ? "bg-green-600"
                              : null
                          }`}
                        ></div>
                        <img src={el.img} alt="" className="w-[100%]" />
                        <a
                          className="basket-product-close absolute top-0 left-0 text-[20px]"
                          onClick={() => dispatch(delBicycleBasket(el._id))}
                        >
                          <MdOutlineClear />
                        </a>
                      </div>
                      <div className="">
                        <h1 className="basket-product-name text-[18px] font-[600] w-[200px]">
                          {el.name}
                        </h1>
                        <h1 className="basket-product-name text-[18px] font-[600] w-[200px]">
                          {el.brend}
                        </h1>
                      </div>
                      <div className="flex items-center gap-[50px]">
                        <div className="w-[120px] h-[40px] border-2 border-solid border-gray-300 rounded-[10px] flex items-center justify-center font-[600] gap-[20px]">
                          <h1
                            className="text-[20px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer "
                            onClick={() => dispatch(decrementBasket(el))}
                          >
                            -
                          </h1>
                          <h1>{el.count}</h1>
                          <h1
                            className="text-[20px] w-[40px] h-[40px] flex items-center justify-center  cursor-pointer"
                            onClick={() => dispatch(incrementBasket(el))}
                          >
                            +
                          </h1>
                        </div>
                        <h1 className="text-[20px] font-[600]">
                          {curs === "доллар"
                            ? Math.floor(el.price / 86.06) * el.count
                            : curs === "рубль"
                            ? Math.floor(el.price * 0.93) * el.count
                            : curs === "сом"
                            ? el.price * el.count
                            : el.price * el.count}
                          {curs === "доллар"
                            ? "$"
                            : curs === "рубль"
                            ? "₽"
                            : curs === "сом"
                            ? "Сом"
                            : "Сом"}
                        </h1>
                        <div className="">
                          {order.some((item) => item._id === el._id) ? (
                            <a
                              className=""
                              onClick={() => dispatch(deleteOrder(el._id))}
                            >
                              <MdClear />
                            </a>
                          ) : (
                            <a
                              className=""
                              onClick={() => dispatch(createOrder(el))}
                            >
                              <FaPlus />
                            </a>
                          )}{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] h-[1px] bg-gray-300"></div>
                  </div>
                ))
              )}
            </div>
            <div className="">
              <select
                className="border-2 border-solid border-gray-300 w-[100px] h-[30px] rounded-[5px] outline-none"
                onChange={(e) => setCurs(e.target.value)}
              >
                <option value="">Курс</option>
                <option value="доллар">$ Доллар</option>
                <option value="рубль">₽ Рубль</option>
                <option value="сом">С Сом</option>
              </select>
              <div className="flex items-center flex-col justify-center w-[320px] h-[400px] border-2 border-solid border-gray-300 rounded-[10px] gap-[40px] mt-[30px]">
                <div className="flex items-center gap-[40px]">
                  <div className="flex items-start flex-col gap-[30px] text-[17px] font-[600]">
                    <h1 className="text-gray-400">Номер Заказа</h1>
                    <h1 className="text-gray-400">
                      Сумма заказа <br /> (Без скидки)
                    </h1>
                    <h1 className="text-gray-400">Скидка%</h1>
                  </div>
                  <div className="flex items-end flex-col gap-[40px] text-[17px] font-[600]">
                    <h1 className="text-gray-400">{Date.now()}</h1>
                    <h1 className="text-gray-400">
                      {user
                        ? order.reduce(
                            (acc, el) => acc + el.price * el.count,
                            0
                          )
                        : 0}
                      Сом
                    </h1>
                    <h1 className="text-gray-400">
                      {user
                        ? order.reduce(
                            (acc, el) =>
                              acc + ((el.price * 10) / 100) * el.count,
                            0
                          )
                        : 0}
                      Сом
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-[50px]">
                  <h1 className="text-[25px] font-[600]">Итого</h1>
                  <h1 className="text-[20px] font-[600]">
                    {user
                      ? order.reduce(
                          (acc, el) => acc + ((el.price * 90) / 100) * el.count,
                          0
                        )
                      : 0}
                    Сом
                  </h1>
                </div>
                <button
                  className="w-[200px] h-[50px] bg-orange-500 rounded-[5px] text-white font-[600] flex items-center justify-center"
                  onClick={() => addToOrder()}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[90px] flex items-satart flex-col gap-[30px]">
            <h1 className="embed text-[30px] font-[600] ">ЛУЧШИЕ ТОВАРЫ</h1>
            <div className="scroll w-[100%] h-[500px] overflow-x-scroll flex items-center gap-[30px]">
              {product.map((el) =>
                el.rating >= 4 ? <BicycleCard el={el} /> : null
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
