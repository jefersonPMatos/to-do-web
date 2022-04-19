import "./input.css";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
      ></input>
    </>
  );
};

export default Input;
