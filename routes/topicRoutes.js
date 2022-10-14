const router = require("express").Router();
const { getTopics, createTopic } = require("../controllers/topic");
const verifyAuth = require("../utils/verifyauth");

router.get("/topics", verifyAuth, getTopics);
router.post("/createtopic", verifyAuth, createTopic);

module.exports = router;
