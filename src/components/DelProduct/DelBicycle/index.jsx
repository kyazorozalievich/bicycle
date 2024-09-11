import axios from "axios";
import React, { useEffect } from "react";
import { getProducts } from "../../../redux/reducers/sliceProduct";
import { useDispatch, useSelector } from "react-redux";
import { delBicycleBasket } from "../../../redux/reducers/sliceBasket";
import { delFavorite } from "../../../redux/reducers/sliceFavorite";
import { deleteOrder } from "../../../redux/reducers/sliceOrder";
//Img
import america from "../../../assets/image/america.png";
import france from "../../../assets/image/france.png";
import ispany from "../../../assets/image/ispany.png";
import italy from "../../../assets/image/italy.webp";
import shvecaria from "../../../assets/image/shvecaria.jpg";
//

const DelBicycle = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.data);

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
  async function delBicycle(_id) {
    try {
      await axios.delete(
        `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle/${_id}`
      );
    } catch (error) {
      alert(error.message);
    }
    getBicycle();
  }
  //

  useEffect(() => {
    getBicycle();
  }, []);

  return (
    <div className="pt-[100px]">
      <div className="container w-[90%]">
        <div className="">
          <h2 className="embed text-[30px] font-[600]">УДАЛЕНИЕ ВЕЛОСИПЕДОВ</h2>
          <div className="flex items-center flex-wrap gap-[30px] mt-[50px]">
            {product.map((el, index) =>
              el.type === "bicycle" ? (
                <div
                  key={index}
                  className="w-[300px] h-[400px] p-2 flex items-center justify-center flex-col gap-[10px] rounded-[10px] relative bg-gray-100"
                >
                  <div className="">
                    <img
                      src={el.country === "america" ? america : null}
                      alt=""
                      className="w-[80px] absolute top-[5px] left-[5px] rounded-[10px] "
                    />
                    <img
                      src={el.country === "france" ? france : null}
                      alt=""
                      className="w-[70px] absolute top-[-10px] left-[5px] rounded-[30px] "
                    />
                    <img
                      src={el.country === "italy" ? italy : null}
                      alt=""
                      className="w-[70px] absolute top-[5px] left-[5px] "
                    />
                    <img
                      src={el.country === "shvecia" ? shvecaria : null}
                      alt=""
                      className="w-[70px] absolute top-[-10px] left-[5px] rounded-[30px] "
                    />
                    <img
                      src={el.country === "ispania" ? ispany : null}
                      alt=""
                      className="w-[70px] absolute top-[5px] left-[5px] rounded-[5px] "
                    />
                  </div>
                  <img src={el.img} alt="" className="w-[80%]" />
                  <div className="flex items-center flex-col gap-[20px]">
                    <h3 className="font-[600]">{el.name}</h3>
                    <div className="flex items-center gap-[20px]">
                      <div className="flex items-start flex-col gap-[5px]">
                        <h1>Бренд: {el.brend}</h1>
                        <h1>Цена: {el.price}</h1>
                        <h1>Цвет: {el.color}</h1>
                      </div>
                      <div className="flex items-start flex-col gap-[5px]">
                        <h1>Год: {el.year}</h1>
                        <h1>
                          Размеры: {el.s}, {el.m}, {el.l}, {el.xl}
                        </h1>
                        <h1>Материал: {el.material}</h1>
                      </div>
                    </div>

                    <button
                      className="w-[200px] h-[40px] bg-red-600 rounded-[10px] text-white text-[17px] font-[600]"
                      onClick={() => {
                        delBicycle(el._id),
                          dispatch(delBicycleBasket(el._id)),
                          dispatch(delFavorite(el._id)),
                          dispatch(deleteOrder(el._id));
                      }}
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
    </div>
  );
};

export default DelBicycle;
