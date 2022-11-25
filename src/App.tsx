import Name from "./Components/Name";
import Title from "./Components/Title";
import Links from "./Components/Links";
import Logo from "./assets/Logo.png";
const App = () => {
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Name
        h1="font-robot text-black text-8xl text-black dark:text-white"
        div="inline-block absolute z-40 left-64 top-24 "
      />
      <Title
        div=" absolute right-64 bottom-44"
        h2="text-5xl text-black  dark:text-white"
      />
      <Links div="" />

      <img
        className="w-20 h-24 absolute right-4 top-4 z-50"
        src={Logo}
        placeholder="logo"
      />
      <div className="w-30 h-full flex space-x-4 top-0 left-24 z-30 fixed">
        <div className="bg-yellow-400 w-10 h-full z-0 "></div>
        <div className="bg-blue-500 w-10 h-full z-0  "></div>
      </div>
    </div>
  );
};

export default App;
