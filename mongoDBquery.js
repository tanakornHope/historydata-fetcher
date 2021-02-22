const express = require('express');
const bodyParser = require('body-parser');
const queryCommand = require('./queryStore.js'); 
const expressInstance = express();
const mongoose = require('mongoose');

expressInstance.use(bodyParser.urlencoded({ extended: true }));
expressInstance.use(bodyParser.json());

expressInstance.post('/dataHistory/daily',(req, res) => {
    var firstDate = new Date(req.body.firstdate);
    var lastDate = new Date(req.body.lastdate);

    console.log(firstDate);
    console.log(lastDate);

    res.send(firstDate);
});

expressInstance.listen(process.env.PORT || 3000,() => {
    console.log("Listening on Port ${PORT}");
});

/* var mongooseSchema = new mongoose.Schema({
    timeStamp: Date,
    MQTTbroker: { online: Boolean },
    server: { online: Boolean },
    rpi: [
        {
            online: Boolean,
            isperson: Boolean,
            prob: Number
        },
        {
            online: Boolean,
            isperson: Boolean,
            prob: Number
        }
    ],
    airconController: [
        {
            controllercmd: Boolean,
            properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
            voltage: Number,
            current: Number,
            power: Number,
            energy: Number,
            frequency: Number
        },
        {
            controllercmd: Boolean,
            properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
            voltage: Number,
            current: Number,
            power: Number,
            energy: Number,
            frequency: Number
        },
        {
            controllercmd: Boolean,
            properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
            voltage: Number,
            current: Number,
            power: Number,
            energy: Number,
            frequency: Number
        }
    ],
    lightingController: [
        {
            controllercmd: Boolean,
            properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
            voltage: Number,
            current: Number,
            power: Number,
            energy: Number,
            frequency: Number
        }
    ]
});

var MongooseModel = mongoose.model("iotdeviceData", mongooseSchema);

function mongodb_connect() {
    return new Promise(function (resolve, reject) {
        mongoose.connect('mongodb://localhost:27017/finalproject', {
            useNewUrlParser: true,
            user: "",
            pass: "",
            useUnifiedTopology: true,
            useCreateIndex: true,
            authSource: "admin"
        }, function (error) {
            //resolve(console.log("mongoDB error:",error));
        });
        mongoDBconnection = mongoose.connection;

        mongoDBconnection.on("error", function (msg) {
            resolve(console.log("mongoDB error:", msg));
        });
        mongoDBconnection.on("connected", function () {
            resolve(console.log("mongoDB is connected."));
        });
        mongoDBconnection.on("reconnectFailed", function () {
            resolve(console.log("mongoDB reconnect is failed."));
        });
        mongoDBconnection.on("disconnected", function () {
            resolve(console.log("mongoDB was disconnected."));
        });
        mongoDBconnection.on("reconnected", function () {
            resolve(console.log("reconnecting is successful."));
        });
        mongoDBconnection.on("reconnect", function () {
            resolve(console.log("mongodb is reconnecting."));
        });
    });
}

console.log(queryCommand);

async function main() {
    //await mongodb_connect();

    expressInstance.post('/dataHistory/daily',(req, res) => {
        // req.body returned as JSON format.
        var firstDate = new Date(req.body.firstdate);
        var lastDate = new Date(req.body.lastdate);

        console.log(firstDate);
        console.log(lastDate);

        res.end(firstDate);
        
        queryCommand.query[1].$match.timeStamp.$gte = new Date(firstDate);
        queryCommand.query[1].$match.timeStamp.$lte = new Date(lastDate);

        console.log(queryCommand.query[1].$match.timeStamp.$gte);
        console.log(queryCommand.query[1].$match.timeStamp.$lte);
        MongooseModel.aggregate(queryCommand.query).exec((err, data)=>{
            //var a = dayjs(data[0].first.timeStamp).tz("Asia/Bangkok").format();
            console.log(data);
            //res.send(data);
            res.send(data);
        });
        
        
    });
    
    expressInstance.post('/dataHistory/monthly',(req, res) => {
    
    });
    
    expressInstance.post('/dataHistory/yearly',(req, res) => {
    
    });
    
    expressInstance.listen(process.env.PORT || 3000,() => {
        console.log("Started on PORT 8005");
    })
}

main(); */