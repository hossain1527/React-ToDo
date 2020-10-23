import React, { useState } from "react";
import ListItems from "./ListItems";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function TodoItem() {
  const [inputText, setInputText] = useState("");
  const [newText, setNewText] = useState([]);

  const inputEvent = (event) => {
    setInputText(event.target.value);
  };

  const setInput = () => {
    setNewText((prevText) => {
      return [...prevText, inputText];
    });
    setInputText(" ");
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <h2>My Todo List</h2>
        <input
          type="text"
          value={inputText}
          placeholder="Enter your item"
          onChange={inputEvent}
        />
        <Button onClick={setInput}>
          <AddIcon></AddIcon>
        </Button>{" "}
        <br />
        <ul>
          {newText.map((value, index) => {
            return <ListItems key={index} text={value} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoItem;
