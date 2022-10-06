const router = require("express").Router();
const { signup, signin, getUsers, getUser } = require("../controllers/user"); 

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getUsers);
router.get("/:id", getUser);


module.exports = router