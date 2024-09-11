import React from "react";
import Footer from "../Footer";
//Img
import aboutbg from "../../assets/image/about.png";
import aboutbg2 from "../../assets/image/about2.png";
import aboutbg3 from "../../assets/image/about3.png";
import aboutbg4 from "../../assets/image/about4.png";
import aboutbg5 from "../../assets/image/about5.png";
//Icon
import { FaOdnoklassniki } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
//

const About = () => {
  return (
    <div className="pt-[80px]">
      <div
        className="text-white"
        style={{
          backgroundImage: `url(${aboutbg})`,
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
            /<h5 className="cursor-pointer text-orange-500">О нас</h5>
          </div>
          <h1 className="embed text-[40px] font-[600] my-[50px]">О НАС</h1>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center mt-[30px]">
          <h1 className="embed text-[60px]  font-[700]">
            <span className="text-orange-500">ВЕЛОСИПЕД</span> - ЭТО НЕ ПРОСТО{" "}
            <br /> СРЕДСТВО ПЕРЕДВИЖЕНИЕ
          </h1>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <div className="w-[300px] h-[300px] rounded-[20px] text-white flex items-start flex-col justify-center p-5 gap-[20px] bg-[#34312D]">
            <h1 className="text-[20px] font-[600]">Хранение</h1>
            <p className="w-[280px]">
              Любишь кататься — люби и велосипед в квартире на зиму парковать
              или сдавай к нам на хранение и обслуживание.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="w-[300px] h-[300px] rounded-[20px] text-white flex items-start flex-col justify-center p-5 gap-[20px] bg-[#34312D]">
            <h1 className="text-[20px] font-[600]">Веломастерская</h1>
            <p className="w-[280px]">
              Если вы купили велосипед в нашем магазине, то то можете не
              волноваться о настройке и проверке, так как мы это выполняем в
              рамках предпродажной подготовки.
            </p>
            <button>Подробнее</button>
          </div>
          <div className="w-[300px] h-[300px] rounded-[20px] text-white flex items-start flex-col justify-center p-5 gap-[20px] bg-[#34312D]">
            <h1 className="text-[20px] font-[600]">Гарантия</h1>
            <p className="w-[280px]">
              Также, для удобства покупателей, наш магазин помогает (участвует)
              в формирование гарантийных запросов по всем нижеперечисленным
              брендам. При любом гарантийном случае можно обращаться напрямую
              к нам
            </p>
            <button>Подробнее</button>
          </div>
        </div>
        <div className="flex items-center mt-[50px]">
          <div className="w-[50%] h-[500px] text-white bg-black flex items-start flex-col justify-center pl-[150px] gap-[30px]">
            <h1 className="text-[30px] font-[700] ">
              НАСКОЛЬКО СЛОВ О НАС <br /> И НАШЕМ ДЕЛЕ
            </h1>
            <div className="">
              <p className="w-[500px]">
                Велосипед — это не просто средство передвижения. Мы, команда
                World-Bike, уверены в этом. Для нас велосипед — это целая жизнь,
                полная свободы, драйва, приключений и новых открытий.{" "}
              </p>
              <p className="w-[500px]">
                Мы искренне любим своё дело и стараемся,
                чтобы и для вас велосипед стал неотъемлемой частью жизни.
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[50px] h-[50px] rounded-[50px] bg-gray-800 flex items-center justify-center">
                <a className="text-[20px]">
                  <FaOdnoklassniki />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-[50px] bg-gray-800 flex items-center justify-center">
                <a className="text-[20px]">
                  <FaVk />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-[50px] bg-gray-800 flex items-center justify-center">
                <a className="text-[20px]">
                  <BiLogoTelegram />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-[50px] bg-gray-800 flex items-center justify-center">
                <a className="text-[20px]">
                  <IoLogoWhatsapp />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-[50px] bg-gray-800 flex items-center justify-center">
                <a className="text-[20px]">
                  <FaPhoneVolume />
                </a>
              </div>
            </div>
          </div>
          <img src={aboutbg2} alt="" className="w-[50%]" />
        </div>
        <div className="mt-[50px]">
          <div className="flex items-start justify-center flex-col pl-[200px] gap-[30px] mb-[30px]">
            <h1 className="text-[30px] font-[700]">
              МЫ СОБРАЛИ ДЛЯ ВАС ЛУЧШЕЕ <br /> ИЗ ВЕЛОСИПЕДНОГО МИРА
            </h1>
            <div className="flex items-center gap-[20px]">
              <p className="w-[400px] ">
                World-Bike специализируется на продаже и обслуживании
                велосипедов, запчастей, аксессуаров для них и экипировки
              </p>
              <p className="w-[700px] ">
                Мы знаем цену качеству. Поэтому в World-Bike только качественные
                премиальные товары по соответствующим ценам. А под заказ
                мы соберём для вас кастомный велосипед с уникальным дизайном
                и техническими характеристиками!
              </p>
            </div>
          </div>
          <img src={aboutbg3} alt="" />
        </div>
        <div className="flex items-start flex-col gap-[30px] mt-[50px] ml-[200px]">
          <h1 className="text-[20px] font-[700]">
            Мы — официальные дилеры лучших брендов:
          </h1>
          <div className="flex items-center gap-[50px]">
            <div className="w-[550px] h-[100px] bg-[#2E2E2E] text-white rounded-[5px] flex items-start p-8 justify-center flex-col">
              <h1>Велосипеды</h1>
              <h6 className="w-[480px]">
                BMC Cervelo Cipollini Colnago Early Rider Giant Look Orbea
                Pinarello Scott Wilier Officine Mattio
              </h6>
            </div>
            <div className="w-[550px] h-[100px] bg-[#2E2E2E] text-white rounded-[5px] flex items-start p-8 justify-center flex-col">
              <h1>Аксессуары</h1>
              <h6 className="w-[480px]">
                BMC Cervelo Cipollini Colnago Early Rider Giant Look Orbea
                Pinarello Scott Wilier Officine Mattio
              </h6>
            </div>
          </div>
        </div>
        <div className="flex items-center text-white mt-[100px]">
          <div className="w-[50%] h-[265px] bg-[#F57520] pl-[200px] flex items-start flex-col justify-center">
            <h1 className="text-[30px] font-[700] ">ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <h6>Позвоните нам по номеру</h6>
            <h1 className="text-[30px] font-[700] ">+996 (995) 25-55-92</h1>
            <p className="w-[500px]">
              Мы к вашим услугам! И, конечно же, приходите в наш магазин,
              чтобы посмотреть товары вживую, лично оценить качество и сделать
              правильный выбор!
            </p>
          </div>
          <img src={aboutbg4} alt="" className="w-[50%]" />
        </div>
        <div className="flex items-start flex-col pl-[200px] gap-[50px] mt-[100px]">
          <h1 className="text-[30px] font-[700] ">
            WORLD-BIKE - ЭТО В ПЕРВУЮ ОЧЕРЕДЬ КОМАНДА
          </h1>
          <div className="flex items-start gap-[30px]">
            <div className="flex items-start flex-col gap-[50px] ">
              <p className="w-[500px]">
                Все наши сотрудники — это бывшие профессиональные велосипедисты,
                чемпионы и призёры соревнований Европы и России, участники
                отечественной сборной. Не сомневайтесь, если кто-то и способен
                предоставить вам по-настоящему профессиональную консультацию,
                то это они.
              </p>
              <div className="flex items-start flex-col gap-[15px]">
                <h1 className="text-[20px] font-[600]">
                  Консультанты World-Bike помогут вам в любом вопросе:
                </h1>
                <h6>
                  - подбор велосипеда под ваш рост, вес, стиль езды и цели
                  покупки байка;
                </h6>
                <h6>- помощь в выборе запчастей, аксессуаров и экипировки;</h6>
                <h6>
                  - консультации по любой теме, касающейся спортивной тематики.
                </h6>
              </div>
            </div>
            <img src={aboutbg5} alt="" className="w-[40%]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
