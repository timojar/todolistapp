import React, { useState, useEffect } from "react";
import doListService from "./service/toDo"

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
        
        {toDos.map(t => <p key= {t.id}> {t.taskname}</p>)}
      </div>
    </>
  );
};

export default App;
