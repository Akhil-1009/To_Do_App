const mongoose=require('mongoose');
const toDoSchema=new mongoose.Schema({
 description:{
    type:String,
    required:true
 },
 category:{
    type:String
 },
 date:{
    type:String
 }
});
const Task=mongoose.model('Task',toDoSchema);
module.exports=Task;
console.log(module);