import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
//Img
import contactbg from "../../assets/image/contactbg.png";
import contactbg2 from "../../assets/image/contactbg2.png";
import carta from "../../assets/image/carta.png";
//

const Contact = () => {
  const navigate = useNavigate();

  //function
  function CartaKyrenkeeva() {
    window.open(
      "https://2gis.kg/bishkek/geo/15763234350986242/74.613696%2C42.889803?m=74.617025%2C42.88621%2F15.39"
    );
  }
  //

  return (
    <div className="pt-[80px]">
      <div
        className="text-white"
        style={{
          backgroundImage: `url(${contactbg})`,
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
            /<h5 className="cursor-pointer text-orange-500">Контакты</h5>
          </div>
          <h1 className="embed text-[40px] font-[600] my-[50px]">КОНТАКТЫ</h1>
        </div>
      </div>
      <img
        src={carta}
        alt=""
        className="w-[100%] cursor-pointer"
        onClick={() => CartaKyrenkeeva()}
      />
      <div className="flex items-start pt-[50px] gap-[150px] justify-center">
        <div className="flex items-start flex-col gap-[20px]">
          <div className="flex items-start flex-col gap-[10px]">
            <h1 className="text-[20px] font-[600]">Адрес магазина:</h1>
            <h3>Кыргызстан,Бишкек,ул.Куренкеева,дом.138</h3>
          </div>
          <div className="flex items-start flex-col gap-[10px]">
            <h1 className="text-[20px] font-[600]">График работы:</h1>
            <h3>
              Понедельник — Воскресение с 10:00 до 20:00 часа <br /> БЕЗ
              ВЫХОДНЫХ
            </h3>
          </div>
          <div className="flex items-start flex-col gap-[10px]">
            <h1 className="text-[20px] font-[600]">Телефоны:</h1>
            <h3>+996 (995) 25-55-92</h3>
          </div>
          <div className="flex items-start flex-col gap-[10px]">
            <h1 className="text-[20px] font-[600]">E-mail:</h1>
            <h3>order@world-bike.ru — заказы</h3>
            <h3>nfo@world-bike.ru — информация</h3>
            <h3>opt@world-bike.ru — опт</h3>
          </div>
        </div>
        <div className="flex items-start flex-col gap-[20px]">
          <h1 className="text-[20px] font-[600]">Юридическая информация:</h1>
          <div className="flex items-center gap-[40px]">
            <div className="text-[17px] text-gray-500 flex items-start flex-col gap-[10px]">
              <h1>Наименование: </h1>
              <h1>ИНН: </h1>
              <h1>ОГРН: </h1>
              <h1>Фактический адрес: </h1>
              <h1>Юридический адрес: </h1>
              <h1>Расчетный счет: </h1>
              <h1>Банк: </h1>
              <h1>Корр.счет: </h1>
              <h1>БИК: </h1>
            </div>
            <div className="text-[17px] flex items-end flex-col gap-[10px]">
              <h1>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</h1>
              <h1>402573939444</h1>
              <h1>317402700004683</h1>
              <h1>Кыргызстан,Бишкек,ул.Куренкеева,дом.138</h1>
              <h1>Кыргызстан,Бишкек,ул.Куренкеева,дом.138</h1>
              <h1>40802810800000085888</h1>
              <h1>АО «БАКАЙ БАНК»</h1>
              <h1>30101810145250000974 </h1>
              <h1>044525974</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-quetion w-[100%] bg-[#F57520] flex justify-between mt-[50px]">
        <div className="flex items-start flex-col gap-[20px] justify-center pl-[100px]">
          <h1 className="text-[30px] font-[700] text-white">
            СВЯЖИТЕСЬ С НАМИ <br /> ПО ЛЮБЫМ ВОПРОСАМ
          </h1>
          <div className="flex items-center flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <input
                type="text"
                placeholder="Имя"
                className="w-[300px] h-[40px] pl-[10px] rounded-[10px]"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="w-[300px] h-[40px] pl-[10px] rounded-[10px]"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="number"
                placeholder="Телефон"
                className="w-[300px] h-[40px] pl-[10px] rounded-[10px]"
              />
              <input
                type="text"
                placeholder="Компания"
                className="w-[300px] h-[40px] pl-[10px] rounded-[10px]"
              />
            </div>
            <textarea
              placeholder="Сообщение"
              className="w-[610px] h-[140px] pl-[10px] rounded-[10px]"
            ></textarea>
            <button className="w-[610px] h-[40px] font-[600] text-[20px] bg-white text-orange-500 rounded-[10px]">
              Задать вопрос
            </button>
          </div>
        </div>
        <img
          src={contactbg2}
          alt=""
          className="contact-quetion-img h-[60vh] w-[50%]"
        />
      </div>
      <div className="container w-[70%] flex items-start justify-center flex-col gap-[30px] mt-[50px]">
        <h1 className="text-[30px] font-[700]">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        <div className="flex items-start gap-[10px] flex-col">
          <h1 className="w-[900px] h-[50px] rounded-[10px] font-[600] bg-gray-100 pl-[20px] flex items-center justify-start">
            Получу ли я тот же товар, что и на картинке?
          </h1>
          <h1 className="w-[900px] h-[50px] rounded-[10px] font-[600] bg-gray-100 pl-[20px] flex items-center justify-start">
            Где я могу посмотреть чек о продаже?
          </h1>
          <h1 className="w-[900px] h-[50px] rounded-[10px] font-[600] bg-gray-100 pl-[20px] flex items-center justify-start">
            Как я могу вернуть товар?
          </h1>
          <h1 className="w-[900px] h-[50px] rounded-[10px] font-[600] bg-gray-100 pl-[20px] flex items-center justify-start">
            Будете ли вы пополнять запасы товаров, помеченных как «нет в
            наличии»?
          </h1>
          <h1 className="w-[900px] h-[50px] rounded-[10px] font-[600] bg-gray-100 pl-[20px] flex items-center justify-start">
            С какими видами доставки вы работаете?
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
