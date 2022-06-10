import { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addToList(e) {
    setNewItem(e.target.value);
    // console.log(newItem);
  }

  function addItem() {
    // console.log(newItem);

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem('');
    // console.log(items);

    if (!newItem) {
      alert('Please enter something');
    }
    return;
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <input
        type="text"
        placeholder="Add item..."
        value={newItem}
        onChange={addToList}
      />

      <button onClick={() => addItem()}>Add to list</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{' '}
              <button onClick={() => deleteItem(item.id)}>Done!</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
