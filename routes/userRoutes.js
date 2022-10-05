const router = require("express").Router();
const { signup, getUsers } = require("../controllers/user"); 

router.post("/signup", signup);
router.get("/users", getUsers)


module.exports = router