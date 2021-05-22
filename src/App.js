import './App.css';

import Form from './components/Form';
import ToDoList  from './components/ToDoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Odero : To Do List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
