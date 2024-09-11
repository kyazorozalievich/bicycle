import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import BicycleCard from "../BicycleCard";
import Footer from "../Footer";
//Img
import favorite from "../../assets/image/favorite.png";
//

const Favorite = () => {
  const naviagte = useNavigate();
  const { user } = useAuth();
  const { bicyclefavorite } = useSelector((s) => s.favorite);

  return (
    <>
      <div className="pt-[100px]">
        {!user ? (
          <div className="w-[100%] h-[80vh]">
            <h1>Авторизуйте аккаунт</h1>
          </div>
        ) : bicyclefavorite.length === 0 ? (
          <div className="flex items-center flex-col justify-center w-[100%] h-[650px]">
            <img
              src={favorite}
              alt=""
              className="w-[300px] cursor-pointer"
              onClick={() => naviagte("/")}
            />
            <h1 className="text-[30px] font-[700] text-center">
              Избранное пусто
            </h1>
          </div>
        ) : (
          <div className="container w-[90%]">
            <div className="mt-[50px] flex items-center flex-wrap gap-[50px]">
              {bicyclefavorite.map((el) => (
                <BicycleCard el={el} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favorite;
