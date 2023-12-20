import "./Todos.css";
import { deleteTodo, toggleTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Todos = ({filteredTodos}) => {
  const dispatch = useDispatch();

  return (
    <ul className="todos">
      {filteredTodos.map((todo) => {
        return (
          <li
            onClick={() => dispatch(toggleTodo({ id: todo.id }))}
            className={todo.done ? "todo done" : "todo"}
            key={todo.id}
          >
            {todo.text}
            <img
              src="./deletebut.png"
              alt="delete"
              className="delete"
              onClick={() =>  dispatch(deleteTodo({ id: todo.id }))}
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
