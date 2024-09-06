import React, { useState } from 'react'

function Todolist(){
    
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");
    
    function handleInputItem(event){

    }

    function AddTask(){

    }

    function DeleteTask(index){

    }

    function MoveUp(index){

    }

    function MoveDown(index){

    }



    return (
    <div className='to-do-list'>
        <h1>To Do List</h1>
    </div>
    );
}

export default Todolist