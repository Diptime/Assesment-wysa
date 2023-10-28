import mongoose from "mongoose";
import Assesment from "../model/Assesment.js";
import User from "../model/User.js";

export const addAssesment = async (req, res) => {
    const { struggle, start_time, end_time, duration, user } = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({
            message: "Unable TO FInd User By This ID",
            user_id: user
        });
    }
    const assesment = new Assesment({
        struggle,
        start_time,
        end_time,
        duration,
        user,
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await assesment.save({ session });
        existingUser.assesments.push(assesment);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }

    return res.status(200).json({ assesment });
};

export const updateAssesmentStart_time = async (req, res) => {
    const { struggle, start_time, end_time, duration} = req.body;
    const assesmentId = req.params.id;
    let assesment;
    try {
        assesment = await Assesment.findByIdAndUpdate(assesmentId, {
            struggle, start_time, end_time, duration
        });
    } catch (err) {
        return console.log(err);
    }
    if (!assesment) {
        return res.status(500).json({ message: "Unable To Update The start time in assesment" });
    }
    return res.status(200).json({ assesment });
};

export const updateAssesmentEnd_time = async (req, res) => {
    const { struggle, start_time, end_time, duration} = req.body;
    const assesmentId = req.params.id;
    let assesment;
    try {
        assesment = await Assesment.findByIdAndUpdate(assesmentId, {
            struggle, start_time, end_time, duration
        });
    } catch (err) {
        return console.log(err);
    }
    if (!assesment) {
        return res.status(500).json({ message: "Unable To Update The end time in assesment" });
    }
    return res.status(200).json({ assesment });
};

export const updateAssesmentDuration = async (req, res) => {
    const { struggle, start_time, end_time, duration} = req.body;
    const assesmentId = req.params.id;
    let assesment;
    try {
        assesment = await Assesment.findByIdAndUpdate(assesmentId, {
            struggle, start_time, end_time, duration
        });
    } catch (err) {
        return console.log(err);
    }
    if (!assesment) {
        return res.status(500).json({ message: "Unable To Update The duration in assesment" });
    }
    return res.status(200).json({ assesment });
};