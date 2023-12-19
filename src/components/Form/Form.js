import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
    <h1 className="title">Todos</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          props.putTodo(value);
          setValue("");
        }}
      >
        <div className="input">
          <button
            type="button"
            onClick={() => {
              props.allSelected();
            }}
            className={props.zeroTodo === 0 ? "hide" : "inputbtn"}
          >
            <img src="./select.png"></img>
          </button>
          <input
            type="text"
            placeholder="add yours txt..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="inputbtn">
            <img src="./add.png"></img>
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
