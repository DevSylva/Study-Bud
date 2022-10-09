const Room = require("../models/room")

exports.getRooms = async (req, res) => {
    const rooms = await Room.find();
    return res.status(200).json(rooms)
}

exports.createRoom = async (req, res) => {
    const room = new Room({
      name: req.body.name,
      host: req.body.hostId,
      topic: req.body.topicId,
      description: req.body.description,
    });

    const newTopic = await room.save();
    return res.status(201).json(newTopic);
}