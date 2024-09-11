import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/reducers/sliceSearch";
import BicycleCard from "../BicycleCard";

const Search = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { search } = useSelector((s) => s.search);
  const { product } = useSelector((s) => s.data);

  //function
  function ParamSearch() {
    let res = product.filter((el) => el.name || el.brend === name);
    dispatch(getSearch(res));
  }
  //

  useEffect(() => {
    ParamSearch();
  }, [product]);

  return (
    <div className="pt-[150px]">
      <div className="container w-[90%]">
        <div className="flex items-center flex-wrap gap-[40px]">
          {search.map((el) => (
            <BicycleCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
