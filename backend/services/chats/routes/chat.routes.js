import express from 'express';
const router = express.Router();

import {getConversation,
    getMessage, addMessage, createConversation
} from "../controllers/chat.controller.js"

router.post("/conversations", createConversation);
router.get("/conversations", getConversation);
router.post("/conversations/:conversationId/messages", addMessage);
router.get("/conversations/:conversationId/messages", getMessage);

export default router;