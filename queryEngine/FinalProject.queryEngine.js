import mongoose from "mongoose";
import room952HistorySchema from "../schema/Room952History.schema.js";

const room952HistoryModel = mongoose.model(
  "iotdevicedatas",
  room952HistorySchema
);

export async function yearlyQueryEngine(req) {
  let { firstDate, lastDate } = req.query;
  console.log(firstDate);
  console.log(lastDate);
  /* try {
        let {firstDate, lastDate} = queryParams;
        room952HistoryModel.find({});
    }
    catch (error) {
        throw (error);
    } */
}
