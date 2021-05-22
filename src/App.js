import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Todo from "./components/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Odero : To Do List</h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
