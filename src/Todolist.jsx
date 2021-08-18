import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";


const Todolist =(props)=>{
    return (
      <div
        className="todolist"
        style={{
          alignItems: "center",
          justifyContent: "left",
          marginLeft: "4vh",
          marginTop: "2vh",
        }}
      >
        <button
          className="delbut"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteIcon/>
        </button>
        <li style={{ listStyleType: "none" }}>{props.text}</li>
        <br />
      </div>
    );
}

export default Todolist;