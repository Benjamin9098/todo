import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";


const App =()=>{
  const [Input, setInput] = useState("");
  const[Add,setAdd]=  useState([]);


  const InputItem=(event)=>{
    setInput(event.target.value)
  }
  const Adder=()=>{
     setAdd((items)=>{
       return[...items,Input]
     });
     setInput(" ")
  }

  const deleteItem=(id)=>{

    setAdd((items) => {
      return items.filter((arrelement, index) => {
        return index !== id;
      });
    });
  }
 return (
   <>
     <div className="main">
       <div className="center">
         <h1>Todo List</h1>
         <div className="todolist">
           <input
             type="text"
             placeholder="Add here.."
             value={Input}
             onChange={InputItem}
           />
           <button className="addbut" onClick={Adder}>
             +
           </button>
         </div>
         <div className="list" style={{}}>
           {Add.map((itemsList, index) => {
             return (
               <Todolist
                 id={index}
                 key={index}
                 text={itemsList}
                 onSelect={deleteItem}
               />
             );
           })}
         </div>
       </div>
     </div>
   </>
 );
}
export default App;