import "./App.css";
import "./media.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Bicycles from "./components/HomeCategory/Bicycles";
import SpareParts from "./components/HomeCategory/SpareParts";
import Accessories from "./components/HomeCategory/Accessories";
import Create from "./components/AddToCreate/Create";
import CreateSpareParts from "./components/AddToCreate/CreateSpareParts";
import CreateAccessories from "./components/AddToCreate/CreateAccessories";
import AddToCreate from "./components/AddToCreate";
import BicycleCard from "./components/BicycleCard";
import Details from "./components/Details";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import DelAccessorioes from "./components/DelProduct/DelAccessories";
import DelSpareParts from "./components/DelProduct/DelSpareParts";
import DelProduct from "./components/DelProduct";
import DelBicycle from "./components/DelProduct/DelBicycle";
import Search from "./components/Search";
import Order from "./components/Order";
import Contact from "./components/Contact";
import VeloMaster from "./components/VeloMaster";
import SignIn from "./components/SignIn";
import About from "./components/About";
import UserInfo from "./components/UserInfo";
import Register from "./components/Register";

function App() {
  let routes = [
    {
      id: 1,
      link: "/",
      component: <Home />,
    },
    {
      id: 2,
      link: "/create",
      component: <Create />,
    },
    {
      id: 3,
      link: "*",
      component: <Error />,
    },
    {
      id: 4,
      link: "/bicycles",
      component: <Bicycles />,
    },
    {
      id: 5,
      link: "/spareparts",
      component: <SpareParts />,
    },
    {
      id: 7,
      link: "/createspareparts",
      component: <CreateSpareParts />,
    },
    {
      id: 8,
      link: "/accessories",
      component: <Accessories />,
    },
    {
      id: 9,
      link: "/createaccessories",
      component: <CreateAccessories />,
    },

    {
      id: 10,
      link: "/addtocreate",
      component: <AddToCreate />,
    },
    {
      id: 11,
      link: "/bicyclecard",
      component: <BicycleCard />,
    },
    {
      id: 12,
      link: "/details/:id",
      component: <Details />,
    },
    {
      id: 13,
      link: "/basket",
      component: <Basket />,
    },
    {
      id: 14,
      link: "/favorite",
      component: <Favorite />,
    },
    {
      id: 15,
      link: "/delbicycle",
      component: <DelBicycle />,
    },
    {
      id: 16,
      link: "/delacces",
      component: <DelAccessorioes />,
    },
    {
      id: 17,
      link: "/delspareparts",
      component: <DelSpareParts />,
    },
    {
      id: 18,
      link: "/delproduct",
      component: <DelProduct />,
    },
    {
      id: 19,
      link: "/search/:name",
      component: <Search />,
    },
    {
      id: 20,
      link: "/order",
      component: <Order />,
    },
    {
      id: 21,
      link: "/contact",
      component: <Contact />,
    },
    {
      id: 22,
      link: "/velomaster",
      component: <VeloMaster />,
    },
    {
      id: 23,
      link: "/signin",
      component: <SignIn />,
    },
    {
      id: 24,
      link: "/about",
      component: <About />,
    },
    {
      id: 25,
      link: "/userinfo",
      component: <UserInfo />,
    },
    {
      id: 26,
      link: "/register",
      component: <Register />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.link} element={el.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
