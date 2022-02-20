import mongoose from "mongoose";
import room952HistorySchema from "../schema/Room952History.schema.js";

const room952HistoryModel = mongoose.model(
  "iotdevicedatas",
  room952HistorySchema
);

export async function yearlyQueryEngine(req, res) {
  let { firstDate, lastDate } = req.query;
  console.log(firstDate);
  console.log(lastDate);

  try {
    const yearlyDataResult = await room952HistoryModel.find({}).limit(5);
    // console.log(yearlyDataResult);
    if(firstDate === "00") {
      throw({"prayut":"huakuy"});
    }
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
