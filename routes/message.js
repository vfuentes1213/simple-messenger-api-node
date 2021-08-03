const express = require('express');
const router = express.Router();
const messageController = require("../controllers/message")

router
    .route('/')
    .get(messageController.get_messages)
    .post(messageController.send_message)

module.exports = router;