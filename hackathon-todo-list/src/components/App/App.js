import { useState } from 'react';
import './App.css';
import Input from '../Input/index';
import ListItems from '../ListItems/index';

function App() {
  const oldList = [];
  const [newTaskToDo, setNewTaskToDo] = useState('');
  const [listItems, setListItems] = useState(oldList);

  function addToList(e) {
    setNewTaskToDo(e.target.value);
  }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newTaskToDo,
  };

  function addItemToList() {
    setListItems((oldList) => [...oldList, item]);
    setNewTaskToDo('');

    if (!newTaskToDo) {
      alert('Please enter something');
    }
    return;
  }

  function deleteItem(id) {
    const newArray = listItems.filter((item) => item.id !== id);
    setListItems(newArray);
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <Input
        newTaskToDo={newTaskToDo}
        addToList={addToList}
        addItemToList={addItemToList}
      />
      <ListItems listItems={listItems} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
