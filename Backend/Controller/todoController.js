const router = require("express").Router();

const ToDoItem = require("../Routes/ToDoItem")



router.post("/create", function(req, res, next) {
    const todoBody = req.body;
    const toDoItem = new ToDoItem(todoBody);
    toDoItem.save(function(err, result) {
        if (err) {
            return next(err);
        } else {
            res.status(201).send(result);
        }
    });
});

router.get("/show", async (req, res) => {
   
    const toDoItems = await ToDoItem.find();
    res.send(toDoItems);
   
});



router.get("/show-false", async (req,res) => {
    const notCompleted = await ToDoItem.find({completed : "false"});
    res.send(notCompleted);
});

router.get("/show-true", async (req,res) => {
    const completedToDos = await ToDoItem.find({completed : "true"});
    res.send(completedToDos);
});

router.patch("/task-done/:id", async (req, res, next) => {
    
await ToDoItem.findById(req.params.id, {completed : false}, function(err, todo) {
    if (err) {
        return next(err);
    } else {
        ToDoItem.findOneAndUpdate(req.params.id, {completed: true}, function(err, todo){
            if (err) {
                return next(err)
            } else {
                res.send(todo);
            }
        })
        
    }
    
})
    
})



module.exports = router;

