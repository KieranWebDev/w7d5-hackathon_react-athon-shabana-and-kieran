import { useState } from 'react';
import './App.css';
import Input from '../Input/index';
import ListItems from '../ListItems/index';
import motivationalQuoteArray from '../MotivationButton/MotivationQuotes';
// import MotivationalQuoteSection from '../MotivationButton/index';

function App() {
  const oldList = [];
  const [newTaskToDo, setNewTaskToDo] = useState('');
  const [listItems, setListItems] = useState(oldList);
  const [motivationalQuote, setMotivationalQuote] = useState(
    'Click the button for a motivational quote'
  );

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
      alert('Please enter something'); //BROKEN FIX LATER
    }
    return;
  }

  function deleteItem(id) {
    const newArray = listItems.filter((item) => item.id !== id);
    setListItems(newArray);
  }

  //Functions for Quotes
  function handleClick() {
    let randomQuote = Math.floor(Math.random() * motivationalQuoteArray.length);

    setMotivationalQuote(motivationalQuoteArray[randomQuote]);
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
      <section>
        <h2 className="quote">{motivationalQuote}</h2>
        <button onClick={handleClick}>New motivational quote</button>
      </section>
    </div>
  );
}

export default App;

// {/* <MotivationalQuoteSection
// handleClick={handleClick}
// motivationalQuote={motivationalQuote}
// /> */}
