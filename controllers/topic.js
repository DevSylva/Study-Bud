const Topic = require("../models/topic");

exports.getTopics = async (req, res) => {
    const topics = await Topic.find();
    return res.status(200).send(topics);
}

exports.createTopic = async (req, res) => {
    const topic = new Topic({
        name: req.body.name
    })
    const savedtopic = await topic.save();
    return res.status(201).send(savedtopic)
}
