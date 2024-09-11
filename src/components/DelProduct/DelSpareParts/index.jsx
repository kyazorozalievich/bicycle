import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpareparts } from "../../../redux/creates/sliceSpareParts";

const DelSpareParts = () => {
  const dispatch = useDispatch();
  const { spareparts } = useSelector((s) => s.spareparts);

  //function
  async function getSpareParts() {
    try {
      let { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle`
      );
      dispatch(getSpareparts(data));
    } catch (error) {
      alert(error.message);
    }
  }
  async function delSpareParts(_id) {
    try {
      await axios.delete(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle/${_id}`
      );
    } catch (error) {
      alert(error.message);
    }
    getSpareParts();
  }
  //

  useEffect(() => {
    getSpareParts();
  }, []);

  return (
    <div className="pt-[100px]">
      <div className="container w-[90%]">
        <h1 className="embed text-[30px] font-[600]">УДАЛЕНИЕ ЗАПЧАСТЕЙ</h1>
        <div className="flex items-center flex-wrap gap-[40px] mt-[50px]">
          {spareparts.map((el) =>
            el.type === "spareparts" ? (
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
                    onClick={() => delSpareParts(el._id)}
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

export default DelSpareParts;
