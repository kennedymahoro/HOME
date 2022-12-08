import Name from "./Components/Name";
import Title from "./Components/Title";
import Links from "./Components/Links";
import Logo from "./assets/Logo.png";
import Brands from "./Components/Brands";
const App = () => {
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Name
        h1="font-robot text-black text-8xl text-black dark:text-white"
        div="inline-block absolute z-40 left-64 top-24 "
      />
      <Title
        div=" absolute right-72 bottom-44"
        h2="text-5xl text-black  dark:text-white"
      />
      <Links
        div="absolute right-60 bottom-24"
        links="m-3 px-4 py-1 text-4xl text-slate-700 dark:text-slate-200"
      />

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
