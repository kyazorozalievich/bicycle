import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccess } from "../../../redux/creates/sliceAccessories";
import Footer from "../../Footer";
import BicycleCard from "../../BicycleCard";
import bicyclebg from "../../../assets/image/bicyclebg.png";

const Accessories = () => {
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
  //

  useEffect(() => {
    getAccessories();
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
            /<h5 className="cursor-pointer text-orange-500">Аксессуары</h5>
          </div>
          <h1 className="embed text-[40px] font-[700] tracking-[3px]">
            АКСЕССУАРЫ
          </h1>
        </div>
      </div>
      <div className="pt-[100px]">
        <div className="container w-[90%]">
          <div className="w-[100%] flex items-center flex-wrap gap-[40px] ">
            {accessories.map((el) =>
              el.type === "accessories" ? <BicycleCard el={el} /> : null
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accessories;
