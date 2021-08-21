import axios from 'axios';

function UpdateBtn({startLoading, taskId}){
	const handleUpdate=()=>{
		var promptedTask=prompt("Enter New/Updated Task");
		axios.post("http://localhost:8080/todoApi/updateTask/"+taskId, { task: promptedTask })
		.then(response=>{
			startLoading();
		})
		.catch(error=>{
			alert(error);
		});
	};
	return <button className="blueBtn" onClick={handleUpdate}>Update</button>;
}

export default UpdateBtn;