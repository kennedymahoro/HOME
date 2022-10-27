import Name from "./Components/Name"
import Logo from "./assets/Logo.png"
const App = () => {
  return (
    <div className="bg-white dark:bg-black w-screen h-screen">
      <Name h1="font-robot text-black" div="bg-red-200"/>
      <img className="w-100 h-100" src={Logo} />
    </div>
  )
};

export default App;
