const express=require("express"); // require the  express module
const path=require("path"); // require the path module
const port=9000; // the port on which server is running
const app=express();// creates an express application



const db=require('./config/mongoose');// require the moongosse connection file
const Task=require('./models/contact');
console.log(Task);
app.set("view engine","ejs"); // set will set the key with value
app.set("views",path.join(__dirname,"views")); // join the path current path with views folder

var taskList=[{
    description:"get sugar",
    category:"House",
    date:"22-10-2022"
}]

// introducing the middleware used to parse the data
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){

    // fetching the task from database
    Task.find({},function(err,tasks){
        if(err){
            console.log("error in fetching the contacts");
            return;
        }

        
        return res.render("home",{
            task_list:tasks
        });
    });
    
});
// for creating the task
app.post('/create-task',function(req,res){
      console.log(req.body);
    //  taskList.push(req.body);
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log("error in creating the task");
            return;
        }
        console.log("***** ",newTask);
      return res.redirect('back');

    });
});
 // for deleting the task
 app.get('/delete-task/',function(req,res){
    console.log(req.query);
    let id=req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log("there is an error In Deleting");
        return;
        }
    return res.redirect('back');

    });
});
// for running the server 
app.listen(port,function(err){
 if(err)
 {
    console.log("err occured",err)
 }
 console.log("yup the server is running on port!",port);
});


