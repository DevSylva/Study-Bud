const Topic = require("../models/topic");

exports.getTopics = async (req, res) => {
    const topics = await Topic.find();
    return res.status(200).send(topics);
}

exports.createTopic = async (req, res) => {
    const topic = new Topic({
        name: req.body.name
    })

    const topicExist = await Topic.findOne({ name: req.body.name });
    if (topicExist) return res.status(400).send("Topic already exists.");

    const savedtopic = await topic.save();
    return res.status(201).send(savedtopic)
}
