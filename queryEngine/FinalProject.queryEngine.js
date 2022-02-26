import mongoose from "mongoose";
import room952HistorySchema from "../schema/Room952History.schema.js";
import queryCommand from "../query_command/query_history/History.query.js"

const room952HistoryModel = mongoose.model(
  "iotdevicedatas",
  room952HistorySchema
);

export async function yearlyQueryEngine(req, res) {
  let { firstDate, lastDate } = req.query;
  console.log(new Date(firstDate));
  console.log(new Date(lastDate));

  /* $gte: new Date("2020-01-01T00:00:00.000+07:00")
  $lte: new Date("2021-01-01T00:00:00.000+07:00") */

  try {
    console.log(JSON.stringify(await queryCommand.getHistoryQuery(firstDate, lastDate)));
    const yearlyDataResult = await room952HistoryModel.aggregate(await queryCommand.getHistoryQuery(firstDate, lastDate));
    console.log(yearlyDataResult);
    res.send(yearlyDataResult);
    if(firstDate === "00") {
      throw({"prayut":"huakuy"});
    }
  } catch (e) {
    /* console.log(e);
    res.status(500); */
  }
}
