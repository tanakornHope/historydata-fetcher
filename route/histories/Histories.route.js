import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    console.log("get histories.");
    console.log(req.query);
    res.end();
});

export default router;
