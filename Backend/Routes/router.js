const router = require("express").Router();

router.post("/create", (req, res) => {
    const description = req.body.description;
    res.status(201).send("to do added");
});

module.exports = router;