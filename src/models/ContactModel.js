import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

export const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
