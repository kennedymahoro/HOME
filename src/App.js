"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logo_png_1 = __importDefault(require("./Assets/Logo.png"));
const Button_jsx_1 = __importDefault(require("./Components/Button.jsx"));
//import schoolOfAthens from "./Assets/school-of-athens.jpg";
require("./App.css");
function App() {
    return (<div className="App">
      <main>
        <div className="bg-img"></div>
        <div className="bg-dim"></div>
        <div className="Name">
          <h1 className="myName">Kennedy Mahoro</h1>
          <h3 className="myTitle">A Frontend Developer.</h3>
        </div>
        <img className="logo-img" src={Logo_png_1.default}/>
        <div className="buttons">
          <Button_jsx_1.default name="Resume" color="yellow"/>
          <Button_jsx_1.default name="Contact" color="purple"/>
          <Button_jsx_1.default name="About" color="yellow"/>
          <Button_jsx_1.default name="Projects" color="purple"/>
        </div>
        <div className="box1"></div>
        <div className="box2"></div>
      </main>
    </div>);
}
exports.default = App;
