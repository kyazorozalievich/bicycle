import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
//Img
import iconEmail from "../../assets/image/iconEmail.png";
import iconUser from "../../assets/image/icon.jpg";
import headerlogo from "../../assets/image/headerlogo.png";
//Icon
import { PiBicycleFill } from "react-icons/pi";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { TiPlus } from "react-icons/ti";
import { MdOutlineClear } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { VscTriangleDown } from "react-icons/vsc";
import { VscTriangleUp } from "react-icons/vsc";
//

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { product } = useSelector((s) => s.data);
  const { bicyclebasket } = useSelector((s) => s.basket);
  const { bicyclefavorite } = useSelector((s) => s.favorite);
  //UseState
  const [searchProduct, setSearchProduct] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [delPasswordValue, setDelPasswordValue] = useState("");
  const [burger, setBurger] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [burgerText, setBurgerText] = useState(false);
  const [delAdminOpen, setDelAdminOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState(false);
  const [delAdminPassword, setDelAdminPassword] = useState(false);

  //function
  const addToPassword = () => {
    if (passwordValue === "123") {
      setAdminOpen(false);
      setDelPasswordValue("");
      navigate("/addtocreate");
    } else {
      alert("Неверный пароль");
      setDelPasswordValue("");
    }
  };
  const delToPassword = () => {
    if (delPasswordValue === "123") {
      setDelAdminOpen(false);
      setDelPasswordValue("");
      navigate("/delproduct");
    } else {
      alert("Неверный пароль");
      setDelPasswordValue("");
    }
  };
  function addToSearch() {
    if (product.map((el) => el.name || el.brend === searchProduct)) {
      navigate(`/search/${searchProduct}`);
    } else {
      alert("Товар не найден");
    }
  }
  //

  return (
    <div className="relative">
      <div className="header h-[80px] z-[48] bg-black text-white pt-[20px]">
        <div className="container w-[90%]">
          <div className="flex items-center justify-between">
            <img src={headerlogo} alt="" className="header-logo w-[70px]" />
            <div className="header-text-block flex items-center">
              <NavLink to="/" className="header-text font-[600]">
                Главная
              </NavLink>
              <div className="header-text-block-dontadaptiv flex gap-[20px] ">
                <NavLink to="/bicycles" className="header-text  font-[600]">
                  Велосипеды
                </NavLink>
                <NavLink to="/spareparts" className="header-text  font-[600]">
                  Запчасти
                </NavLink>

                <NavLink to="/accessories" className="header-text  font-[600]">
                  Аксессуары
                </NavLink>
              </div>
            </div>
            <div
              className="header-text-block-adaptiv"
              style={{
                display: "none",
              }}
            >
              <div className="">
                {burgerText ? (
                  <div
                    className="flex items-center gap-[20px] cursor-pointer"
                    onClick={() => setBurgerText(false)}
                  >
                    <h1>Отдел</h1>
                    <a className="">
                      <VscTriangleUp />
                    </a>
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-[20px] cursor-pointer"
                    onClick={() => setBurgerText(true)}
                  >
                    <h1>Отдел</h1>
                    <a className="">
                      <VscTriangleDown />
                    </a>
                  </div>
                )}
              </div>
              <div
                className=""
                style={{
                  display: burgerText ? "block" : "none",
                  position: "absolute",
                  top: "60px",
                  zIndex: "99",
                  transition: "all 0.3s ease-in-out",
                  background: "white",
                  color: "black",
                  padding: "5px",
                }}
              >
                <div className="flex items-start flex-col text-[15px]">
                  <a
                    onClick={() => navigate("/bicycles")}
                    className="  font-[600]"
                  >
                    Велосипеды
                  </a>
                  <a
                    onClick={() => navigate("/spareparts")}
                    className="  font-[600]"
                  >
                    Запчасти
                  </a>

                  <a
                    onClick={() => navigate("/accessories")}
                    className="  font-[600]"
                  >
                    Аксессуары
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bicycle..."
                  className="header-input border-2 font-sans border-solid border-orange-500 rounded-[50px] pl-[10px] pr-[35px] w-[200px] h-[30px] bg-transparent flex items-center"
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
                <a
                  className="absolute top-[5px] right-[10px] text-[20px]"
                  onClick={() => addToSearch()}
                >
                  <BiSearchAlt2 />
                </a>
              </div>
              <div className="relative">
                <div
                  className="absolute top-[-5px] right-[-5px] text-[10px] w-[10px] h-[10px] flex items-center justify-center  rounded-[50px] bg-red-600"
                  style={{
                    display: bicyclefavorite.length === 0 ? "none" : "block",
                  }}
                ></div>
                <a
                  className="text-[20px]"
                  onClick={() => navigate("/favorite")}
                >
                  <FaRegHeart />
                </a>
              </div>
              <div className="relative">
                <div
                  className="absolute top-[-3px] right-[-6px] text-[10px] w-[10px] h-[10px] flex items-center justify-center  rounded-[50px] bg-red-600"
                  style={{
                    display: bicyclebasket.length === 0 ? "none" : "block",
                  }}
                ></div>
                <a className="text-[25px]" onClick={() => navigate("/basket")}>
                  <FaOpencart />
                </a>
              </div>
              <div className="relative" onClick={() => setAdminOpen(true)}>
                <a className="text-[15px] absolute bottom-0 right-[-10px] text-orange-500">
                  <TiPlus />
                </a>
                <a className="text-[25px]">
                  <PiBicycleFill />
                </a>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/register")}
              >
                {user ? (
                  <div className="">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt=""
                        className="w-[30px] rounded-[50px]"
                      />
                    ) : (
                      <img src={iconEmail} alt="" className="w-[30px]" />
                    )}
                  </div>
                ) : (
                  <img
                    src={iconUser}
                    alt=""
                    className="w-[30px] rounded-[50px]"
                  />
                )}
              </div>
              <a
                className="text-[30px] cursor-pointer"
                onClick={() => setBurger(true)}
              >
                <TbMenuDeep />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className=""
          style={{
            display: burger ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 49,
            padding: "20px",
          }}
          onClick={() => setBurger(false)}
        ></div>
        <div
          className="header-burger bg-white z-50 w-[350px] h-[100vh] absolute top-0 right-0 py-[40px] px-[40px] "
          style={{
            display: burger ? "block" : "none",
            position: "fixed",
          }}
        >
          <div className="relative">
            <a
              className="absolute top-[-20px] right-[-20px] text-[30px] text-gray-400 cursor-pointer"
              onClick={() => setBurger(false)}
            >
              <MdOutlineClear />
            </a>
          </div>
          <div className="flex items-start justify-center flex-col mt-[40px] gap-[30px]">
            <h1 className="embed text-[25px] font-[700]">ДОП. ИНФОРМАЦИЯ</h1>
            <div className="flex items-start flex-col gap-[20px] text-[17px] font-[600]">
              <h6
                onClick={() => {
                  navigate("/about"), setBurger(false);
                }}
              >
                О нас
              </h6>
              <h6
                onClick={() => {
                  navigate("/velomaster"), setBurger(false);
                }}
              >
                Веломастерская
              </h6>
              <h6
                onClick={() => {
                  navigate("/userinfo"), setBurger(false);
                }}
              >
                Пользовательское соглашение
              </h6>
              <h6
                onClick={() => {
                  navigate("/contact"), setBurger(false);
                }}
              >
                Контакты
              </h6>
              <h6
                onClick={() => {
                  setDelAdminOpen(true), setBurger(false);
                }}
              >
                Удаление Продуктов
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className=""
          style={{
            display: adminOpen ? "block" : "none",
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
            setAdminOpen(false);
          }}
        ></div>
        <div
          className="header-admin-block bg-white z-50 w-[600px] h-[400px] py-[40px] px-[40px] "
          style={{
            display: adminOpen ? "block" : "none",
            position: "fixed",
            top: 150,
            left: 450,
          }}
        >
          <a
            className="text-[30px] text-black absolute cursor-pointer top-[10px] right-[10px]"
            onClick={() => setAdminOpen(false)}
          >
            <IoCloseSharp />
          </a>
          <div className="flex items-center flex-col mt-[80px] gap-[40px]">
            <input
              type={adminPassword ? "text" : "password"}
              placeholder="Password..."
              className="border-2 border-solid text-black rounded-[5px] border-black w-[400px] h-[40px] px-[10px]"
              onChange={(e) => setPasswordValue(e.target.value)}
              value={passwordValue}
            />
            <button
              className="w-[200px] rounded-[5px] h-[40px] font-[600] bg-orange-500 text-white"
              onClick={() => addToPassword()}
            >
              Потвердить
            </button>
            <a
              className=" absolute top-[130px] left-[460px]  cursor-pointer text-black"
              onClick={() => setAdminPassword(!adminPassword)}
            >
              {adminPassword ? <IoEye /> : <BsFillEyeSlashFill />}
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className=""
          style={{
            display: delAdminOpen ? "block" : "none",
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
            setDelAdminOpen(false);
          }}
        ></div>
        <div
          className="bg-white z-50 w-[600px] h-[400px] absolute top-[150px] left-[450px] py-[40px] px-[40px] "
          style={{
            display: delAdminOpen ? "block" : "none",
            position: "fixed",
            top: 150,
            left: 450,
          }}
        >
          <a
            className="text-[30px] text-black absolute cursor-pointer top-[10px] right-[10px]"
            onClick={() => setDelAdminOpen(false)}
          >
            <IoCloseSharp />
          </a>
          <div className="flex items-center flex-col mt-[80px] gap-[40px]">
            <input
              type={delAdminPassword ? "text" : "password"}
              placeholder="Password..."
              className="border-2 border-solid text-black rounded-[5px] border-black w-[400px] h-[40px] px-[10px]"
              onChange={(e) => setDelPasswordValue(e.target.value)}
              value={delPasswordValue}
            />
            <button
              className="w-[200px] rounded-[5px] h-[40px] font-[600] bg-orange-500 text-white"
              onClick={() => delToPassword()}
            >
              Потвердить
            </button>
            <a
              className=" absolute top-[130px] left-[460px]  cursor-pointer text-black"
              onClick={() => setDelAdminPassword(!delAdminPassword)}
            >
              {delAdminPassword ? <IoEye /> : <BsFillEyeSlashFill />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
