import "./title.css"

const Title = (props) => {
  return (
    <div>
      <h1 className="title">{props.text}</h1>
    </div>
  );
};

export default Title;
