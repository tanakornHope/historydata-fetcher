import express from "express";
import * as YearlyHistoryController from "../../controller/histories/Yearly.controller.js";
const router = express.Router();

router.get(
  "/yearly",
  YearlyHistoryController.inquiryHistoriesByYearlyController
);

router.get("/monthly", (req, res) => {
  console.log("get histories monthly.");
  console.log(req.query);
  res.end();
});

router.get("/daily", (req, res) => {
  console.log("get histories daily.");
  console.log(req.query);
  res.end();
});

export default router;
