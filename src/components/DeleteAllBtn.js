import axios from 'axios';

function DeleteAllBtn({startLoading}){
	const handleDeleteAll=()=>{
		axios.delete('http://localhost:8080/todoApi/deleteAllTasks')
		.then(response=>{
			startLoading();
		})
		.catch(error=>{
			alert(error);
		})
	};
	return <button className="redBtn" onClick={handleDeleteAll}>Delete all</button>;
}

export default DeleteAllBtn;