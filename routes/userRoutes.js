const router = require("express").Router();
const { signup, signin, getUsers, getUser } = require("../controllers/user"); 
const verifyAuth = require("../utils/verifyauth")

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", verifyAuth, getUsers);
router.get("/:id", verifyAuth, getUser);


module.exports = router