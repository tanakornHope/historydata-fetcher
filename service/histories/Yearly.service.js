import * as FinalProjectQueryEngine from "../../queryEngine/FinalProject.queryEngine.js";

export async function inquiryHistoriesByYearlyService (req, res) {
    // do something.
    // let {firstDate, lastDate} = req.query;
    FinalProjectQueryEngine.yearlyQueryEngine(req, res);
}

export async function deleteHistoriesByYearlyService () {
    // do something.
}