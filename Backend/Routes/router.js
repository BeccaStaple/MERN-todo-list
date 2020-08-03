const router = require("express").Router();

router.post("/create", (req, res) => {
    res.status(201).send("to do added");
});

router.get("/show", (req,res) => {
    res.status(200);
})

module.exports = router;