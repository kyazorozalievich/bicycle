import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSpareparts } from "../../../redux/creates/sliceSpareParts";
//Icon
import { FiArrowLeftCircle } from "react-icons/fi";
//

const CreateSpareParts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //UseState
  const [inpName, setInpName] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [inpUrl, setInpUrl] = useState("");
  const [inpDescription, setInpDescription] = useState("");
  const [inpGarant, setInpGarant] = useState("");
  const [inpMaterial, setInpMaterial] = useState("");
  const [inpBrend, setInputBrend] = useState("");

  //function
  function postAccessories() {
    let newProduct = {
      type: "spareparts",
      img: inpUrl,
      name: inpName,
      price: inpPrice,
      description: inpDescription,
      brend: inpBrend,
      material: inpMaterial,
      garant: inpGarant,
      count: 1,
      number: Date.now(),
      date: new Date().toDateString(),
      rating: Math.round(Math.random() * 5),
    };
    axios.post(
      `https://api.elchocrud.pro/api/v1/630e7444122aee5de8df9fd74f5db7b5/bicycle`,
      newProduct
    );
    getSpareParts();
  }

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
    <div className="pt-[100px]">
      <div className="container w-[90%] relative">
        <a
          className="text-[60px] absolute top-[50px] left-[50px]"
          onClick={() => navigate("/addtocreate")}
        >
          <FiArrowLeftCircle />
        </a>
        <div className="flex items-center flex-col gap-[20px]">
          <div className="flex items-center justify-center gap-[20px]  mt-[100px]">
            <div className="flex items-start flex-col gap-[20px]">
              <input
                type="text"
                placeholder="Название..."
                className="w-[300px] h-[40px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInpName(e.target.value)}
                value={inpName}
              />
              <input
                type="text"
                placeholder="Цена..."
                className="w-[300px] h-[40px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInpPrice(e.target.value)}
                value={inpPrice}
              />

              <textarea
                name=""
                id=""
                placeholder="Описание..."
                className="w-[300px] h-[100px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInpDescription(e.target.value)}
                value={inpDescription}
              ></textarea>
            </div>
            <div className="flex items-start flex-col gap-[20px]">
              <input
                type="text"
                placeholder="Фотография..."
                className="w-[300px] h-[40px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInpUrl(e.target.value)}
                value={inpUrl}
              />
              <input
                type="text"
                placeholder="Гарантия..."
                className="w-[300px] h-[40px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInpGarant(e.target.value)}
                value={inpGarant}
              />
              <select
                className="w-[300px] h-[40px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInputBrend(e.target.value)}
                value={inpBrend}
              >
                <option value="">Бренды</option>
                <option value="bianci">Bianci</option>
                <option value="bmc">BMC</option>
                <option value="colnago">Colnago</option>
                <option value="cilcistino">Cilcistino</option>
              </select>
              <select
                className="w-[300px] h-[40px] border-2 border-solid border-black rounded-[10px] pl-[10px]"
                onChange={(e) => setInpMaterial(e.target.value)}
                value={inpMaterial}
              >
                <option value="">Материалы</option>
                <option value="alymini">Алюминий</option>
                <option value="karbon">Карбон</option>
                <option value="stal">Сталь</option>
              </select>
            </div>
          </div>

          <button
            className="w-[300px] h-[40px] bg-orange-500 rounded-[10px] text-white font-[700] text-[20px]"
            onClick={() => postAccessories()}
          >
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSpareParts;
