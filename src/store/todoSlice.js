import { createSlice } from "@reduxjs/toolkit";

const todoSLice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },

  reducers: {
    putTodo(state, action) {
      if (action.payload.value) {
        state.todos.push({
          id: Date.now(),
          text: action.payload.value,
          done: false,
        });
      } else {
        return state;
      }
    },
    toggleTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    },

    allSelected(state) {
      const allSelectedTask = state.todos.filter((todo) => todo.done === true);
      if (allSelectedTask.length === state.todos.length) {
        state.todos = state.todos.map((todo) => {
          return { ...todo, done: false };
        });
      } else {
        state.todos = state.todos.map((todo) => {
          if (todo.done === false) {
            return { ...todo, done: true };
          } else {
            return { ...todo };
          }
        });
      }
    },

    clearHolder(state) {
        state.todos = []
    },

    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    cleareCompleted(state, action) {
        const filterTodoList = state.todos.filter((todo) => todo.done === false)
        state.todos = filterTodoList
    }
  },
});

export const { putTodo, toggleTodo, deleteTodo, allSelected, clearHolder, cleareCompleted} =
  todoSLice.actions;

export default todoSLice.reducer;
