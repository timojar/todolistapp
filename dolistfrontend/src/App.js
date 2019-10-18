import React, { useState, useEffect } from "react";
import doListService from "./service/toDo";
import Dolist from "./components/ToDoList";

import './App.css';


const App = props => {
  
  const [data, setToDo] = useState([]);
 
  
  useEffect(() => {
    doListService.getTodoList().then(setToDo); 
  }, []);

  const toDos = data.todolist !== undefined ? data.todolist : [];
   

  return (
    <>
      <div>
        <h1>Trolololooo</h1>
        <Dolist toDos={toDos} />        
      </div>
    </>
  );
};

export default App;
