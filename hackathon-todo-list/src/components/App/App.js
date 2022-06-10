import { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");

  return (
    <div className="App">
    <h1>To-do List</h1>
    <input
    type="text"
    placeholder='Add item...'
    />
    <button>Add to list</button>
    <ul>
    <li>Learn React</li>
    <li>Break the problem down!</li>
    <li>Do some code wars</li>
    </ul>
    </div>
  );
}

export default App;
