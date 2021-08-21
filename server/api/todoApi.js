const express=require('express');
const createAndSaveTask=require('../todoDbConfig').createAndSaveTask;
const findAllTasks=require('../todoDbConfig').findAllTasks;
const updateTask=require('../todoDbConfig').updateTask;
const deleteTask=require('../todoDbConfig').deleteTask;
const deleteAllTasks=require('../todoDbConfig').deleteAllTasks;

const router=express.Router();

router.get("/",(req,res)=>{
	res.send("Root part in todoApi");
});

//Call api on Frontend by POST request: http://localhost:PortName/todoApi/createTask and body should be { task: VAR_TASKNAME }
router.post("/createTask",(req,res)=>{
    console.log(req.body);
    createAndSaveTask((err,data)=>{
    	if(err){
    		res.send(err);
    	}
    	res.send(data);
    }, req.body.task);
});

router.get("/getAllTasks",(req,res)=>{
    findAllTasks((err,data)=>{
        if(err){
            res.send(err);
        }
        res.send(data);
    });
});

router.post("/updateTask/:taskId",(req,res)=>{
    updateTask((err,data)=>{
        if(err){
            res.send(err);
        }
        res.send(data);
    }, req.params.taskId, req.body.task);
});

router.delete("/deleteTask/:taskId",(req,res)=>{
    deleteTask((err,data)=>{
        if(err){
            res.send(err);
        }
        res.send(data);
    }, req.params.taskId);
});

router.delete("/deleteAllTasks",(req,res)=>{
    deleteAllTasks((err,data)=>{
        if(err){
            res.send(err);
        }
        res.send(data);
    });
});

module.exports=router;