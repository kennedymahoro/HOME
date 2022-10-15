import Logo from "./Assets/Logo.png";
import Button from "./Components/Button.jsx";
//import schoolOfAthens from "./Assets/school-of-athens.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <div className="bg-img"></div>
        <div className="bg-dim"></div>
        <div className="Name">
          <h1 className="myName">Kennedy Mahoro</h1>
          <h3 className="myTitle">A Frontend Developer.</h3>
        </div>
        <img className="logo-img" src={Logo} />
        <div className="buttons">
          <Button name="Resume" color="yellow" />
          <Button name="Contact" color="purple" />
          <Button name="About" color="yellow" />
          <Button name="Projects" color="purple" />
        </div>
        <div className="box1"></div>
        <div className="box2"></div>
      </main>
    </div>
  );
}

export default App;
