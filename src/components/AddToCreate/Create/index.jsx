import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createProduct,
  getProducts,
} from "../../../redux/reducers/sliceProduct";
//Icon
import { FiArrowLeftCircle } from "react-icons/fi";
//

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //UseState
  const [inputUrl, setInputUrl] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputBrend, setInputBrend] = useState("");
  const [inputMaterial, setInputMaterial] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [year, setYear] = useState("");
  const [sizeS, setSizeS] = useState(false);
  const [sizeM, setSizeM] = useState(false);
  const [sizeL, setSizeL] = useState(false);
  const [sizeXL, setSizeXL] = useState(false);
  const [colorRed, setColorRed] = useState(false);
  const [colorYellow, setColorYellow] = useState(false);
  const [colorOrange, setColorOrange] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);
  const [sizeSprice, setSizeSprice] = useState("");
  const [sizeSred, setSizeSred] = useState(false);
  const [sizeSyellow, setSizeSyellow] = useState(false);
  const [sizeSorange, setSizeSorange] = useState(false);
  const [sizeSgreen, setSizeSgreen] = useState(false);
  const [sizeMprice, setSizeMprice] = useState("");
  const [sizeMyellow, setSizeMyellow] = useState(false);
  const [sizeMgreen, setSizeMgreen] = useState(false);
  const [sizeMorange, setSizeMorange] = useState(false);
  const [sizeMred, setSizeMred] = useState(false);
  const [sizeLprice, setSizeLprice] = useState("");
  const [sizeLyellow, setSizeLyellow] = useState(false);
  const [sizeLorange, setSizeLorange] = useState(false);
  const [sizeLgreen, setSizeLgreen] = useState(false);
  const [sizeLred, setSizeLred] = useState(false);
  const [sizeXLprice, setSizeXLprice] = useState("");
  const [sizeXLred, setSizeXLred] = useState(false);
  const [sizeXLyellow, setSizeXLyellow] = useState(false);
  const [sizeXLorange, setSizeXLorange] = useState(false);
  const [sizeXLgreen, setSizeXLgreen] = useState(false);

  //function
  function postBicycle() {
    if (
      inputUrl.trim() === "" ||
      inputName.trim() === "" ||
      inputPrice.trim() === "" ||
      inputDescription.trim() === "" ||
      inputCategory.trim() === "" ||
      inputBrend.trim() === "" ||
      inputMaterial.trim() === "" ||
      inputCountry.trim() === "" ||
      year.trim() === ""
    ) {
      inputName === ""
        ? toast.error("Добавьте название!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputPrice === ""
        ? toast.error("Добавьте цену!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputUrl === ""
        ? toast.error("Добавьте изображение!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputDescription === ""
        ? toast.error("Добавьте описание!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputCategory === ""
        ? toast.error("Выберите категорию!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputBrend === ""
        ? toast.error("Выберите бренд!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputMaterial === ""
        ? toast.error("Выберите материал!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : inputCountry === ""
        ? toast.error("Выберите страну!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : year === ""
        ? toast.error("Добавьте год выпуска!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : sizeS
        ? sizeSprice === ""
          ? toast.error("Добавьте цену размера (S)!", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : null
        : sizeM
        ? sizeMprice === ""
          ? toast.error("Добавьте цену размера (M)!", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : null
        : sizeL
        ? sizeLprice === ""
          ? toast.error("Добавьте цену размера (L)!", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : null
        : sizeXL
        ? sizeXLprice === ""
          ? toast.error("Добавьте цену размера (XL)!", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : null
        : null;
      return;
    } else {
      let newProduct = {
        type: "bicycle",
        img: inputUrl,
        name: inputName,
        price: inputPrice,
        description: inputDescription,
        country: inputCountry,
        brend: inputBrend,
        material: inputMaterial,
        category: inputCategory,
        year: year,
        count: 1,
        number: Date.now(),
        date: new Date().toDateString(),
        rating: Math.round(Math.random() * 5),
        s: sizeS ? "S" : "",
        m: sizeM ? "M" : "",
        l: sizeL ? "L" : "",
        xl: sizeXL ? "XL" : "",
        color: colorRed
          ? "red"
          : colorGreen
          ? "green"
          : colorYellow
          ? "yellow"
          : colorOrange
          ? "orange"
          : null,
        Sprice: sizeS ? sizeSprice : null,
        Sred: sizeSred ? "red" : null,
        Syellow: sizeSyellow ? "yellow" : null,
        Sorange: sizeSorange ? "orange" : null,
        Sgreen: sizeSgreen ? "green" : null,
        Mprice: sizeM ? sizeMprice : null,
        Myellow: sizeMyellow ? "yellow" : null,
        Mgreen: sizeMgreen ? "green" : null,
        Morange: sizeMorange ? "orange" : null,
        Mred: sizeMred ? "red" : null,
        Lprice: sizeL ? sizeLprice : null,
        Lyellow: sizeLyellow ? "yellow" : null,
        Lorange: sizeLorange ? "orange" : null,
        Lgreen: sizeLgreen ? "green" : null,
        Lred: sizeLred ? "red" : null,
        XLprice: sizeXL ? sizeXLprice : null,
        XLyellow: sizeXLyellow ? "yellow" : null,
        XLorange: sizeXLorange ? "orange" : null,
        XLgreen: sizeXLgreen ? "green" : null,
        XLred: sizeXLred ? "red" : null,
      };
      axios.post(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle`,
        newProduct
      );
      dispatch(createProduct(newProduct));
      getBicycle();
      setInputUrl("");
      setInputName("");
      setInputPrice("");
      setInputDescription("");
      setInputCategory("");
      setInputBrend("");
      setInputMaterial("");
      setInputCountry("");
      setInputMaterial("");
      setYear("");
      setSizeS(false);
      setSizeM(false);
      setSizeL(false);
      setSizeXL(false);
      setColorRed(false);
      setColorYellow(false);
      setColorOrange(false);
      setColorGreen(false);
      setSizeSprice("");
      setSizeSred(false);
      setSizeSyellow(false);
      setSizeSorange(false);
      setSizeSgreen(false);
      setSizeMprice("");
      setSizeMred(false);
      setSizeMyellow(false);
      setSizeMorange(false);
      setSizeMgreen(false);
      setSizeLprice("");
      setSizeLyellow(false);
      setSizeLorange(false);
      setSizeLgreen(false);
      setSizeLred(false);
      setSizeXLprice("");
      setSizeXLred(false);
      setSizeXLyellow(false);
      setSizeXLorange(false);
      setSizeXLgreen(false);
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
  //

  useEffect(() => {
    getBicycle();
  }, []);

  return (
    <div className="pt-[150px] ">
      <div className="container w-[90%] realtive">
        <a
          className="create-close text-[50px] absolute top-[100px] left-[50px]"
          onClick={() => navigate("/addtocreate")}
        >
          <FiArrowLeftCircle />
        </a>
        <div className="flex items-center justify-center flex-col gap-[30px] ">
          <div className="flex gap-[30px]">
            <div className="flex items-center gap-[30px] flex-col">
              <input
                type="text"
                placeholder="Название..."
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
                className={`w-[350px] h-[40px] border-2 border-solid border-black pl-[10px] rounded-[10px]`}
              />
              <input
                type="number"
                placeholder="Цена..."
                onChange={(e) => setInputPrice(e.target.value)}
                value={inputPrice}
                className="w-[350px] h-[40px] border-2 border-solid border-black pl-[10px] rounded-[10px]"
              />
              <input
                type="text"
                placeholder="Фотография..."
                className="flex flex-col items-center justify-center w-[350px] h-[40px] border-2 border-black pl-[10px] rounded-lg bg-gray-50"
                onChange={(e) => setInputUrl(e.target.value)}
                value={inputUrl}
              />
              <textarea
                name=""
                placeholder="Описание..."
                onChange={(e) => setInputDescription(e.target.value)}
                value={inputDescription}
                className="w-[350px] h-[180px] border-2 border-solid border-black rounded-[10px] pl-[10px] pt-[10px]"
              ></textarea>
            </div>
            <div className="flex items-center flex-col gap-[30px]">
              <select
                onChange={(e) => setInputCategory(e.target.value)}
                value={inputCategory}
                className="w-[350px] h-[40px] border-2 border-solid border-black rounded-[10px]"
              >
                <option value="">Категории</option>
                <option value="gornue">Горные Велосипеды</option>
                <option value="gorod">Городские Велосипеды</option>
                <option value="gravine">Гравийные Велосипеды</option>
                <option value="dvuhpodves">Двухподвесные Велосипеды</option>
              </select>
              <select
                onChange={(e) => setInputBrend(e.target.value)}
                value={inputBrend}
                className="w-[350px] h-[40px] border-2 border-solid border-black rounded-[10px]"
              >
                <option value="">Бренды</option>
                <option value="bianci">Bianci</option>
                <option value="bmc">BMC</option>
                <option value="colnago">Colnago</option>
                <option value="ciclistino">Ciclistino</option>
              </select>
              <select
                onChange={(e) => setInputMaterial(e.target.value)}
                value={inputMaterial}
                className="w-[350px] h-[40px] border-2 border-solid border-black rounded-[10px]"
              >
                <option value="">Материалы</option>
                <option value="alymini">Алюминий</option>
                <option value="karbon">Карбон</option>
                <option value="stal">Сталь</option>
              </select>
              <select
                onChange={(e) => setInputCountry(e.target.value)}
                value={inputCountry}
                className="w-[350px] h-[40px] border-2 border-solid border-black rounded-[10px]"
              >
                <option value="">Страна</option>
                <option value="italy">Италия</option>
                <option value="france">Франция</option>
                <option value="shvecia">Швецария</option>
                <option value="america">Америка</option>
                <option value="ispania">Испания</option>
              </select>
              <input
                type="text"
                placeholder="Год выпуска..."
                className={`w-[350px] h-[40px] border-2 border-solid border-black pl-[10px] rounded-[10px]`}
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
              <div className="flex items-center gap-[60px] h-[50px]">
                <h1 className="text-[25px] font-[600]">Цвет:</h1>
                <div className="flex items-center gap-[20px]">
                  <div className="">
                    {colorRed ? (
                      <button
                        className={`w-[40px] h-[40px] bg-red-600 rounded-[50px] ${
                          colorRed
                            ? "border-[3px] border-solid border-black"
                            : null
                        }`}
                        onClick={() => {
                          setColorRed(false);
                          setColorGreen(false);
                          setColorYellow(false);
                          setColorOrange(false);
                        }}
                      ></button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] bg-red-600 rounded-[50px]`}
                        onClick={() => {
                          setColorRed(true);
                          setColorGreen(false);
                          setColorYellow(false);
                          setColorOrange(false);
                        }}
                      ></button>
                    )}
                  </div>
                  <div className="">
                    {colorYellow ? (
                      <button
                        className={`w-[40px] h-[40px] bg-yellow-500 rounded-[50px] ${
                          colorYellow
                            ? "border-[3px] border-solid border-black"
                            : null
                        }`}
                        onClick={() => {
                          setColorYellow(false);
                          setColorRed(false);
                          setColorGreen(false);
                          setColorOrange(false);
                        }}
                      ></button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] bg-yellow-500 rounded-[50px]`}
                        onClick={() => {
                          setColorYellow(true);
                          setColorRed(false);
                          setColorGreen(false);
                          setColorOrange(false);
                        }}
                      ></button>
                    )}
                  </div>
                  <div className="">
                    {colorOrange ? (
                      <button
                        className={`w-[40px] h-[40px] bg-orange-500 rounded-[50px] ${
                          colorOrange
                            ? "border-[3px] border-solid border-black"
                            : null
                        }`}
                        onClick={() => {
                          setColorOrange(false);
                          setColorYellow(false);
                          setColorRed(false);
                          setColorGreen(false);
                        }}
                      ></button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] bg-orange-500 rounded-[50px]`}
                        onClick={() => {
                          setColorOrange(true);
                          setColorYellow(false);
                          setColorRed(false);
                          setColorGreen(false);
                        }}
                      ></button>
                    )}
                  </div>
                  <div className="">
                    {colorGreen ? (
                      <button
                        className={`w-[40px] h-[40px] bg-green-600 rounded-[50px] ${
                          colorGreen
                            ? "border-[3px] border-solid border-black"
                            : null
                        }`}
                        onClick={() => {
                          setColorGreen(false);
                          setColorOrange(false);
                          setColorYellow(false);
                          setColorRed(false);
                        }}
                      ></button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] bg-green-600 rounded-[50px]`}
                        onClick={() => {
                          setColorGreen(true);
                          setColorOrange(false);
                          setColorYellow(false);
                          setColorRed(false);
                        }}
                      ></button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col gap-[10px]">
              <div className="flex items-center gap-[30px]">
                <h1 className="text-[25px] font-[600]">Размер:</h1>
                <div className="flex items-center gap-[40px]">
                  <div>
                    {sizeS ? (
                      <button
                        className={`w-[40px] cursor-pointer h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600] ${
                          sizeS ? "bg-orange-500 text-white" : null
                        }`}
                        onClick={() => {
                          setSizeS(false);
                          setSizeSprice("");
                          setSizeSred(false);
                          setSizeSyellow(false);
                          setSizeSorange(false);
                          setSizeSgreen(false);
                        }}
                      >
                        S
                      </button>
                    ) : (
                      <button
                        className={`w-[40px] cursor-pointer h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600]`}
                        onClick={() => {
                          setSizeS(true);
                        }}
                      >
                        S
                      </button>
                    )}
                  </div>
                  <div>
                    {sizeM ? (
                      <button
                        className={`w-[40px] h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600] ${
                          sizeM ? "bg-orange-500 text-white" : null
                        }`}
                        onClick={() => {
                          setSizeM(false);
                          setSizeMprice("");
                          setSizeMred(false);
                          setSizeMyellow(false);
                          setSizeMorange(false);
                          setSizeMgreen(false);
                        }}
                      >
                        M
                      </button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600]`}
                        onClick={() => {
                          setSizeM(true);
                        }}
                      >
                        M
                      </button>
                    )}
                  </div>
                  <div>
                    {sizeL ? (
                      <button
                        className={`w-[40px] h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600] ${
                          sizeL ? "bg-orange-500 text-white" : null
                        }`}
                        onClick={() => {
                          setSizeL(false);
                          setSizeLprice("");
                          setSizeLyellow(false);
                          setSizeLorange(false);
                          setSizeLgreen(false);
                          setSizeLred(false);
                        }}
                      >
                        L
                      </button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600] `}
                        onClick={() => {
                          setSizeL(true);
                        }}
                      >
                        L
                      </button>
                    )}
                  </div>
                  <div>
                    {sizeXL ? (
                      <button
                        className={`w-[40px] h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600] ${
                          sizeXL ? "bg-orange-500 text-white" : null
                        }`}
                        onClick={() => {
                          setSizeXL(false);
                          setSizeXLprice("");
                          setSizeXLred(false);
                          setSizeXLyellow(false);
                          setSizeXLorange(false);
                          setSizeXLgreen(false);
                        }}
                      >
                        XL
                      </button>
                    ) : (
                      <button
                        className={`w-[40px] h-[40px] border-2 border-solid border-black flex items-center justify-center rounded-[50px] font-[600] `}
                        onClick={() => {
                          setSizeXL(true);
                        }}
                      >
                        XL
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <h1
                  className={`text-[20px] text-black font-[400] ${
                    !sizeS ? "text-gray-300" : null
                  }`}
                >
                  Размер (S):
                </h1>
                <div className="flex items-center gap-[20px]">
                  <input
                    type="text"
                    placeholder="Цена размера S..."
                    className={`w-[200px] h-[40px] rounded-[10px] pl-[10px] border-2 border-solid border-black ${
                      !sizeS
                        ? "border-gray-300 placeholder:text-gray-300"
                        : null
                    }`}
                    onChange={(e) => setSizeSprice(e.target.value)}
                    value={sizeSprice}
                  />
                  <div className="flex items-center gap-[10px]">
                    <div className="">
                      {sizeSred ? (
                        <button
                          className={`w-[40px] h-[40px] bg-red-600 rounded-[50px] ${
                            sizeSred
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeSred(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeS ? " bg-red-200" : "bg-red-600"
                          }`}
                          onClick={() => {
                            setSizeSred(sizeS ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeSyellow ? (
                        <button
                          className={`w-[40px] h-[40px] bg-yellow-500 rounded-[50px] ${
                            sizeSyellow
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeSyellow(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeS ? "bg-yellow-200" : "bg-yellow-500"
                          }`}
                          onClick={() => {
                            setSizeSyellow(sizeS ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeSorange ? (
                        <button
                          className={`w-[40px] h-[40px] bg-orange-500 rounded-[50px] ${
                            sizeSorange
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeSorange(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeS ? "bg-orange-200" : " bg-orange-500 "
                          }`}
                          onClick={() => {
                            setSizeSorange(sizeS ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeSgreen ? (
                        <button
                          className={`w-[40px] h-[40px] bg-green-600 rounded-[50px] ${
                            sizeSgreen
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeSgreen(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeS ? "bg-green-200" : " bg-green-600 "
                          }`}
                          onClick={() => {
                            setSizeSgreen(sizeS ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h1
                  className={`text-[20px] text-black font-[400] ${
                    !sizeM ? "text-gray-300" : null
                  }`}
                >
                  Размер (M):
                </h1>
                <div className="flex items-center gap-[20px]">
                  <input
                    type="text"
                    placeholder="Цена размера M..."
                    className={`w-[200px] h-[40px] rounded-[10px] pl-[10px] border-2 border-solid border-black ${
                      !sizeM
                        ? "border-gray-300 placeholder:text-gray-300"
                        : null
                    }`}
                    onChange={(e) => setSizeMprice(e.target.value)}
                    value={sizeMprice}
                  />
                  <div className="flex items-center gap-[10px]">
                    <div className="">
                      {sizeMred ? (
                        <button
                          className={`w-[40px] h-[40px] bg-red-600 rounded-[50px] ${
                            sizeMred
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeMred(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeM ? "bg-red-200" : " bg-red-600"
                          }`}
                          onClick={() => {
                            setSizeMred(sizeM ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeMyellow ? (
                        <button
                          className={`w-[40px] h-[40px] bg-yellow-500 rounded-[50px] ${
                            sizeMyellow
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeMyellow(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeM ? "bg-yellow-200" : " bg-yellow-500"
                          }`}
                          onClick={() => {
                            setSizeMyellow(sizeM ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeMorange ? (
                        <button
                          className={`w-[40px] h-[40px] bg-orange-500 rounded-[50px] ${
                            sizeMorange
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeMorange(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeM ? "bg-orange-200" : "bg-orange-500"
                          }`}
                          onClick={() => {
                            setSizeMorange(sizeM ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeMgreen ? (
                        <button
                          className={`w-[40px] h-[40px] bg-green-600 rounded-[50px] ${
                            sizeMgreen
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeMgreen(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeM ? "bg-green-200" : "bg-green-600"
                          }`}
                          onClick={() => {
                            setSizeMgreen(sizeM ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h1
                  className={`text-[20px] text-black font-[400] ${
                    !sizeL ? "text-gray-300" : null
                  }`}
                >
                  Размер (L):
                </h1>
                <div className="flex items-center gap-[20px]">
                  <input
                    type="text"
                    placeholder="Цена размера L..."
                    className={`w-[200px] h-[40px] rounded-[10px] pl-[10px] border-2 border-solid border-black ${
                      !sizeL
                        ? "border-gray-300 placeholder:text-gray-300"
                        : null
                    }`}
                    onChange={(e) => setSizeLprice(e.target.value)}
                    value={sizeLprice}
                  />
                  <div className="flex items-center gap-[10px]">
                    <div className="">
                      {sizeLred ? (
                        <button
                          className={`w-[40px] h-[40px] bg-red-600 rounded-[50px] ${
                            sizeLred
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeLred(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeL ? "bg-red-200" : "bg-red-600"
                          }`}
                          onClick={() => {
                            setSizeLred(sizeL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeLyellow ? (
                        <button
                          className={`w-[40px] h-[40px] bg-yellow-500 rounded-[50px] ${
                            sizeLyellow
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeLyellow(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeL ? "bg-yellow-200" : "bg-yellow-500"
                          }`}
                          onClick={() => {
                            setSizeLyellow(sizeL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeLorange ? (
                        <button
                          className={`w-[40px] h-[40px] bg-orange-500 rounded-[50px] ${
                            sizeLorange
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeLorange(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeL ? "bg-orange-200" : "bg-orange-500"
                          }`}
                          onClick={() => {
                            setSizeLorange(sizeL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeLgreen ? (
                        <button
                          className={`w-[40px] h-[40px] bg-green-600 rounded-[50px] ${
                            sizeLgreen
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeLgreen(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeL ? "bg-green-200" : "bg-green-600 "
                          }`}
                          onClick={() => {
                            setSizeLgreen(sizeL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h1
                  className={`text-[20px] text-black font-[400] ${
                    !sizeXL ? "text-gray-300" : null
                  }`}
                >
                  Размер (XL):
                </h1>
                <div className="flex items-center gap-[20px]">
                  <input
                    type="text"
                    placeholder="Цена размера XL..."
                    className={`w-[200px] h-[40px] rounded-[10px] pl-[10px] border-2 border-solid border-black ${
                      !sizeXL
                        ? "border-gray-300 placeholder:text-gray-300"
                        : null
                    }`}
                    onChange={(e) => setSizeXLprice(e.target.value)}
                    value={sizeXLprice}
                  />
                  <div className="flex items-center gap-[10px]">
                    <div className="">
                      {sizeXLred ? (
                        <button
                          className={`w-[40px] h-[40px] bg-red-600 rounded-[50px] ${
                            sizeXLred
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeXLred(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeXL ? "bg-red-200" : "bg-red-600 "
                          }`}
                          onClick={() => {
                            setSizeXLred(sizeXL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeXLyellow ? (
                        <button
                          className={`w-[40px] h-[40px] bg-yellow-500 rounded-[50px] ${
                            sizeXLyellow
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeXLyellow(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeXL ? "bg-yellow-200" : "bg-yellow-500 "
                          }`}
                          onClick={() => {
                            setSizeXLyellow(sizeXL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeXLorange ? (
                        <button
                          className={`w-[40px] h-[40px] bg-orange-500 rounded-[50px] ${
                            sizeXLorange
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeXLorange(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px] rounded-[50px] ${
                            !sizeXL ? "bg-orange-200" : "bg-orange-500 "
                          }`}
                          onClick={() => {
                            setSizeXLorange(sizeXL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                    <div className="">
                      {sizeXLgreen ? (
                        <button
                          className={`w-[40px] h-[40px] bg-green-600 rounded-[50px] ${
                            sizeXLgreen
                              ? "border-[3px] border-solid border-black"
                              : null
                          }`}
                          onClick={() => setSizeXLgreen(false)}
                        ></button>
                      ) : (
                        <button
                          className={`w-[40px] h-[40px]  rounded-[50px] ${
                            !sizeXL ? "bg-green-200" : "bg-green-600"
                          }`}
                          onClick={() => {
                            setSizeXLgreen(sizeXL ? true : false);
                          }}
                        ></button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="w-[300px] h-[40px] bg-orange-500 rounded-[10px] text-white font-[700] text-[20px]"
            onClick={() => postBicycle()}
          >
            Опубликовать
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Create;
