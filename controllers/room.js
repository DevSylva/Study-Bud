const Room = require("../models/room");
const Topic = require("../models/topic");

// get all rooms available
exports.getRooms = async (req, res) => {
  const rooms = await Room.find()
    .populate("participants")
    .populate("host")
    .populate("topic");

  return res.status(200).json(rooms);
};

// create a room
exports.createRoom = async (req, res) => {
  const topicExist = await Topic.findById(req.body.topicid);
  if (!topicExist)
    return res.status(400).json({ message: "Topic does not exist" });

  const room = new Room({
    name: req.body.name,
    host: req.body.hostid,
    topic: req.body.topicid,
    description: req.body.description,
  });

  const newRoom = await room.save();
  return res.status(201).json(newRoom);
};

// delete a room
exports.deleteRoom = async (req, res) => {
  const roomId = req.params.roomid;
  const userId = req.params.userid;

  const roomExist = await Room.findById(roomId);
  if (!roomExist)
    return res
      .status(404)
      .json({ message: "room with such id does not exist" });

  if (roomExist.host != userId)
    return res.status(400).json({
      messae:
        "You can't perfom such operation because your not the owner of the room",
    });

  await Room.findByIdAndDelete(roomId);
  return res.status(200).json({ message: "room deleted" });
};

// add participants to a room
exports.addParticipants = async (req, res) => {
  const roomId = req.params.roomid;
  const userId = req.params.hostid;
  const participantid = req.params.participantid;

  const roomExist = await Room.findById(roomId);
  if (!roomExist)
    return res
      .status(404)
      .json({ message: "room with such id does not exist" });

  if (roomExist.host != userId)
    return res.status(400).json({
      messae:
        "You can't perfom such operation because your not the owner of the room",
    });

  const room = await Room.findByIdAndUpdate(
    { _id: roomId },
    {
      $push: {
        participants: participantid,
      },
    },
    { safe: true, upsert: true }
  );

  const updatedroom = await room.save();

  res.status(200).json(updatedroom);
};
