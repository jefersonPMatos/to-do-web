import "./button.css"

const Button = (props) => {
  return (
    <div>
      <button className="button">{props.text}</button>
    </div>
  );
};

export default Button;
