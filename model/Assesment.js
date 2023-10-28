import mongoose from "mongoose";

const Schema = mongoose.Schema;

const assesmentSchema = new Schema({
    struggle: {
        type: Number,
        default: 2
    },
    start_time: {
        type: Date,
        default: "2023-10-27T22:00:00Z",
    },
    end_time: {
        type: Date,
        default: "2023-10-27T06:00:00Z",
    },
    duration: {
        type: Number,
        default: 8,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
});

export default mongoose.model("Assesment",assesmentSchema);