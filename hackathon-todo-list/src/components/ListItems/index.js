const ListItems = function ({ listItems, deleteItem }) {
  return (
    <ul>
      {listItems.map((item) => {
        return (
          <li key={item.id}>
            {item.value}{' '}
            <button onClick={() => deleteItem(item.id)}>Done!</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
