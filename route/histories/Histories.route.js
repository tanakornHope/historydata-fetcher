import express from "express";
import { inquiryHistoriesByYearly } from "../../controller/histories/Yearly.controller.js";
const router = express.Router();

router.get("/yearly", inquiryHistoriesByYearly);

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
