const router = require("express").Router();
const {
  getRooms,
  createRoom,
  deleteRoom,
  addParticipants,
} = require("../controllers/room");


router.get("/rooms", getRooms);
router.post("/createroom", createRoom);
router.post("/deleteroom/:roomid/:hostid", deleteRoom);
router.post("/addparticipants/:roomid/:hostid", addParticipants);


module.exports = router