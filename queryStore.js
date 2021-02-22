const dailyQuery = [
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
            "timeStamp": {"$gte":new Date(),"$lte":new Date()}
        }
    },
    {
        "$group":{
            "_id":{"$dayOfMonth":"$timeStamp"},
            "first":{"$first":"$$ROOT"},
            "last":{"$last":"$$ROOT"}
        }
    },
    {
        "$sort":{"first.timeStamp":1}
    }
];

const monthlyQuery = [
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
            "timeStamp": {"$gte":new Date(),"$lte":new Date()}
        }
    },
    {
        "$group":{
            "_id":{"$month":"$timeStamp"},
            "first":{"$first":"$$ROOT"},
            "last":{"$last":"$$ROOT"}
        }
    },
    {
        "$sort":{"first.timeStamp":1}
    }
];

const yearlyQuery = [
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
            "timeStamp": {"$gte":new Date(),"$lte":new Date()}
        }
    },
    {
        "$group":{
            "_id":{"$year":"$timeStamp"},
            "first":{"$first":"$$ROOT"},
            "last":{"$last":"$$ROOT"}
        }
    },
    {
        "$sort":{"first.timeStamp":1}
    }
];

module.exports = {
    dailyQuery,
    monthlyQuery,
    yearlyQuery
};