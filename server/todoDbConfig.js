const mongoose=require('mongoose');
const Todo=require('./models');

//If you don't provide taskId, then default null will go to it
const createAndSaveTask=(done, taskName)=>{
	var todoDoc=new Todo({ task: taskName, taskId: new Date().getTime()  });
	todoDoc.save((err,savedTask)=>{
		if(err){
			done(err);
		}
		done(null,savedTask);
	});
};

const findAllTasks=(done)=>{
	Todo.find({},(err, allTasks)=>{
		if(err){
			done(err);
		}
		done(null, allTasks);
	});
};

const deleteTask=(done, taskId)=>{
	Todo.deleteOne({ taskId: taskId },(err, deletedTask)=>{
		if(err){
			done(err);
		}
		done(null, deletedTask);
	});
};

//Pass an empty {} to remove all documents in the collection
const deleteAllTasks=(done)=>{
	Todo.deleteMany({},(err, deletedTasks)=>{
		if(err){
			done(err);
		}
		done(null, deletedTasks);
	});
};


exports.createAndSaveTask=createAndSaveTask;
exports.findAllTasks=findAllTasks;
exports.deleteTask=deleteTask;
exports.deleteAllTasks=deleteAllTasks;
