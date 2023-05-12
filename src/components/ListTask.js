import React, {useState} from "react";
import Form from "./Form";
import "../stylesheets/ListTask.css"
import Tasks from "./Tasks";

function ListTask (){

    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if(task.text.trim()){
            task.text = task.text.trim();
            const updatedTask = [task, ...tasks];
            setTask(updatedTask);
        };
    };

    const deleteTask = id => {
        const updatedTask = tasks.filter( tasks => tasks.id !== id);
        setTask(updatedTask);
    };

    const completeTask = id => {
        const updatedTask = tasks.map( tasks => {
            if(tasks.id === id){
                tasks.complete = !tasks.complete;   
            }
            return tasks;
        })
        setTask(updatedTask);
    };

    return(
        <>
            <Form onSubmit={addTask} />
            <div className="container-list-task">
                {
                    tasks.map(
                        (tasks) => <Tasks key={tasks.id} id={tasks.id} text={tasks.text} complete={tasks.complete} completeTask={completeTask} deleteTask={deleteTask} />
                    )
                }
            </div>
        </>
    );

};

export default ListTask;