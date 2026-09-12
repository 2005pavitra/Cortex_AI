import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            index: true
        },

        title: {
            type: String,
            trim: true,
            default: "New conversation"
        }
    },
    {
        timestamps: true
    }
);

conversationSchema.index({ userId: 1, updatedAt: -1 });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
