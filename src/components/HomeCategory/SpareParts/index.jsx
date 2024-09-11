import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpareparts } from "../../../redux/creates/sliceSpareParts";
import Footer from "../../Footer";
import BicycleCard from "../../BicycleCard";
//Img
import bicyclebg from "../../../assets/image/bicyclebg.png";
//

const SpareParts = () => {
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
  //

  useEffect(() => {
    getSpareParts();
  }, []);
  
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
            /<h5 className="cursor-pointer text-orange-500">Запчасти</h5>
          </div>
          <h1 className="embed text-[40px] font-[700] tracking-[3px]">
            ЗАПЧАСТИ
          </h1>
        </div>
      </div>
      <div className="pt-[100px]">
        <div className="container w-[90%]">
          <div className="flex items-center flex-wrap gap-[40px]">
            {spareparts.map((el) =>
              el.type === "spareparts"
                ? spareparts.map((el) =>
                    el.type === "spareparts" ? <BicycleCard el={el} /> : null
                  )
                : null
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpareParts;
