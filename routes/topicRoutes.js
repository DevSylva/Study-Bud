const router = require("express").Router();
const { getTopics, createTopic } = require("../controllers/topic");

router.get("/topics", getTopics);
router.post("/createtopic", createTopic);

module.exports = router;
