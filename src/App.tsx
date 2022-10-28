import Name from "./Components/Name"
import Logo from "./assets/Logo.png"
const App = () => {
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Name h1="font-robot text-black text-8xl text-black dark:text-white" div="inline-block z-10"/>
      <img className="w-20 h-24 absolute right-0 top-0 z-50" src={Logo} placeholder="logo" />
      <div className="w-30 h-full absolute flex space-x-4 top-0 left-24">
        <div className="bg-yellow-500 w-10 h-full  "></div>
        <div className="bg-blue-500 w-10 h-full "></div>
      </div>
    </div>
  )
};

export default App;
