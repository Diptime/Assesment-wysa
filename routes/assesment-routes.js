import express from "express";
import {addAssesment, updateAssesmentDuration, updateAssesmentEnd_time, updateAssesmentStart_time} from "../controllers/assesment-controller.js";

const AssesmentRouter = express.Router();

AssesmentRouter.post("/add", addAssesment);
AssesmentRouter.put("/update1/:id", updateAssesmentStart_time);
AssesmentRouter.put("/update2/:id", updateAssesmentEnd_time);
AssesmentRouter.put("/update3/:id", updateAssesmentDuration);

export default AssesmentRouter;