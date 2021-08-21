import axios from 'axios';

function DeleteBtn({startLoading, taskId}){
	const handleDelete=()=>{
		axios.delete('http://localhost:8080/todoApi/deleteTask/'+taskId)
		.then(response=>{
			startLoading();
		})
		.catch(error=>{
			console.log(error);
		})
	};
	return <button className="redBtn" onClick={handleDelete}>Delete</button>;
}

export default DeleteBtn;