import * as YearlyHistoryService from "../../service/histories/Yearly.service.js";

export async function inquiryHistoriesByYearlyController(req, res) {
  try {
    let result = await YearlyHistoryService.inquiryHistoriesByYearlyService(req, res);
  } catch (error) {
    // do something.
  }
}
