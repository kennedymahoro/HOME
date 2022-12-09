import Name from "./Components/Name";
import Title from "./Components/Title";
import Links from "./Components/Links";
import Brands from "./Components/Brands";
import Logo from "./assets/Logo.png";
import White_bg from "./assets/White-bg.jpg";
import Black_bg from "./assets/Black-bg.png";

import { useState } from "react";

const App = () => {
  const [Dark_Mode, setDark_Mode] = useState(true);
  const Color_of_Bg = Dark_Mode ? Black_bg : White_bg;

  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Name
        h1=" text-black text-4xl text-black dark:text-white"
        div="absolute z-40 left-20 top-6 "
      />
      <Title
        div=" absolute left-32 top-16 "
        h2="text-2xl text-black  dark:text-white"
      />
      <div className="w-72  absolute left-32 p-0 m-0 top-72">
        <p className="text-2xl text-black dark:text-white">
          Looking for someone who knows what they are doing? Found the right
          one. Hire me, Please!!
        </p>
      </div>
      <Links
        div="absolute right-64 top-12"
        links="m-3 px-4 py-1 text-1xl text-slate-700 dark:text-slate-100"
      />
      <img src={Color_of_Bg} className=" absolute right-0 bottom-4" />
      <img
        className="w-20 h-24 absolute right-4 top-4 z-50"
        src={Logo}
        placeholder="logo"
      />
      <Brands
        div=" fixed left-10 bottom-10 flex flex-col "
        img="w-10 h-10 my-2"
      />
    </div>
  );
};

export default App;
