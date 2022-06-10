const Input = function ({ newTaskToDo, addToList, addItemToList }) {
  return (
    <div>
      <h3>list here</h3>
      <input
        type="text"
        placeholder="Add item..."
        value={newTaskToDo}
        onChange={addToList}
      />
      <button onClick={() => addItemToList()}>Add to list</button>
    </div>
  );
};

export default Input;
