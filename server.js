import express from "express";
// import queryCommand from "./queryStore.js";
import mongoose from "mongoose";
import apicache from "apicache";
// import room952HistorySchema from "./schema/Room952History.schema.js";
import historiesRouter from "./route/histories/Histories.route.js";

const app = express();
const cache = apicache.middleware; // we have to put Cache-Control into header.
app.use(cache("5 minutes"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var MongooseModel = mongoose.model("iotdeviceData", mongooseSchema);

mongoose.connect(
  "mongodb+srv://thanakorn:5617091@cluster0.ljv90.mongodb.net/finalproject",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const mongoDBconnection = mongoose.connection;

mongoDBconnection.on("error", (msg) => {
  console.log("mongoDB error:", msg);
});
mongoDBconnection.on("connected", () => {
  console.log("mongoDB is connected.");
  initExpress();
});
mongoDBconnection.on("reconnectFailed", () => {
  console.log("mongoDB reconnect is failed.");
});
mongoDBconnection.on("disconnected", () => {
  console.log("mongoDB was disconnected.");
});
mongoDBconnection.on("reconnected", () => {
  console.log("reconnecting is successful.");
});
mongoDBconnection.on("reconnect", () => {
  console.log("mongodb is reconnecting.");
});

const initExpress = () => {
  app.use("/api/v2/histories", historiesRouter);

  app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on Port 3000");
  });
};

/* expressInstance.post('/dataHistory/daily',(req, res) => {
    var firstDate = new Date(req.body.firstdate);
    var lastDate = new Date(req.body.lastdate);

    console.log(firstDate);
    console.log(lastDate);

    res.send(firstDate);
});

expressInstance.listen(process.env.PORT || 3000,() => {
    console.log("Listening on Port ${PORT}");
}); */

/* async function main() {
  await mongodb_connect();

  app.post("/dataHistory/daily", (req, res) => {
    // req.body returned as JSON format.
    var firstDate = new Date(req.body.firstdate);
    var lastDate = new Date(req.body.lastdate);

    console.log("Daily");
    console.log(firstDate);
    console.log(lastDate);

    queryCommand.dailyQuery[1].$match.timeStamp.$gte = new Date(firstDate);
    queryCommand.dailyQuery[1].$match.timeStamp.$lte = new Date(lastDate);

    MongooseModel.aggregate(queryCommand.dailyQuery).exec((err, data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.post("/dataHistory/monthly", (req, res) => {
    var firstDate = new Date(req.body.firstdate);
    var lastDate = new Date(req.body.lastdate);

    console.log("Monthly");
    console.log(firstDate);
    console.log(lastDate);

    monthlyQuery[1].$match.timeStamp.$gte = new Date(firstDate);
    monthlyQuery[1].$match.timeStamp.$lte = new Date(lastDate);

    MongooseModel.aggregate(monthlyQuery).exec((err, data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.post("/dataHistory/yearly", (req, res) => {
    var firstDate = new Date(req.body.firstdate);
    var lastDate = new Date(req.body.lastdate);

    console.log("Yearly");
    console.log(firstDate);
    console.log(lastDate);

    yearlyQuery[1].$match.timeStamp.$gte = new Date(firstDate);
    yearlyQuery[1].$match.timeStamp.$lte = new Date(lastDate);

    MongooseModel.aggregate(yearlyQuery).exec((err, data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on Port 3000");
  });
} */
