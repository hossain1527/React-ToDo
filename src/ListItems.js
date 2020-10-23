import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function ListItems(props) {
  const [cross, setCross] = useState(false);
  const crossLine = () => {
    setCross(true);
  };

  return (
    <div className="todoItem">
      <span onClick={crossLine}>
        <DeleteIcon className="deleteItem" />
      </span>
      <li style={{ textDecoration: cross ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ListItems;
