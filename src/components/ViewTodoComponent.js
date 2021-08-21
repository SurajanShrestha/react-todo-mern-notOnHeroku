import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateBtn from './UpdateBtn';
import DeleteBtn from './DeleteBtn';

function ViewTodoComponent({isLoading, startLoading, stopLoading}) {
    const [todos, setTodos]=useState([]);

    //As we have used preventDefault in AddTodoComponent, our page will not refresh, and if we only used [] in dependency array of useEffect, it will only run once so we would have to refresh the page manually to see the changes in the Frontend of ViewTodoComponent.
    //So, the solution is using isLoading state provided by the App component. AddTodoComponent changes isLoading to true when api call is a success and when isLoading changes, useEffect of ViewTodoComponent runs again as isLoading is added in the dependency array of useEffect in ViewTodoComponent.
    //After useEffect is a success, isLoading is set to false by calling stopLoading.
    useEffect(()=>{
        axios.get("http://localhost:8080/todoApi/getAllTasks")
        .then(response=>{
            setTodos(response.data);
            stopLoading();
        })
        .catch(error=>{
            alert(error);
        });
    },[isLoading]);

    return (
        <div className="tasksContainer">
            {
                todos.length===0 ?
                <p>You have no Tasks to do.</p> :
                todos.map(todo=>{
                    return <p id={todo.taskId} className="task" key={todo.taskId}>{todo.task}&emsp;<UpdateBtn startLoading={startLoading} taskId={todo.taskId} />&emsp;<DeleteBtn startLoading={startLoading} taskId={todo.taskId} /></p>;
                })
            }
        </div>
    );
}

export default ViewTodoComponent;
