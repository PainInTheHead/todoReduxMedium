import './Todos.css'

const Todos = (props) => {
    return ( <ul className="todos">
    {props.filteredTodos.map((todo) => {
      return (
        <li
          onClick={() => props.toggleTodo(todo.id)}
          className={todo.done ? "todo done" : "todo"}
          key={todo.id}
        >
          {todo.text}
          <img
            src="./deletebut.png"
            alt="delete"
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              props.deleteTodo(todo.id);
            }}
          ></img>
        </li>
      );
    })}
  </ul> );
}
 
export default Todos;