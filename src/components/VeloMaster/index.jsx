import React from "react";
import Footer from "../Footer";
//Img
import velomasterbg from "../../assets/image/velomaster.png";
//Icon
import { useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
//

const VeloMaster = () => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-[80px]">
      <div
        className="text-white"
        style={{
          backgroundImage: `url(${velomasterbg})`,
          backgroundSize: "cover",
          height: "30vh",
          width: "100%",
        }}
      >
        <div className="flex items-start flex-col pl-[150px] pt-[50px]">
          <div className="flex items-center">
            <h5 className="cursor-pointer" onClick={() => navigate("/")}>
              Главная
            </h5>
            /<h5 className="cursor-pointer text-orange-500">Веломастерская</h5>
          </div>
          <h1 className="embed text-[40px] font-[600] my-[50px]">
            ВЕЛОМАСТЕРСКАЯ
          </h1>
        </div>
      </div>
      <div className="w-[100%] h-[300px] bg-[#2E2E2E] text-white flex items-center justify-center gap-[100px]">
        <p className="w-[500px]">
          Если вы купили велосипед в нашем магазине, то то можете не волноваться
          о настройке и проверке, так как мы это выполняем в рамках
          предпродажной подготовки. Но если вы откатались уже сезон
          и ваш железный конь уже выглядит и ведёт себя потрёпанно,
          мы с удовольствием приведём его в порядок. Наша веломастерская
          работает ежедневно и выполняет не только периодическое обслуживание,
          но и ремонт велосипеда любой сложности
        </p>
        <div className="flex items-start flex-col gap-[20px]">
          <p className="w-[730px]">
            Отличное оснащение и опытные специалисты обеспечат максимально
            короткий срок ремонта. Какой бы ни была поломка, наличие большого
            количества узлов и деталей на складе позволит быстро вернуть технике
            работоспособность. Мы берём в работу горные модели, шоссейные
            и городские велосипеды
          </p>
          <p className="w-[730px]">
            Являясь профессиональными велосипедистами, мастера нашей компании
            быстро и чётко выявят неисправность и предложат максимально
            эффективный способ ремонта. Очень скоро ваш байк будет вновь на ходу
          </p>
        </div>
      </div>
      <div className="container w-[90%] ">
        <h1 className="embed text-[30px] font-[700] py-[50px]">
          СТОИМОСТЬ ОСНОВНЫХ УСЛУГ
        </h1>
        <div className="flex items-start gap-[10px]">
          <div className="flex items-start flex-col gap-[10px]">
            <div className="w-[600px] h-[50px] rounded-[10px] flex items-center justify-between px-[20px] bg-gray-100">
              <h1>Диагностика</h1>
              <h2>Бесплатно</h2>
            </div>
            <div className="w-[600px] h-[50px] rounded-[10px] flex items-center justify-between px-[20px] bg-gray-100">
              <h1>Тех обслуживание</h1>
              <h2>2 500 ₽</h2>
            </div>
            <div className="w-[600px] h-[50px] rounded-[10px] flex items-center justify-between px-[20px] bg-gray-100">
              <h1>Мойка</h1>
              <h2>1500 ₽</h2>
            </div>
          </div>
          <div className="flex items-start flex-col gap-[10px]">
            <div className="w-[600px] h-[50px] rounded-[10px] flex items-center justify-between px-[20px] bg-gray-100">
              <h1>Комплексное тех. обслуживание</h1>
              <h2>5 000 ₽</h2>
            </div>
            <div className="w-[600px] h-[50px] rounded-[10px] flex items-center justify-between px-[20px] bg-gray-100">
              <h1>Сборка велосипеда индивидуальная</h1>
              <h2>5 000 - 12 000 ₽</h2>
            </div>
          </div>
        </div>
        <h1 className="embed text-[30px] font-[700] py-[50px]">
          СТОИМОСТЬ ОСНОВНЫХ УСЛУГ
        </h1>
        <div className="flex items-start gap-[20px] flex-col">
          <div className="w-[1200px] h-[50px] bg-gray-100 rounded-[10px] flex items-center justify-between px-[20px] ">
            <h1>Ремонт привода</h1>
            <a className="">
              <IoChevronDown />
            </a>
          </div>
          <div className="w-[1200px] h-[50px] bg-gray-100 rounded-[10px] flex items-center justify-between px-[20px] ">
            <h1>Рулевое управление</h1>
            <a className="">
              <IoChevronDown />
            </a>
          </div>
          <div className="w-[1200px] h-[50px] bg-gray-100 rounded-[10px] flex items-center justify-between px-[20px] ">
            <h1>Колеса</h1>
            <a className="">
              <IoChevronDown />
            </a>
          </div>
          <div className="w-[1200px] h-[50px] bg-gray-100 rounded-[10px] flex items-center justify-between px-[20px] ">
            <h1>Рама</h1>
            <a className="">
              <IoChevronDown />
            </a>
          </div>
          <div className="w-[1200px] h-[50px] bg-gray-100 rounded-[10px] flex items-center justify-between px-[20px] ">
            <h1>Дополнительное оборудование (аксессуары)</h1>
            <a className="">
              <IoChevronDown />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VeloMaster;
