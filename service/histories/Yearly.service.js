import * as FinalProjectQueryEngine from "../../queryEngine/FinalProject.queryEngine.js";

export async function inquiryHistoriesByYearlyService (req, res) {
    // do something.
    // let {firstDate, lastDate} = req.query;
    let result = FinalProjectQueryEngine.yearlyQueryEngine(req, res);
    console.log(result);
}

export async function deleteHistoriesByYearlyService () {
    // do something.
}