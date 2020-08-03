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
   
})

module.exports = router;

