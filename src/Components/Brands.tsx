import github_Logo from "../assets/Logos/black-github-logo.svg";
import github_Logo_Drk from "../assets/Logos/white-github-logo.png";
import Mail_Logo from "../assets/Logos/black-gmail-logo.svg";
import Mail_Logo_Drk from "../assets/Logos/white-gmail-logo.png";
import LinkedIn_Logo from "../assets/Logos/black-linkedin-logo.svg";
import LinkedIn_Logo_Drk from "../assets/Logos/white-linkedin-logo.png";
import { useState, useEffect } from "react";

const Brands = (props: { div: string; img: string }) => {
  const [mode, setMode] = useState<"light" | "dark" | undefined>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const Color_of_GH = mode == "dark" ? github_Logo_Drk : github_Logo;
  const Color_of_ML = mode == "dark" ? Mail_Logo_Drk : Mail_Logo;
  const Color_of_LI = mode == "dark" ? LinkedIn_Logo_Drk : LinkedIn_Logo;
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
    <div className={props.div}>
      <a href="https://github.com/kennedymahoro" target={"_blank"}>
        <img className={props.img} src={Color_of_GH} />
      </a>
      <a href="mailto:kennedymahoro1@gmail.com" target={"_blank"}>
        <img className={props.img} src={Color_of_ML} />
      </a>
      <a href="https://linkedin.com" target={"_blank"}>
        <img className={props.img} src={Color_of_LI} />
      </a>
    </div>
  );
};
export default Brands;
