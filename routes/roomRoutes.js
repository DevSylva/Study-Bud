const router = require("express").Router();
const verifyAuth = require("../utils/verifyauth");
const {
  getRooms,
  createRoom,
  deleteRoom,
  addParticipants,
} = require("../controllers/room");


router.get("/rooms", verifyAuth, getRooms);
router.post("/createroom", verifyAuth, createRoom);
router.post("/deleteroom/:roomid/:hostid", verifyAuth, deleteRoom);
router.post("/addparticipants/:roomid/:hostid/:participantid", verifyAuth, addParticipants);


module.exports = router