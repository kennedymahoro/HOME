import "./Button.css";
const Button = (props) => {
  let bg = props.color == "yellow" ? "bg-yellow-300" : "bg-blue-500";
  return <button className={bg}>{props.name}</button>;
};
export default Button;
