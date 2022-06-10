import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoCompenet />
      </header>
    </div>
  );
}

/*
  Rules of Components:
    1. PascalCase
    2. Return Statement With () and single enclosing html element, usually <div></div>
    3. Components can be included in other components like html elements
*/

const ToDoCompenet = () => {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [importance, setImportants] = useState('low');
const [toDoList,setTodoList] = useState([]);


  return (
    <div>
      <h4>To do List </h4>
    <label>To Do Title:</label>

      <input
        type="text"
        value={title}
        onChange={(e) => {
          const newTitles = e.target.value;
        }}
      ></input>
      <h4> descriptions:</h4>
      <input
        type="text"
        value = {descriptions}
      onChange={(e) => {
          const newDescription = e.target.value;
          setDescriptions(newDescription);
        }}
      ></input>
      <h4>Priority:</h4>
      <select value={importance}
      onChange={(e) => {
        setImportants(e.target.value);
    }  }><option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
<button type = "button" value={toDoList}
onClick = {(e)=>{
  const newToDo = {title,descriptions,importance};
  const updatedToDoList = [...toDoList];
  updatedToDoList.push(newToDo);
  setTodoList(updatedToDoList);
  setTitle("");
  setDescriptions("");
setImportants("low");

} }>Submit</button>
<div>
       {toDoList.map((element, index) => {
         return (
           <div key={index}>
             <ul>
               <li>
                 <h2>{element.title}</h2>
                 <p>{element.description}</p>
                 <h4>{element.importance}</h4>
               </li>
               <hr />
             </ul>
           </div>
         )
       })
       }
     </div>






   </div >
 );
}

export default App;
