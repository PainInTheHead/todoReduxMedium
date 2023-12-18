import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [completeTodos, setCompleteTodos] = useState(0);
  const [pageActive, setPageActive] = useState(false);
  const [pageComleted, setPageCompleted] = useState(false);
  const [select, setSelect] = useState(false)

  useEffect(() => {
    setCompleteTodos(todos.filter((todo) => todo.done === true).length);
    setAllTodos(todos.filter((todo) => todo.done === false).length);
  }, [todos]);

  const allSelected = () => {
    if (completeTodos === todos.length) {
      setTodos(todos.map(todo => {
        return {...todo, done : false}
      })) 
    } else {
      setTodos(todos.map(todo => {
        if (todo.done === false) {
          return {...todo, done : true}
        } else {
          return {...todo}
        }
      }))
    }
    
  }

  const openAll = () => {
    setPageActive(false);
    setPageCompleted(false);
  };

  const openActive = () => {
    if (completeTodos === 0) {
      return;
    } else {
      setPageCompleted(false);
      setPageActive(true);
    }
  };

  const openComplited = () => {
    
    setPageActive(false);
    setPageCompleted(true);
  };

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
      setAllTodos(todos.length + 1);
    } else {
      alert("add yours txt pls!");
    }
  };

  const clearHolder = () => {
    setAllTodos(0);
    setTodos([]);
  };

  const clearComleted = () => {
    const filterTodoList = todos.filter((todo) => todo.done === false);
    setTodos(filterTodoList);
    setAllTodos(filterTodoList.length);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setAllTodos(todos.length - 1);
  };

  let filteredTodos = pageActive
    ? todos.filter((todo) => todo.done === false)
    : pageComleted
    ? todos.filter((todo) => todo.done === true)
    : todos;
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Todos</h1>
        <Form putTodo={putTodo} allSelected={allSelected} zeroTodo={todos.length}/>
        <div className="total">
          <span>{allTodos} item left</span>
          <span>Complete Todos: {completeTodos}</span>
        </div>

        <ul className="todos">
          {filteredTodos.map((todo) => {
            return (
              <li
                onClick={() => toggleTodo(todo.id)}
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
                    deleteTodo(todo.id);
                  }}
                ></img>
              </li>
            );
          })}
        </ul>
        
        {todos.length !== 0 && (
          <div className="btn-wrapper">
          <button onClick={clearHolder} className="btn">
            Clear All
          </button>
          <button onClick={openAll} className="btn">
            All
          </button>
          <button onClick={openActive} className="btn">
            Active
          </button>
          <button onClick={openComplited} className="btn">
            Complited
          </button>
          <button onClick={clearComleted} className="btn">
            Clear complited
          </button>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
