const query = [
    {
       $project:{
           "aircon1energy":{$arrayElemAt:["$airconController.energy", 0]},
           "aircon2energy":{$arrayElemAt:["$airconController.energy", 1]},
           "aircon3energy":{$arrayElemAt:["$airconController.energy", 2]},
           "timeStamp":1,
       }

    },
    {
        $match:{
            "timeStamp": {"$gte":new Date("2021-09-08T17:00:00.000Z"),"$lte":new Date("2021-09-09T17:00:00.000Z")}
        }
    },
    {
        "$group":{
            "_id":{"$dayOfWeek":"$timeStamp"},
            "first":{"$first":"$$ROOT"},
            "last":{"$last":"$$ROOT"}
        }
    },
    {
        "$sort":{"first.timeStamp":1}
    }
];

module.exports = {
    query
};