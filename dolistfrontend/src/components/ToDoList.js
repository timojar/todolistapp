import React, { useState, useEffect } from "react";
import ToDo from "../components/ToDo";

const ToDoList = props => {
    const { toDos } = props;

    return (<div>
        {toDos.map(t => {
            return <ToDo taskname={t.taskname} key={t.id} />;
        })}
    </div>)
}


export default ToDoList