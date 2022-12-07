import github_Logo from "../assets/Logos/black-github-logo.svg";
import Mail_Logo from "../assets/Logos/black-gmail-logo.svg";
import LinkedIn_Logo from "../assets/Logos/black-linkedin-logo.svg";

const Brands = (props: { div: string; img: string }) => {
  return (
    <div className={props.div}>
      <a href="https://github.com/kennedymahoro" target={"_blank"}>
        <img className={props.img} src={github_Logo} />
      </a>
      <a href="mailto:kennedymahoro1@gmail.com" target={"_blank"}>
        <img className={props.img} src={Mail_Logo} />
      </a>
      <a href="https://linkedin.com" target={"_blank"}>
        <img className={props.img} src={LinkedIn_Logo} />
      </a>
    </div>
  );
};
export default Brands;
