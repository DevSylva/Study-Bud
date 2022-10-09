const router = require("express").Router();
const { getRooms, createRoom } = require("../controllers/room");


router.get("/rooms", getRooms);
router.post("/createroom", createRoom),


module.exports = router