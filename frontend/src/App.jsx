import React from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import "./App.css";


function App() {

  return (
    <>
      <h2 className="title">My todo list</h2>
      <div className="list">
          <TodoForm />
          <TodoList />
      </div>
    </>
  );
}

export default App;
