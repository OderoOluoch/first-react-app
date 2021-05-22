import React, { useState } from "react"
import './App.css';

import Form from './components/Form';
import ToDoList  from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Odero : To Do List</h1>
      </header>
      <Form setInputText={setInputText}/>
      <ToDoList />
    </div>
  );
}

export default App;
