import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Total from "./Total/Total";
import Todos from "./Todos/Todos";
import Buttons from "./Buttons/Buttons";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);
  const [completeTodos, setCompleteTodos] = useState(0);
  const [pageActive, setPageActive] = useState(false);
  const [pageComleted, setPageCompleted] = useState(false);

  useEffect(() => {
    setCompleteTodos(todos.filter((todo) => todo.done === true).length);
    setAllTodos(todos.filter((todo) => todo.done === false).length);
  }, [todos]);

  const allSelected = () => {
    if (completeTodos === todos.length) {
      setTodos(
        todos.map((todo) => {
          return { ...todo, done: false };
        })
      );
    } else {
      setTodos(
        todos.map((todo) => {
          if (todo.done === false) {
            return { ...todo, done: true };
          } else {
            return { ...todo };
          }
        })
      );
    }
  };

  const openAll = () => {
    setPageActive(false);
    setPageCompleted(false);
  };

  const openActive = () => {
    
      setPageCompleted(false);
      setPageActive(true);
    
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
    setPageActive(false);
    setPageCompleted(false)
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
      <div className="container">
        <Form
          putTodo={putTodo}
          allSelected={allSelected}
          zeroTodo={todos.length}
        />
        <Total allTodos={allTodos} completeTodos = {completeTodos}/>
        <Todos 
        filteredTodos = {filteredTodos}
        toggleTodo = {toggleTodo}
        deleteTodo = {deleteTodo}
        />
        {todos.length !== 0 && (
        <Buttons 
        clearHolder={clearHolder}
        openAll={openAll}
        openComplited={openComplited}
        clearComleted={clearComleted}
        openActive={openActive}
        />
        )}
      </div>
  );
}

export default App;
