import Logo from "./Assets/Logo.png";
//import schoolOfAthens from "./Assets/school-of-athens.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <div className="bg-img"></div>
        <div className="Name">
          <h1>Kennedy Mahoro</h1>
          <h3>A Frontend Developer.</h3>
        </div>
        <img className="logo-img" src={Logo} class="logo" />
      </main>
    </div>
  );
}

export default App;
