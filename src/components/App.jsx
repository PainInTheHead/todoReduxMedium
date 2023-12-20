import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleareCompleted } from "../store/todoSlice";



import "./App.css";
import Form from "./Form/Form";
import Total from "./Total/Total";
import Todos from "./Todos/Todos";
import Buttons from "./Buttons/Buttons";





function App() {
  const [allTodos, setAllTodos] = useState(0);
  const [completeTodos, setCompleteTodos] = useState(0);
  const [pageActive, setPageActive] = useState(false);
  const [pageComleted, setPageCompleted] = useState(false);

const dispatch = useDispatch()
const todos = useSelector(state => state.todos.todos)

  useEffect(() => {
    setCompleteTodos(todos.filter((todo) => todo.done === true).length);
    setAllTodos(todos.filter((todo) => todo.done === false).length);
  }, [todos]);



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


  const clearComleted = () => {
    dispatch(cleareCompleted())
    setAllTodos(todos.length);
  };



  let filteredTodos = pageActive
    ? todos.filter((todo) => todo.done === false)
    : pageComleted
    ? todos.filter((todo) => todo.done === true)
    : todos;
  return (
      <div className="container">
        <Form

          zeroTodo={todos.length}
        />
        <Total allTodos={allTodos} completeTodos = {completeTodos}/>
        <Todos 
        filteredTodos = {filteredTodos}

        />
        {todos.length !== 0 && (
        <Buttons 
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
