import Name from "./Components/Name";
import Title from "./Components/Title";
import Links from "./Components/Links";
import Brands from "./Components/Brands";
import Logo from "./assets/Logo.png";
import White_bg from "./assets/White-bg.png";
import Black_bg from "./assets/Black-bg.png";

import { useState, useEffect } from "react";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark" | undefined>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const Color_of_Bg = mode == "dark" ? Black_bg : White_bg;
  useEffect(() => {
    const modeMe = (e: any) => {
      setMode(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeListener(modeMe);
  }, []);
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <div className="w-screen h-screen">
        <Name
          h1="font-Kaisei text-black text-4xl text-black dark:text-white"
          div="fixed z-40 left-20 top-6 "
        />
        <Title
          div=" fixed left-32 top-16 z-40 "
          h2="font-Kaisei text-2xl text-black  dark:text-white"
        />
        <div className="w-72  absolute left-32 p-0 m-0 top-72">
          <p className="font-Kaisei text-2xl text-black dark:text-white">
            Looking for someone who knows what they are doing? Found the right
            one. Hire me, Please!!
          </p>
        </div>
        <Links
          div="fixed right-64 top-12 z-40"
          links="m-3 px-4 py-1 font-Kaisei text-1xl text-slate-700 
          dark:text-slate-100"
        />
        <img src={Color_of_Bg} className=" absolute right-0 bottom-4" />
        <img
          className="w-20 h-24 fixed right-4 top-4 z-50"
          src={Logo}
          placeholder="logo"
        />
        <Brands
          div=" fixed left-10 bottom-10 flex flex-col z-40 "
          img="w-10 h-10 my-2"
        />
      </div>
      <div
        id="Projects"
        className="bottom-0 relative w-screen h-screen
          dark:bg-black"
      >
        <div className="flex justify-center items-center h-screen flex-col">
          <div className="w-screen">
            <h3 className="text-black pl-16 dark:text-white">Projects: </h3>
          </div>
          <div>
            <div className="w-screen h-72 bg-red-700 overflow-x-auto">
              <div className="w-72 h-72 bg-blue-500 mr-5 ml-5 relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
