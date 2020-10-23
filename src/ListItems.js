import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';

function ListItems(props) {
  const [cross, setCross] = useState(false);
  const crossLine = () => {
    setCross(true);
  };
 
  return (
    <>
    <div className="todoItem">
        <DeleteIcon className="deleteItem" onClick = {() => {
          props.onSelect(props.id);}}
        />
     
      <span onClick={crossLine}>
        <CheckIcon className="lineItem" />
      </span>
      <li style={{ textDecoration: cross ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
    </>
  );
}

export default ListItems;
