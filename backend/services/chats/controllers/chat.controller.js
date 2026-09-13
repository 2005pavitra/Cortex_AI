import mongoose from "mongoose"
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

const getUserId = (req) => {
    return req.headers["x-user-id"]
}

const createConversation = async (req, res) => {
    //create the conversation directly
    try {
        const userId = getUserId(req);
        console.log(userId)
        const { title } = req.body;
        if (!userId) {
            return res.status(400).json({
                message: "UserId not provided"
            })
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID"
            })
        }

        const conversation = await Conversation.create({
            userId,
            title: title || "New conversation"
        })

        return res.status(201).json({
            success: true,
            conversation,
            message: "Conversation created"
        })

    } catch (error) {
        console.log("Create conversation error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create conversation"
        });
    }
}

const getConversation = async (req, res) => {
    try {
        const userId = getUserId(req);
        const conversations = await Conversation
            .find({ userId })
            .sort({ updatedAt: -1 })
        return res.status(200).json({
            success: true,
            conversations
        });
    } catch (error) {
        console.log("Get conversations error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch conversations"
        });
    }
}
const getMessage = async (req, res) => {
    try {
        const userId = getUserId(req);
        const { conversationId } = req.params;
        const conversation = await Conversation.findOne({
            _id: conversationId,
            userId
        })
        if (!conversation) {
            return res.status(404).json({
                success: false,
                message: "Conversation not found"
            });
        }

        const messages = await Message.find({
            conversationId,
            userId
        }).sort({ createdAt: 1 })

        return res.status(200).json({
            success: true,
            messages
        });
    } catch (error) {
        console.log("Get messages error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch messages"
        });
    }

}
const addMessage = async (req, res) => {
    try {
        const userId = getUserId(req);
        const { conversationId } = req.params;
        const { role, content } = req.body;
        // if (!userId) {

        // }
        // if (!conversationId) {

        // }
        // if (!role || !content) {

        // }

        const conversation = await Conversation.findOne({
            _id: conversationId,
            userId
        })

        // if (!conversation) {

        // }
        const message = await Message.create({
            conversationId,
            userId,
            role,
            content
        })

        await Conversation.findByIdAndUpdate(
            conversationId,
            {
                updatedAt: new Date()
            }
        )
        return res.status(201).json({
            success: true,
            message
        });
    } catch (error) {
        console.log("Add message error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to add message"
        });
    }
}

export {
    getConversation,
    getMessage, addMessage, createConversation
}