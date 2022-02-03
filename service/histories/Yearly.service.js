export async function inquiryHistoriesByYearlyService (req, res) {
    // do something.
    let {firstDate, lastDate} = req.query;
    console.log("inquiryHistoriesByYearlyService");
    console.log(firstDate);
    console.log(lastDate);
    res.end();
}

export async function deleteHistoriesByYearlyService () {
    // do something.
}