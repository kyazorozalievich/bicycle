import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFavorite, delFavorite } from "../../redux/reducers/sliceFavorite";
import { useAuth } from "../context/AuthContext";
import { getComment } from "../../redux/creates/sliceComment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dostavka from "../../assets/image/dostavka.png";
import BicycleCard from "../BicycleCard";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Footer from "../Footer";
import {
  decrementProduct,
  getProducts,
  incrementProduct,
} from "../../redux/reducers/sliceProduct";
import {
  addBicycleToBasket,
  delBicycleBasket,
} from "../../redux/reducers/sliceBasket";
//Icon
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { MdRadioButtonChecked } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
//Img
import userimg from "../../assets/image/user.png";
//

const Details = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { product } = useSelector((s) => s.data);
  const { bicyclebasket } = useSelector((s) => s.basket);
  const { bicyclefavorite } = useSelector((s) => s.favorite);
  const { comment } = useSelector((s) => s.comment);
  const { id } = useParams();
  //UseState
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState("");
  const [colorRed, setColorRed] = useState(false);
  const [colorYellow, setColorYellow] = useState(false);
  const [colorOrange, setColorOrange] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);
  const [sizeS, setSizeS] = useState(false);
  const [sizeM, setSizeM] = useState(false);
  const [sizeL, setSizeL] = useState(false);
  const [sizeXL, setSizeXL] = useState(false);

  //function
  async function ParamId() {
    const res = await axios.get(
      `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle/${id}`
    );
    let { data } = res;
    setDetail(data);
  }
  function postBasket() {
    if (!user) {
      toast.error("Авторизуйтесь чтобы добавить продукт в корзину", {
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
      let newBasket = {
        _id: _id,
        img: img,
        name: name,
        price: sizeS
          ? Sprice
          : sizeM
          ? Mprice
          : sizeL
          ? Lprice
          : sizeXL
          ? XLprice
          : price,
        description: description,
        country: country,
        brend: brend,
        material: material,
        category: category,
        count: count,
        date: date,
        rating: rating,
        color: colorRed
          ? "red"
          : colorYellow
          ? "yellow"
          : colorOrange
          ? "orange"
          : colorGreen
          ? "green"
          : null,
        size: sizeS ? s : sizeM ? m : sizeL ? l : sizeXL ? xl : null,
      };
      dispatch(addBicycleToBasket(newBasket));
    }
  }
  function postFavroite() {
    if (!user) {
      toast.error("Авторизуйтесь чтобы добавить продукт в избранное!", {
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
      dispatch(addFavorite(detail));
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
  function postComment() {
    let newComment = {
      id: Date.now(),
      comment: comments,
      date: new Date(),
    };
    dispatch(getComment(newComment));
    setComments("");
  }
  //

  const {
    _id,
    img,
    name,
    price,
    description,
    country,
    brend,
    material,
    category,
    count,
    date,
    rating,
    s,
    m,
    l,
    xl,
    year,
    color,
    Sprice,
    Sred,
    Syellow,
    Sorange,
    Sgreen,
    Mprice,
    Myellow,
    Mgreen,
    Morange,
    Mred,
    Lprice,
    Lyellow,
    Lorange,
    Lgreen,
    Lred,
    XLprice,
    XLyellow,
    XLorange,
    XLgreen,
    XLred,
  } = detail;

  useEffect(() => {
    getBicycle();
    ParamId();
  }, []);

  return (
    <>
      <div className="pt-[100px]">
        <div className="container w-[90%]">
          <ToastContainer />
          <div className="flex items-center justify-center flex-col gap-[50px] ">
            <div className="flex gap-[50px]">
              <div className="w-[70%] relative flex items-center justify-center">
                <div
                  className={`w-[100px] h-[60px] rounded-[10px] absolute top-[50px] right-[50px] ${
                    colorRed
                      ? "bg-red-600"
                      : colorYellow
                      ? "bg-yellow-500"
                      : colorOrange
                      ? "bg-orange-500"
                      : colorGreen
                      ? "bg-green-600"
                      : null
                  }`}
                ></div>
                <div
                  className={`w-[100px] h-[60px] rounded-[10px] absolute top-[50px] right-[50px] ${
                    color === "red"
                      ? "bg-red-600"
                      : color === "yellow"
                      ? "bg-yellow-500"
                      : color === "orange"
                      ? "bg-orange-500"
                      : color === "green"
                      ? "bg-green-600"
                      : null
                  }`}
                  style={{
                    display: colorRed
                      ? "none"
                      : colorYellow
                      ? "none"
                      : colorOrange
                      ? "none"
                      : colorGreen
                      ? "none"
                      : "block",
                  }}
                ></div>
                <Zoom>
                  <img
                    src={img}
                    alt={name}
                    className={`w-[80%] ${
                      sizeS
                        ? "w-[60%]"
                        : sizeM
                        ? "w-[70%]"
                        : sizeL
                        ? "w-[90%]"
                        : sizeXL
                        ? "w-[99%]"
                        : null
                    }`}
                  />
                </Zoom>
              </div>
              <div className="flex items-start gap-[20px] flex-col mt-[20px]">
                <div className="">
                  <h1 className="embed text-[40px] tracking-[3px] font-[500]">
                    {name}
                  </h1>
                  <h1 className="embed text-[40px] tracking-[3px] font-[500]">
                    {brend}
                  </h1>
                </div>
                <h1 className="text-green-600 text-[20px]">В наличии</h1>
                <h1 className="text-[25px] font-[600]">
                  {sizeS
                    ? Sprice
                    : sizeM
                    ? Mprice
                    : sizeL
                    ? Lprice
                    : sizeXL
                    ? XLprice
                    : price}{" "}
                  Сом
                </h1>
                <h1 className="text-gray-600 w-[600px]">{description}</h1>
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[20px] font-[600]">Размер:</h1>
                  <div className="flex items-center gap-[10px]">
                    <button
                      className={`${
                        sizeS
                          ? "border-2 border-solid border-orange-500 text-orange-500"
                          : null
                      } ${
                        s === ""
                          ? "border-2 border-solid border-gray-300 text-gray-300"
                          : null
                      }  w-[40px] h-[40px] border-2 border-solid border-black text-[20px] font-[600] rounded-lg `}
                    >
                      {sizeS ? (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(false);
                            setSizeL(false);
                            setSizeXL(false);
                          }}
                        >
                          S
                        </h1>
                      ) : (
                        <h1
                          onClick={() => {
                            setSizeS(s === "S" ? true : false);
                            setSizeM(false);
                            setSizeL(false);
                            setSizeXL(false);
                          }}
                        >
                          S
                        </h1>
                      )}
                    </button>
                    <button
                      className={`${
                        sizeM
                          ? "border-2 border-solid border-orange-500 text-orange-500"
                          : null
                      } ${
                        m === ""
                          ? "border-2 border-solid border-gray-300 text-gray-300"
                          : null
                      }  w-[40px] h-[40px] border-2 border-solid border-black text-[20px] font-[600] rounded-lg `}
                    >
                      {sizeM ? (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(false);
                            setSizeL(false);
                            setSizeXL(false);
                          }}
                        >
                          M
                        </h1>
                      ) : (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(m === "M" ? true : false);
                            setSizeL(false);
                            setSizeXL(false);
                          }}
                        >
                          M
                        </h1>
                      )}
                    </button>
                    <button
                      className={`${
                        sizeL
                          ? "border-2 border-solid border-orange-500 text-orange-500"
                          : null
                      } ${
                        l === ""
                          ? "border-2 border-solid border-gray-300 text-gray-300"
                          : null
                      }  w-[40px] h-[40px] border-2 border-solid border-black text-[20px] font-[600] rounded-lg `}
                    >
                      {sizeL ? (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(false);
                            setSizeL(false);
                            setSizeXL(false);
                          }}
                        >
                          L
                        </h1>
                      ) : (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(false);
                            setSizeL(l === "L" ? true : false);
                            setSizeXL(false);
                          }}
                        >
                          L
                        </h1>
                      )}
                    </button>
                    <button
                      className={`${
                        sizeXL
                          ? "border-2 border-solid border-orange-500 text-orange-500"
                          : null
                      } ${
                        xl === ""
                          ? "border-2 border-solid border-gray-300 text-gray-300"
                          : null
                      } w-[40px] h-[40px] border-2 border-solid border-black text-[20px] font-[600] rounded-lg `}
                    >
                      {sizeXL ? (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(false);
                            setSizeL(false);
                            setSizeXL(false);
                          }}
                        >
                          XL
                        </h1>
                      ) : (
                        <h1
                          onClick={() => {
                            setSizeS(false);
                            setSizeM(false);
                            setSizeL(false);
                            setSizeXL(xl === "XL" ? true : false);
                          }}
                        >
                          XL
                        </h1>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[20px] font-[600]">Цвет:</h1>
                  <div
                    className=""
                    style={{
                      display: sizeS ? "block" : "none",
                    }}
                  >
                    <div className="flex items-center gap-[10px] text-[40px]">
                      <a className="">
                        {colorRed ? (
                          <MdRadioButtonChecked
                            className="text-red-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Sred === "red" ? "text-red-600" : "text-red-200"
                            }`}
                            onClick={() => {
                              setColorRed(Sred === "red" ? true : false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorYellow ? (
                          <MdRadioButtonChecked
                            className="text-yellow-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Syellow === "yellow"
                                ? "text-yellow-500"
                                : "text-yellow-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(
                                Syellow === "yellow" ? true : false
                              );
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorOrange ? (
                          <MdRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Sorange === "orange"
                                ? "text-orange-500"
                                : "text-orange-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(
                                Sorange === "orange" ? true : false
                              );
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorGreen ? (
                          <MdRadioButtonChecked
                            className="text-green-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Sgreen === "green"
                                ? "text-green-600"
                                : "text-green-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(Sgreen === "green" ? true : false);
                            }}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      display: sizeM ? "block" : "none",
                    }}
                  >
                    <div className="flex items-center gap-[10px] text-[40px]">
                      <a className="">
                        {colorRed ? (
                          <MdRadioButtonChecked
                            className="text-red-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Mred === "red" ? "text-red-600" : "text-red-200"
                            }`}
                            onClick={() => {
                              setColorRed(Mred === "red" ? true : false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorYellow ? (
                          <MdRadioButtonChecked
                            className="text-yellow-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Myellow === "yellow"
                                ? "text-yellow-500"
                                : "text-yellow-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(
                                Myellow === "yellow" ? true : false
                              );
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorOrange ? (
                          <MdRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Morange === "orange"
                                ? "text-orange-500"
                                : "text-orange-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(
                                Morange === "orange" ? true : false
                              );
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorGreen ? (
                          <MdRadioButtonChecked
                            className="text-green-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Mgreen === "green"
                                ? "text-green-600"
                                : "text-green-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(Mgreen === "green" ? true : false);
                            }}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      display: sizeL ? "block" : "none",
                    }}
                  >
                    <div className="flex items-center gap-[10px] text-[40px]">
                      <a className="">
                        {colorRed ? (
                          <MdRadioButtonChecked
                            className="text-red-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Lred === "red" ? "text-red-600" : "text-red-200"
                            }`}
                            onClick={() => {
                              setColorRed(Lred === "red" ? true : false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorYellow ? (
                          <MdRadioButtonChecked
                            className="text-yellow-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Lyellow === "yellow"
                                ? "text-yellow-500"
                                : "text-yellow-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(
                                Lyellow === "yellow" ? true : false
                              );
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorOrange ? (
                          <MdRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Lorange === "orange"
                                ? "text-orange-500"
                                : "text-orange-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(
                                Lorange === "orange" ? true : false
                              );
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorGreen ? (
                          <MdRadioButtonChecked
                            className="text-green-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              Lgreen === "green"
                                ? "text-green-600"
                                : "text-green-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(Lgreen === "green" ? true : false);
                            }}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      display: sizeXL ? "block" : "none",
                    }}
                  >
                    <div className="flex items-center gap-[10px] text-[40px]">
                      <a className="">
                        {colorRed ? (
                          <MdRadioButtonChecked
                            className="text-red-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              XLred === "red" ? "text-red-600" : "text-red-200"
                            }`}
                            onClick={() => {
                              setColorRed(XLred === "red" ? true : false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorYellow ? (
                          <MdRadioButtonChecked
                            className="text-yellow-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              XLyellow === "yellow"
                                ? "text-yellow-500"
                                : "text-yellow-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(
                                XLyellow === "yellow" ? true : false
                              );
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorOrange ? (
                          <MdRadioButtonChecked
                            className="text-orange-500"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              XLorange === "orange"
                                ? "text-orange-500"
                                : "text-orange-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(
                                XLorange === "orange" ? true : false
                              );
                              setColorGreen(false);
                            }}
                          />
                        )}
                      </a>
                      <a className="">
                        {colorGreen ? (
                          <MdRadioButtonChecked
                            className="text-green-600"
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(false);
                            }}
                          />
                        ) : (
                          <RiCheckboxBlankCircleFill
                            className={`${
                              XLgreen === "green"
                                ? "text-green-600"
                                : "text-green-200"
                            }`}
                            onClick={() => {
                              setColorRed(false);
                              setColorYellow(false);
                              setColorOrange(false);
                              setColorGreen(XLgreen === "green" ? true : false);
                            }}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      display: sizeS
                        ? "none"
                        : sizeM
                        ? "none"
                        : sizeL
                        ? "none"
                        : sizeXL
                        ? "none"
                        : "block",
                    }}
                  >
                    <a className="text-[40px]">
                      <MdRadioButtonChecked
                        className={`${
                          color === "red"
                            ? "text-red-600"
                            : color === "yellow"
                            ? "text-yellow-500"
                            : color === "green"
                            ? "text-green-600"
                            : color === "orange"
                            ? "text-orange-500"
                            : null
                        }`}
                        onClick={() => {
                          setColorOrder(false);
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[100px] h-[40px] rounded-[5px] flex items-center justify-center gap-[20px] border-2 border-solid border-gray-300">
                    <h1
                      className="text-[30px] cursor-pointer"
                      onClick={() => decrementProduct(_id)}
                    >
                      -
                    </h1>
                    <h1>{count}</h1>
                    <h1
                      className="text-[25px] cursor-pointer"
                      onClick={() => incrementProduct(_id)}
                    >
                      +
                    </h1>
                  </div>
                  <div>
                    {bicyclebasket.some((el) => el._id === _id) ? (
                      <button
                        className="w-[170px] h-[40px] bg-orange-500 rounded-[5px] text-white font-[600] flex items-center justify-center"
                        onClick={() => dispatch(delBicycleBasket(_id))}
                      >
                        Убрать из Корзины
                      </button>
                    ) : (
                      <button
                        className="w-[170px] h-[40px] bg-orange-500 rounded-[5px] text-white font-[600] flex items-center justify-center"
                        onClick={() => postBasket()}
                      >
                        В Корзину
                      </button>
                    )}
                  </div>
                  <button className="w-[40px] h-[40px] rounded-[5px] bg-gray-300 text-[20px] text-orange-500 flex items-center justify-center">
                    {bicyclefavorite.some((el) => el._id === _id) ? (
                      <FaHeart
                        className="text-red-600"
                        onClick={() => dispatch(delFavorite(_id))}
                      />
                    ) : (
                      <FaRegHeart onClick={() => postFavroite()} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col gap-[10px]">
              <h1 className="text-[30px] font-[700]">ОПИСАНИЕ</h1>
              <p className="detail-description-p w-[1200px] text-gray-600">
                {description}
              </p>
            </div>
            <div className="flex items-start flex-col gap-[10px]">
              <h1 className="text-[30px] font-[700]">ХАРАКТЕРИСТИКА</h1>
              <div className="">
                <div className="detail-character-block-text w-[1200px] h-[60px] flex items-center justify-between  bg-gray-50 px-[10px]">
                  <h1 className="font-[600] text-[17px]">Цвет</h1>
                  <h1 className="font-[500] text-gray-400">
                    {color === "green"
                      ? "Зеленный"
                      : color === "red"
                      ? "Красный"
                      : color === "yellow"
                      ? "Желтый"
                      : color === "orange"
                      ? "Оранжевый"
                      : "Не имеется"}
                  </h1>
                </div>
                <div className="detail-character-block-text w-[1200px] h-[60px] flex items-center  justify-between bg-gray-100 px-[10px]">
                  <h1 className="font-[600] text-[17px]">Год</h1>
                  <h1 className="font-[500] text-gray-400">{year}</h1>
                </div>
                <div className="detail-character-block-text w-[1200px] h-[60px] flex items-center justify-between  bg-gray-50 px-[10px]">
                  <h1 className="font-[600] text-[17px]">Материал рамы</h1>
                  <h1 className="font-[500] text-gray-400">
                    {material === "alymini"
                      ? "Алюминий"
                      : material === "karbon"
                      ? "Карбон"
                      : material === "stal"
                      ? "Сталь"
                      : "Не имеется"}
                  </h1>
                </div>
                <div className="detail-character-block-text w-[1200px] h-[60px] flex items-center  justify-between bg-gray-100 px-[10px]">
                  <h1 className="font-[600] text-[17px]">Размер</h1>
                  <h1 className="font-[500] text-gray-400">
                    {s}, {m}, {l}, {xl}
                  </h1>
                </div>
                <div className="detail-character-block-text w-[1200px] h-[60px] flex items-center justify-between  bg-gray-50 px-[10px]">
                  <h1 className="font-[600] text-[17px]">Страна</h1>
                  <h1 className="font-[500] text-gray-400">
                    {country === "italy"
                      ? "Италия"
                      : country === "france"
                      ? "Франция"
                      : country === "shvecia"
                      ? "Швецария"
                      : country === "america"
                      ? "Америка"
                      : country === "ispania"
                      ? "Испания"
                      : "Не имеется"}
                  </h1>
                </div>
                <div className="detail-character-block-text w-[1200px] h-[60px] flex items-center  justify-between bg-gray-100 px-[10px]">
                  <h1 className="font-[600] text-[17px]">Гарантия</h1>
                  <h1 className="font-[500] text-gray-400">5 год</h1>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-[30px] font-[700]">Доставка</h1>
              <div className="flex items-start flex-col gap-[20px]">
                <img src={dostavka} alt="" className="w-[1200px]" />
                <div className="flex items-start flex-col gap-[20px]">
                  <h1 className="text-[20px] font-[600]">
                    Для удобства покупателей действует несколько способов
                    доставки товаров
                  </h1>
                  <ul className="flex items-start flex-col gap-[10px]">
                    <li>-Доставка по Бишкеку, в пределах города</li>
                    <li>-Доставка всем регионам Кыргызстана</li>
                    <li>-Доставка в зарубежье</li>
                  </ul>
                  <h6 className="text-[15px] bg-gray-100 p-[10px] rounded-[10px]">
                    Любой из способов доступен при оформление заказа через сайт
                    или у операторов
                  </h6>
                  <div className="">
                    <h1>
                      Велосипеды и вело-станки доставляются в собранном и
                      настроенном виде.
                    </h1>
                    <h1>
                      На любые вопросы по правилам и стоимости доставки ответят
                      оператор:{" "}
                      <span className="text-blue-500">+996 (995) 25-55-92</span>
                    </h1>
                  </div>
                  <h1 className="font-[600]">
                    Для любого заказа возможен самовывоз из магазина
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col">
              <h1 className="text-[30px] font-[700]">ПОХОЖИЕ ТОВАРЫ</h1>
              <div className="scroll detail-pohojie-block w-[1200px] h-[600px] flex items-center gap-[30px] overflow-x-scroll">
                {product.map((el) =>
                  el.brend === brend ? <BicycleCard el={el} /> : null
                )}
              </div>
            </div>
          </div>
          <div className="container w-[90%] h-[400px] mt-[50px]">
            <div className="scroll h-[360px] w-[65%] overflow-y-scroll flex items-start flex-col gap-[20px]">
              {comment.map((el) => (
                <div className="flex items-center gap-[5px]">
                  <img src={userimg} alt="" className="w-[40px]" />
                  <div className="w-[250px] h-[60px] pl-[20px] pt-[15px] relative shadow-xl rounded-[50px]">
                    <h1 className="text-[12px] font-[600] text-gray-400 absolute top-0">
                      User{el.id}
                    </h1>
                    <h1>{el.comment}</h1>
                    <h6 className="text-[8px] font-[600] text-gray-500 absolute bottom-[5px] right-[30px]">
                      {date}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center border-2 border-solid border-black w-[800px] rounded-[50px]">
              <input
                type="text"
                placeholder="Оставтье отзыв..."
                onChange={(e) => setComments(e.target.value)}
                value={comments}
                className="w-[700px] h-[40px] pl-[10px] rounded-[50px]"
              />
              <button
                className="w-[200px] h-[41px]  ml-[-50px] rounded-[50px] bg-orange-500 text-[17px] font-[600] text-white"
                onClick={() => postComment()}
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
