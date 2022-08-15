import React, { useState } from "react";

const ToDoList = () => {
  const [newItem, setNewItem] = useState("");

  const [itemsArr, setItemsArr] = useState([]);

  const addNewItem = () => {
    if (newItem && !itemsArr.includes(newItem)) {
      setItemsArr([...itemsArr, newItem]);
      setNewItem("");
    }
  };
  const deleteItem = (id) => {
    setItemsArr(
      itemsArr.filter((cur) => {
        return cur !== id;
      })
    );
  };

  return (
    <>
      <h2>ToDoList</h2>
      <input
        type="text"
        value={newItem}
        onChange={(event) => {
          setNewItem(event.target.value);
        }}
      ></input>
      <button onClick={addNewItem}>Add Item</button>
      <div>
        {itemsArr.map((cur, ind) => {
          return (
            <div className="list" key={ind}>
              <span>{cur}</span>
              <button onClick={() => deleteItem(cur)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
