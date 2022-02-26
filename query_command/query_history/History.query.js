const getHistoryQuery = async (firstDate, lastDate) => {
  return [
    {
      $project: {
        aircon1energy: {
          $arrayElemAt: ["$airconController.energy", 0],
        },
        aircon2energy: {
          $arrayElemAt: ["$airconController.energy", 1],
        },
        aircon3energy: {
          $arrayElemAt: ["$airconController.energy", 2],
        },
        timeStamp: 1,
      },
    },
    {
      $match: {
        timeStamp: {
          $gte: new Date(firstDate),
          $lt: new Date(lastDate),
        },
      },
    },
    {
      $sort: {
        timeStamp: 1,
      },
    },
    {
      $group: {
        _id: null,
        firstData: {
          $first: "$$ROOT",
        },
        lastData: {
          $last: "$$ROOT",
        },
      },
    },
  ];
};

export default { getHistoryQuery };
