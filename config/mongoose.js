// require mongodb
const mongoose=require('mongoose');
// connect the mongodb with mongoose
mongoose.connect('mongodb://localhost/todo_list_db');
// acquire the connection 
const db=mongoose.connection;
// check error
db.on('error',console.error.bind(console,'error-occured-in-connecting'));
// check when connection is open 
db.once('open',function(){
 console.log("sucessfully connected to database");
});