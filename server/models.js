const mongoose=require('mongoose');

const Schema=mongoose.Schema;

//Explicitly selecting the 'todos' collection that I had created in the database(see .env file for database name) using the MongoDB Atlas online web GUI console
const todoSchema=new Schema({
    task: { type: String, required: true },
    taskId: { type: Number, required: true, default: null }
},{
    collection: 'todos'
});

//todoSchema.add({ task: { type: Number, required: true } });

const Todo=mongoose.model('Todo',todoSchema);

module.exports=Todo;