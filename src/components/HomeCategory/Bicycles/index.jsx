import axios from "axios";
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/reducers/sliceProduct";
import Footer from "../../Footer";
import BicycleCard from "../../BicycleCard";
//Img
import bicyclebg from "../../../assets/image/bicyclebg.png";
//Icon
import { HiChevronUp } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { MdRadioButtonChecked } from "react-icons/md";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
//

const Bicycles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.data);
  const [filteredProducts, setFilteredProducts] = useState(product);

  //USESTATE
  //Category
  const [dvuh, setDvuh] = useState(false);
  const [gorny, setGorny] = useState(false);
  const [gorod, setGorod] = useState(false);
  const [gravi, setGravi] = useState(false);
  const [category, setCategory] = useState(false);
  //Price
  const [price, setPrice] = useState(false);
  //Brend
  const [bmc, setBmc] = useState(false);
  const [brand, setBrand] = useState(false);
  const [bianci, setBianci] = useState(false);
  const [colnago, setColnago] = useState(false);
  const [cilcistino, setCilcistino] = useState(false);
  //Material
  const [alu, setAlu] = useState(false);
  const [steel, setSteel] = useState(false);
  const [carbon, setCarbon] = useState(false);
  const [material, setMaterial] = useState(false);
  //Color
  const [red, setRed] = useState(false);
  const [color, setColor] = useState(false);
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [orange, setOrange] = useState(false);

  //function
  const filterProducts = async () => {
    try {
      let { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle`
      );
      dispatch(getProducts(data));
      let filtered = data;
      if (gorny) {
        filtered = filtered.filter((el) => el.category === "gornuye");
      } else if (gorod) {
        filtered = filtered.filter((el) => el.category === "gorod");
      } else if (gravi) {
        filtered = filtered.filter((el) => el.category === "gravine");
      } else if (dvuh) {
        filtered = filtered.filter((el) => el.category === "dvuhpodves");
      }

      if (bianci) {
        filtered = filtered.filter((el) => el.brend === "bianci");
      } else if (bmc) {
        filtered = filtered.filter((el) => el.brend === "bmc");
      } else if (cilcistino) {
        filtered = filtered.filter((el) => el.brend === "cilcistino");
      } else if (colnago) {
        filtered = filtered.filter((el) => el.brend === "colnago");
      }

      if (alu) {
        filtered = filtered.filter((el) => el.material === "alymini");
      } else if (carbon) {
        filtered = filtered.filter((el) => el.material === "karbon");
      } else if (steel) {
        filtered = filtered.filter((el) => el.material === "stal");
      }

      if (red) {
        filtered = filtered.filter((el) => el.red === "red");
      } else if (yellow) {
        filtered = filtered.filter((el) => el.yellow === "yellow");
      } else if (orange) {
        filtered = filtered.filter((el) => el.orange === "orange");
      } else if (green) {
        filtered = filtered.filter((el) => el.green === "green");
      }

      setFilteredProducts(filtered);
    } catch (error) {
      alert(error.message);
    }
  };
  //

  useEffect(() => {
    filterProducts();
  }, [
    gorny,
    gorod,
    gravi,
    dvuh,
    bianci,
    bmc,
    cilcistino,
    colnago,
    alu,
    carbon,
    steel,
    red,
    yellow,
    orange,
    green,
  ]);

  return (
    <>
      <div
        className="pl-[150px] pt-[100px]"
        style={{
          backgroundImage: `url(${bicyclebg})`,
          backgroundSize: "cover",
          height: "30vh",
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          color: "white",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <div className="flex items-start flex-col gap-[20px]">
          <div className="flex items-center">
            <h5 className="cursor-pointer" onClick={() => navigate("/")}>
              Главная
            </h5>
            /<h5 className="cursor-pointer text-orange-500">Велосипеды</h5>
          </div>
          <h1 className="embed text-[40px] font-[700] tracking-[3px]">
            У НАС ЛУЧШИЕ ВЕЛОСИПЕДЫ
          </h1>
        </div>
      </div>
      <div className="pt-[50px] pb-[20px]">
        <div className="container w-[90%] flex items-start gap-[100px]">
          <div className="scroll flex items-start flex-col gap-[10px]">
            <div className="flex items-start flex-col gap-[10px]">
              <div className="flex items-center gap-[20px] text-[20px] ">
                <h1 className="font-[700]">Категории Товара</h1>
                {category ? (
                  <a className="" onClick={() => setCategory(false)}>
                    <HiChevronUp />
                  </a>
                ) : (
                  <a className="" onClick={() => setCategory(true)}>
                    <HiChevronDown />{" "}
                  </a>
                )}
              </div>
              <div
                className="flex items-start flex-col gap-[10px]"
                style={{
                  display: category ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[5px] text-gray-600">
                  <a className="">
                    {gorny ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setDvuh(false);
                          setGorny(false);
                          setGorod(false);
                          setGravi(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setGorny(true);
                          setDvuh(false);
                          setGorod(false);
                          setGravi(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Горные велосипеды</h2>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600 my-[10px]">
                  <a className="">
                    {gorod ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setDvuh(false);
                          setGorny(false);
                          setGorod(false);
                          setGravi(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setGorod(true);
                          setDvuh(false);
                          setGorny(false);
                          setGravi(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Городские велосипеды</h2>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600">
                  <a className="">
                    {gravi ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setDvuh(false);
                          setGorny(false);
                          setGorod(false);
                          setGravi(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setGravi(true);
                          setDvuh(false);
                          setGorny(false);
                          setGorod(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Гравийные велосипеды</h2>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600 my-[10px]">
                  <a className="">
                    {dvuh ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setDvuh(false);
                          setGorny(false);
                          setGorod(false);
                          setGravi(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setDvuh(true);
                          setGorny(false);
                          setGorod(false);
                          setGravi(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Двухподвесные велосипеды</h2>
                </div>
              </div>
            </div>
            <hr className="text-gray-900 w-[250px] " />
            <div className="">
              <div className="text-[20px] font-[700] flex items-center gap-[144px]">
                <h1 className="">Цена</h1>
                {price ? (
                  <a className="" onClick={() => setPrice(false)}>
                    <HiChevronUp />
                  </a>
                ) : (
                  <a className="" onClick={() => setPrice(true)}>
                    <HiChevronDown />
                  </a>
                )}
              </div>
              <div
                className=""
                style={{
                  display: price ? "block" : "none",
                }}
              >
                <input
                  type="range"
                  name="volume"
                  id="volume"
                  min="0"
                  max="500000"
                  className="w-[250px]"
                />
                <div className="flex items-center gap-[10px]">
                  <button className="w-[100px] h-[50px] font-[600] border-2 border-solid rounded-[10px] text-[15px] text-gray-600">
                    0 Сом
                  </button>
                  <h1>-</h1>
                  <button className="w-[110px] h-[50px] font-[600] border-2 border-solid rounded-[10px] text-[15px] text-gray-600">
                    500 000 Сом
                  </button>
                </div>
              </div>
            </div>
            <hr className="text-gray-900 w-[250px] " />
            <div className="flex items-start flex-col gap-[20px]">
              <div className="text-[20px] font-[700] flex items-center gap-[134px]">
                <h1>Бренд</h1>
                {brand ? (
                  <a className="" onClick={() => setBrand(false)}>
                    <HiChevronUp />
                  </a>
                ) : (
                  <a className="" onClick={() => setBrand(true)}>
                    <HiChevronDown />{" "}
                  </a>
                )}
              </div>
              <div
                className=""
                style={{
                  display: brand ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[5px] text-gray-600">
                  <a className="">
                    {bianci ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setBmc(false);
                          setBianci(false);
                          setColnago(false);
                          setCilcistino(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setBmc(false);
                          setBianci(true);
                          setColnago(false);
                          setCilcistino(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Bianci</h2>
                  <h6>()</h6>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600 my-[10px]">
                  <a className="">
                    {bmc ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setBmc(false);
                          setBianci(false);
                          setColnago(false);
                          setCilcistino(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setBmc(true);
                          setBianci(false);
                          setColnago(false);
                          setCilcistino(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>BMC</h2>
                  <h6>()</h6>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600">
                  <a className="">
                    {cilcistino ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setBmc(false);
                          setBianci(false);
                          setColnago(false);
                          setCilcistino(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setBmc(false);
                          setBianci(false);
                          setColnago(false);
                          setCilcistino(true);
                        }}
                      />
                    )}
                  </a>
                  <h2>Cilcistino</h2>
                  <h6>()</h6>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600 my-[10px]">
                  <a className="">
                    {colnago ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setBmc(false);
                          setBianci(false);
                          setColnago(false);
                          setCilcistino(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setBmc(false);
                          setColnago(true);
                          setBianci(false);
                          setCilcistino(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Colnago</h2>
                  <h6>()</h6>
                </div>
              </div>
            </div>
            <hr className="text-gray-900 w-[250px] " />
            <div className="">
              <div className="text-[20px] font-[700] flex items-center gap-[80px]">
                <h1>Материалы</h1>
                {material ? (
                  <a className="" onClick={() => setMaterial(false)}>
                    <HiChevronUp />
                  </a>
                ) : (
                  <a className="" onClick={() => setMaterial(true)}>
                    <HiChevronDown />{" "}
                  </a>
                )}
              </div>
              <div
                className=""
                style={{
                  display: material ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[5px] text-gray-600">
                  <a className="">
                    {alu ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setAlu(false);
                          setSteel(false);
                          setCarbon(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setAlu(true);
                          setSteel(false);
                          setCarbon(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Алюминий</h2>
                  <h6>()</h6>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600 my-[10px]">
                  <a className="">
                    {carbon ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setAlu(false);
                          setSteel(false);
                          setCarbon(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setAlu(false);
                          setSteel(false);
                          setCarbon(true);
                        }}
                      />
                    )}
                  </a>
                  <h2>Карбон</h2>
                  <h6>()</h6>
                </div>
                <div className="flex items-center gap-[5px] text-gray-600">
                  <a className="">
                    {steel ? (
                      <FaCircleCheck
                        className="text-orange-500"
                        onClick={() => {
                          setAlu(false);
                          setSteel(false);
                          setCarbon(false);
                        }}
                      />
                    ) : (
                      <MdOutlineRadioButtonUnchecked
                        className="text-[18px]"
                        onClick={() => {
                          setAlu(false);
                          setSteel(true);
                          setCarbon(false);
                        }}
                      />
                    )}
                  </a>
                  <h2>Сталь</h2>
                  <h6>()</h6>
                </div>
              </div>
            </div>
            <hr className="text-gray-900 w-[250px] " />
            <div className="flex items-start flex-col gap-[10px]">
              <div className="text-[20px] font-[700] flex items-center gap-[135px]">
                <h1>Цвета</h1>
                {color ? (
                  <a className="" onClick={() => setColor(false)}>
                    <HiChevronUp />
                  </a>
                ) : (
                  <a className="" onClick={() => setColor(true)}>
                    <HiChevronDown />{" "}
                  </a>
                )}
              </div>
              <div
                className="gap-[10px] text-[40px]"
                style={{
                  display: color ? "block" : "none",
                }}
              >
                <div className="flex items-center gap-[10px]">
                  <a className="">
                    {red ? (
                      <MdRadioButtonChecked
                        className="text-red-600"
                        onClick={() => {
                          setRed(false);
                          setYellow(false);
                          setOrange(false);
                          setGreen(false);
                        }}
                      />
                    ) : (
                      <RiCheckboxBlankCircleFill
                        className="text-red-600"
                        onClick={() => {
                          setRed(true);
                          setYellow(false);
                          setOrange(false);
                          setGreen(false);
                        }}
                      />
                    )}
                  </a>
                  <a className="">
                    {yellow ? (
                      <MdRadioButtonChecked
                        className="text-yellow-500"
                        onClick={() => {
                          setRed(false);
                          setYellow(false);
                          setOrange(false);
                          setGreen(false);
                        }}
                      />
                    ) : (
                      <RiCheckboxBlankCircleFill
                        className="text-yellow-500"
                        onClick={() => {
                          setRed(false);
                          setYellow(true);
                          setOrange(false);
                          setGreen(false);
                        }}
                      />
                    )}
                  </a>
                  <a className="">
                    {orange ? (
                      <MdRadioButtonChecked
                        className="text-orange-500"
                        onClick={() => {
                          setRed(false);
                          setYellow(false);
                          setOrange(false);
                          setGreen(false);
                        }}
                      />
                    ) : (
                      <RiCheckboxBlankCircleFill
                        className="text-orange-500"
                        onClick={() => {
                          setRed(false);
                          setYellow(false);
                          setOrange(true);
                          setGreen(false);
                        }}
                      />
                    )}
                  </a>
                  <a className="">
                    {green ? (
                      <MdRadioButtonChecked
                        className="text-green-600"
                        onClick={() => {
                          setRed(false);
                          setYellow(false);
                          setOrange(false);
                          setGreen(false);
                        }}
                      />
                    ) : (
                      <RiCheckboxBlankCircleFill
                        className="text-green-600"
                        onClick={() => {
                          setRed(false);
                          setYellow(false);
                          setOrange(false);
                          setGreen(true);
                        }}
                      />
                    )}
                  </a>
                </div>
              </div>
            </div>
            <hr className="text-gray-900 w-[250px] " />
            <button
              className="w-[250px] h-[50px] rounded-[10px] text-[17px] font-[600] border-2 border-solid border-gray-300"
              onClick={() => {
                setAlu(false);
                setBmc(false);
                setRed(false);
                setDvuh(false);
                setGorny(false);
                setGorod(false);
                setGreen(false);
                setGravi(false);
                setSteel(false);
                setBianci(false);
                setCarbon(false);
                setYellow(false);
                setOrange(false);
                setColnago(false);
                setCilcistino(false);
              }}
            >
              Сбросить Фильтры
            </button>
          </div>
          <div className="scroll flex  flex-wrap gap-[50px] w-[80%] h-[800px] overflow-y-scroll">
            {filteredProducts.map((el) =>
              el.type === "bicycle" ? (
                <BicycleCard key={el._id} el={el} />
              ) : null
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bicycles;
