import { useState, useRef } from 'react';
import axios from 'axios';

function AddTodoComponent({startLoading}) {
    const [task, setTask]=useState("");
    const addTaskField=useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/todoApi/createTask",{ task: task })
        .then(response=>{
            setTask(response.data);
            startLoading();
            //If Submit was a success, clearing input field value
            addTaskField.current.value="";
        })
        .catch(error=>{
            console.log(error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input-field" ref={addTaskField} placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)} />
            <input type="submit" />
        </form>
    );
}

export default AddTodoComponent;
