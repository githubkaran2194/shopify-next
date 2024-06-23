import mongoose from "mongoose"

export const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopify-next')
        console.log("db connected")
    } catch (err) {
        console.log(err, "db connection error")
    }
}