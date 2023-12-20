import "./Total.css";

const Total = (props) => {
  return (
    <div className="total">
      <span>{props.allTodos} item left</span>
      <span>Complete Todos: {props.completeTodos}</span>
    </div>
  );
};

export default Total;
