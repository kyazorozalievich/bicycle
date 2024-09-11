import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccess } from "../../../redux/creates/sliceAccessories";

const DelAccessorioes = () => {
  const dispatch = useDispatch();
  const { accessories } = useSelector((s) => s.access);

  //function
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
  async function delAccessories(_id) {
    try {
      await axios.delete(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle/${_id}`
      );
    } catch (error) {
      alert(error.message);
    }
    getAccessories();
  }
  //

  useEffect(() => {
    getAccessories();
  }, []);

  return (
    <div className="pt-[100px]">
      <div className="container w-[90%]">
        <h1 className="embed text-[30px] font-[600]">УДАЛЕНИЕ АКСЕССУАРОВ</h1>
        <div className="flex items-center flex-wrap gap-[40px] mt-[50px]">
          {accessories.map((el) =>
            el.type === "accessories" ? (
              <div className="w-[300px] h-[400px] shadow-xl">
                <div className="w-[100%] h-[250px] flex items-center justify-center">
                  <img src={el.img} alt="" className="w-[90%]" />
                </div>
                <div className="flex items-center flex-col gap-[15px]">
                  <h1 className="text-[20px] font-[600]">{el.name}</h1>
                  <div className="flex items-center gap-[30px]">
                    <div className="flex items-start flex-col">
                      <h1>Бренд:{el.brend}</h1>
                      <h1>Цена:{el.price}</h1>
                    </div>
                    <div className="flex items-start flex-col">
                      <h1>Материал:{el.material}</h1>
                      <h1>Гарантия:{el.garant}</h1>
                    </div>
                  </div>
                  <button
                    className="w-[150px] h-[30px] text-[15px] font-[600] bg-red-600 text-white rounded-[10px]"
                    onClick={() => delAccessories(el._id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default DelAccessorioes;
