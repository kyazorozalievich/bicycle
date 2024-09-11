import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/sliceProduct";
import { getAccess } from "../../redux/creates/sliceAccessories";
import Footer from "../Footer";
import BicycleCard from "../BicycleCard";
//Img
import trade from "../../assets/image/trade.svg";
import acces from "../../assets/image/acces.svg";
import tools from "../../assets/image/tools.svg";
import carta from "../../assets/image/carta.png";
import homebg from "../../assets/image/homebg.png";
import icon from "../../assets/image/homeicon.svg";
import gorny from "../../assets/image/gornybg.png";
import tools2 from "../../assets/image/tools2.svg";
import tools3 from "../../assets/image/tools3.svg";
import tools4 from "../../assets/image/tools4.svg";
import velo from "../../assets/image/velosiped.svg";
import icon2 from "../../assets/image/homeicon2.svg";
import icon3 from "../../assets/image/homeicon3.svg";
import icon4 from "../../assets/image/homeicon4.svg";
import icon5 from "../../assets/image/homeicon5.svg";
import zapchasti from "../../assets/image/zapchasti.svg";
import homevideo from "../../assets/image/homevideo.png";
import preimu from "../../assets/image/preimushestvo.png";
import ekipirovka from '../../assets/image/ekipirovka.png';
import velostanki from '../../assets/image/velostanki.svg';
//Icon
import { GiSmartphone } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
//

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((s) => s.data);
  const { accessories } = useSelector((s) => s.access);

  //function
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
  async function getAccessories() {
    try {
      let { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle`
      );
      dispatch(getAccess(data));
    } catch (error) {
      alert(error.message);
    }
  }
  function location() {
    window.open(`https://2gis.kg/bishkek?m=74.639364%2C42.88239%2F12.85`);
  }
  //

  useEffect(() => {
    getBicycle();
    getAccessories();
  }, []);

  return (
    <div className="pt-[50px]">
      <div
        className="home-bg"
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "500px",
        }}
      >
        <div className="home-bg-text flex items-start flex-col justify-start gap-[20px]">
          <h1 className="home-bg-text-h1 font-[700]">
            ЭЛЕКТРО <br /> ВЕЛОСИПЕДЫ
          </h1>
          <p className="home-bg-text-p w-[540px] text-gray-300">
            Cento10 Hybrid — это гоночный велосипед с помогающим педалированию
            электроприводом, который устанавливает новый, очень высокий стандарт
            для данной категории
          </p>
          <button className="w-[150px] h-[40px] bg-orange-500 rounded-[10px]">
            Подробнее
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="homeblock w-[550px] h-[200px] flex items-start gap-[20px] pl-[150px] flex-col justify-center bg-black text-white">
          <h1 className="w-[250px] text-[20px]">
            Экстремальное вождение на горном велосипеде
          </h1>
          <button className="text-orange-500 font-[600]">Подробнее</button>
        </div>
        <div className="homeblock w-[550px] h-[200px] flex items-start gap-[20px] pl-[100px] flex-col justify-center bg-black text-white">
          <h1 className="w-[250px] text-[20px]">
            Велосипеды для профессионалов
          </h1>
          <button className="text-orange-500 font-[600]">Подробнее</button>
        </div>
        <div className="homeblock w-[550px] h-[200px] flex items-start gap-[20px] pl-[50px] flex-col justify-center bg-black text-white">
          <h1 className="w-[250px] text-[20px]">
            Долгая поездка на шоссейном велосипеде
          </h1>
          <button className="text-orange-500 font-[600]">Подробнее</button>
        </div>
      </div>
      <div className="flex items-center justify-between h-[100px] w-[100%] ">
        <img src={icon} alt="" className="w-[10%]" />
        <img src={icon2} alt="" className="w-[10%]" />
        <img src={icon3} alt="" className="w-[10%]" />
        <img src={icon4} alt="" className="w-[10%]" />
        <img src={icon5} alt="" className="w-[10%]" />
      </div>
      <div className="w-[100%] h-[750px] bg-gray-100 pt-[50px]">
        <div className="container w-[90%] flex items-start flex-col">
          <h1 className="embed text-[40px] font-[700] ">НОВИНКИ</h1>
          <div className="scroll flex items-center gap-[30px] h-[600px] w-[100%] overflow-x-scroll">
            {product.map((el) =>
              el.type === "bicycle" ? <BicycleCard el={el} /> : null
            )}
          </div>
        </div>
      </div>
      <div className="container w-[90%] flex justify-center mt-[50px]">
        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="embed text-[40px] font-[700] ">КАТОЛОГ</h1>
          <div className="flex items-center flex-col gap-[20px]">
            <img
              src={velo}
              alt=""
              className="w-[1200px] cursor-pointer"
              onClick={() => navigate("/bicycles")}
            />
            <div className="flex items-center gap-[20px]">
              <img
                src={trade}
                alt=""
                className="home-tradein-bg w-[370px] cursor-pointer"
                onClick={() => navigate("/bicycles")}
              />
              <div className="flex items-center gap-[20px]">
                <div className="flex items-start flex-col gap-[20px]">
                  <img
                    src={zapchasti}
                    alt=""
                    className="home-zapchasti-bg w-[370px] cursor-pointer"
                    onClick={() => navigate("/spareparts")}
                  />
                  <img
                    src={acces}
                    alt=""
                    className="home-access-bg w-[370px] cursor-pointer"
                    onClick={() => navigate("/accessories")}
                  />
                </div>
                <div className="ekip-velos flex items-start flex-col gap-[20px]">
                  <img
                    src={ekipirovka}
                    alt=""
                    className="home-ekipirovka-bg w-[415px] cursor-pointer"
                    onClick={() => navigate("/equiqment")}
                  />
                  <img
                    src={velostanki}
                    alt=""
                    className="home-velostanki-bg w-[415px] cursor-pointer"
                    onClick={() => navigate("/bikeracks")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] flex items-center flex-col">
        <div className="container w-[90%] flex items-center justify-between mb-[50px]">
          <h1 className="embed w-[600px] text-[40px] font-[700]">
            НИЧЕГО НЕ СМОЖЕТ ОСТАНОВИТЬ ВАС
          </h1>
          <p className="w-[430px]">
            Наша компания специализируется на продаже товаров для велосипедного
            спорта — велосипедов, запасных частей, аксессуаров и различного
            спортивного инвентаря для активного спорта и отдыха.
          </p>
        </div>
        <img src={homevideo} alt="" />
        <div
          className="home-video-text-all-block  pt-[40px] w-[100%] h-[200px] text-white"
          style={{
            background: "#2E2E2E",
          }}
        >
          <div className="home-video-text-block flex items-start flex-col gap-[10px]">
            <div className=" flex items-center text-[20px] font-[600] text-white gap-[10px]">
              <a className="text-gray-500 text-[30px]">
                <IoDiamondOutline />
              </a>
              <h1 className="home-video-text-h1">Европейские бренды</h1>
            </div>
            <h5 className="home-video-text-p w-[200px]">
              Представляем десятки европейских брендов
            </h5>
          </div>
          <div className="home-video-text-block flex items-start flex-col gap-[10px]">
            <div className=" flex items-center text-[20px] font-[600] text-white gap-[10px]">
              <a className="text-gray-500 text-[30px]">
                <TbRosetteDiscountCheckFilled />
              </a>
              <h1 className="home-video-text-h1">Вечная гарантия</h1>
            </div>
            <h5 className="home-video-text-p w-[200px]">
              На некоторые бренды предоставляем пожизненную гарантию
            </h5>
          </div>
          <div className="home-video-text-block flex items-start flex-col gap-[10px]">
            <div className=" flex items-center text-[20px] font-[600] text-white gap-[10px]">
              <a className="text-gray-500 text-[30px]">
                <MdOutlineSettings />
              </a>
              <h1 className="home-video-text-h1">Предпродажная настройка</h1>
            </div>
            <h5 className="home-video-text-p w-[200px]">
              Специалисты настроят ваш велосипед наилучшим образом
            </h5>
          </div>
          <div className="home-video-text-block flex items-start flex-col gap-[10px]">
            <div className=" flex items-center text-[20px] font-[600] text-white gap-[10px]">
              <a className="text-gray-500 text-[30px]">
                <Ri24HoursFill />
              </a>
              <h1 className="home-video-text-h1">Доставка за 24 часа</h1>
            </div>
            <h5 className="home-video-text-p w-[250px]">
              Доставляем товар всеми популярными транспортными компаниями
            </h5>
          </div>
        </div>
      </div>
      <div className="container w-[90%] mt-[100px] flex items-start flex-col gap-[30px]">
        <h1 className="embed text-[40px] font-[700] w-[100%]">
          ГОРНЫЕ <br /> ВЕЛОСИПЕДЫ
        </h1>
        <div className="home-gorny-all-block flex items-center">
          <div className="text-white flex items-start gap-[20px] flex-col">
            <div className="flex items-center gap-[20px]">
              <div className="home-gorny-block flex items-center flex-col justify-center gap-[10px] h-[25vh]  w-[300px] rounded-[10px] bg-[#34312D]">
                <div className="flex items-center">
                  <h1 className="home-gorny-block-h1  text-[100%] font-[600]">
                    Рама
                  </h1>
                  <img src={tools} alt="" className="w-[40%]" />
                </div>
                <p className="home-gorny-block-p w-[80%]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of
                </p>
              </div>
              <div className="home-gorny-block flex items-center flex-col justify-center gap-[10px] h-[25vh]  w-[300px] rounded-[10px] bg-[#34312D]">
                <div className="flex items-center">
                  <h1 className="home-gorny-block-h1  text-[100%] font-[600]">
                    Бортовой <br /> компьютер
                  </h1>
                  <img src={tools2} alt="" className="w-[20%]" />
                </div>
                <p className="home-gorny-block-p w-[80%]">
                  The point of using lorem ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="home-gorny-block flex items-center flex-col justify-center gap-[10px] h-[25vh]  w-[300px] rounded-[10px] bg-[#34312D]">
                <div className="flex items-center">
                  <h1 className="home-gorny-block-h1 text-[100%] font-[600]">
                    Трансмиссия
                  </h1>
                  <img src={tools3} alt="" className="w-[20%]" />
                </div>
                <p className="home-gorny-block-p w-[80%]">
                  Many desktop publishing packages and web page editors now use
                  lorem ipsum as{" "}
                </p>
              </div>
              <div className="home-gorny-block flex items-center flex-col justify-center gap-[10px] h-[25vh]  w-[300px]  rounded-[10px] bg-[#34312D]">
                <div className="flex items-center">
                  <h1 className="home-gorny-block-h1 text-[100%] font-[600]">
                    Оборудование
                  </h1>
                  <img src={tools4} alt="" className="w-[20%]" />
                </div>
                <p className="home-gorny-block-p w-[80%]">
                  Contrary to popular belief, lorem ipsum is not simply random
                  text. It has roots in
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col gap-[20px] ml-[100px]">
            <img src={gorny} alt="" className="w-[65%]" />
            <p className="home-gorny-right-block-p w-[70%] text-[80%]">
              Горный велосипед несмотря на свое название часто и активно
              используются в условиях города, так как обладает рядом
              характеристик, позволяющих сделать велопрогулку максимально
              приятной и комфортной
            </p>
            <button className="w-[150px] h-[40px] rounded-[10px] bg-orange-500 text-[18px] text-white font-[600]">
              Каталог
            </button>
          </div>
        </div>
      </div>
      <div className="container w-[90%] flex items-start flex-col gap-[30px] mt-[100px]">
        <h1 className="embed text-[40px] font-[700] w-[360px]">ПРЕИМУЩЕСТВО</h1>
        <div className="flex items-center gap-[40px]">
          <img
            src={preimu}
            alt=""
            className="home-preimushestvo-img w-[51%] rounded-[10px]"
          />
          <div className="flex items-center gap-[40px] flex-col">
            <div className="flex items-center gap-[40px]">
              <div className="home-preimushestvo-block w-[290px] h-[220px] rounded-[10px] bg-orange-500 text-white flex items-start flex-col justify-center gap-[10px] p-8">
                <h1 className="home-preimushestvo-block-h1 ">
                  БЕСПЛАТНАЯ ДОСТАВКА
                </h1>
                <p className="home-preimushestvo-block-p w-[90%]">
                  Мы пользуемся всеми популярными видами доставки
                </p>
                <h2>Подробнее</h2>
              </div>
              <div className="home-preimushestvo-block w-[290px] h-[220px] rounded-[10px] bg-orange-500 text-white flex items-start flex-col justify-center gap-[10px] p-8">
                <h1 className="home-preimushestvo-block-h1">ОБМЕН И ВОЗВРАТ</h1>
                <p className="home-preimushestvo-block-p w-[220px]">
                  Все товары обеспечены фирменной гарантией фирм-производителей
                </p>
                <h2>Подробнее</h2>
              </div>
            </div>
            <div className="flex items-center gap-[40px]">
              <div className="home-preimushestvo-block w-[290px] h-[220px] rounded-[10px] bg-orange-500 text-white flex items-start flex-col justify-center gap-[10px] p-8">
                <h1 className="home-preimushestvo-block-h1">
                  ДОП. ОБСЛУЖИВАНИЕ
                </h1>
                <p className="home-preimushestvo-block-p w-[220px]">
                  Мы выполняем ремонт велосипеда любой сложности
                </p>
                <h2>Подробнее</h2>
              </div>
              <div className="home-preimushestvo-block w-[290px] h-[220px] rounded-[10px] bg-orange-500 text-white flex items-start flex-col justify-center gap-[10px] p-8">
                <h1 className="home-preimushestvo-block-h1">ОНЛАЙН ОПЛАТА</h1>
                <p className="home-preimushestvo-block-p w-[220px]">
                  Для удобства вы можете оплатить товар банковской картой через
                  сайт
                </p>
                <button className="home-preimushestvo-btn">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-[90%] mt-[100px]">
        <h1 className="embed text-[40px] font-[700] w-[360px]">АКСЕССУАРЫ</h1>
        <div className="scroll flex items-center gap-[30px] h-[600px] w-[100%] overflow-x-scroll">
          {accessories.map((el) =>
            el.type === "accessories" ? <BicycleCard el={el} /> : null
          )}
        </div>
      </div>
      <div className="flex items-start flex-col gap-[30px] my-[100px]">
        <div className="container w-[90%]">
          <h1 className="embed text-[40px] font-[700] w-[360px]">КОНТАКТЫ</h1>
        </div>
        <img
          src={carta}
          alt=""
          className="w-[100%] cursor-pointer"
          onClick={() => location()}
        />
        <div className="container w-[90%] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <a className="text-[25px] text-orange-500">
              {" "}
              <GiSmartphone />
            </a>
            <h6 className="text-[17px] font-[600]">+996 (995) 25-55-92</h6>
          </div>
          <div className="flex items-center gap-[10px]">
            <a className="text-[30px] text-orange-500">
              <TiLocationArrowOutline />
            </a>
            <h6 className="text-[17px] font-[600]">
              г.Бишкек, ул.Куренкеева 138{" "}
            </h6>
          </div>
          <div className="flex items-center gap-[10px]">
            <a className="text-[25px] text-orange-500">
              {" "}
              <MdOutlineMail />
            </a>
            <h6 className="text-[17px] font-[600]">ashimalievkyaz@gmail.com</h6>
          </div>
          <div className="flex items-center gap-[10px]">
            <a className="text-[25px] text-orange-500">
              <MdOutlineDateRange />
            </a>
            <h6 className="text-[17px] font-[600]">
              Без выходных <br /> 10:00-22:00
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
