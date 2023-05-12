import React, {useState} from "react";
import "../stylesheets/Form.css"
import {v4 as uuidv4} from 'uuid';

function Form (props) {


   const [input, setInput] = useState('');

   const managerChange = e =>{
      setInput(e.target.value);
   }

   const managerSend = e => {
      e.preventDefault();
     
      const newTask = {
         id: uuidv4(),
         text: input,
         complete: false
      };
      
      props.onSubmit(newTask);
   }

return(
    <form 
    className="task-form"
    onSubmit={managerSend}
    >
         <input 
            className="input-task"
            type="text"
            placeholder="Write a task"
            name="text"
            onChange={managerChange}
         />
         <button className="task-button">
            Add Task
         </button>
    </form>
);

};

export default Form;