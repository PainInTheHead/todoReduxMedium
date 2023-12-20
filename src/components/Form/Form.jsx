import "./Form.css";
import { useState } from "react";
import { putTodo, allSelected } from '../../store/todoSlice'
import { useDispatch } from "react-redux";

const Form = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()
  const addTsk = () => {
    dispatch(putTodo({value}))
    setValue("");
  }

  return (
    <>
    <h1 className="title">Todos</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addTsk(value)
        }}
      >
        <div className="input">
          <button
            type="button"
            onClick={() => {
              dispatch(allSelected());
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
