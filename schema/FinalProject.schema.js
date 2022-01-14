import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
  timeStamp: Date,
  MQTTbroker: { online: Boolean },
  server: { online: Boolean },
  rpi: [
    {
      online: Boolean,
      isperson: Boolean,
      prob: Number,
    },
    {
      online: Boolean,
      isperson: Boolean,
      prob: Number,
    },
  ],
  airconController: [
    {
      controllercmd: Boolean,
      properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
      voltage: Number,
      current: Number,
      power: Number,
      energy: Number,
      frequency: Number,
    },
    {
      controllercmd: Boolean,
      properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
      voltage: Number,
      current: Number,
      power: Number,
      energy: Number,
      frequency: Number,
    },
    {
      controllercmd: Boolean,
      properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
      voltage: Number,
      current: Number,
      power: Number,
      energy: Number,
      frequency: Number,
    },
  ],
  lightingController: [
    {
      controllercmd: Boolean,
      properties: { wifiLocalIP: String, online: Boolean, bootcount: Number },
      voltage: Number,
      current: Number,
      power: Number,
      energy: Number,
      frequency: Number,
    },
  ],
});

export default { mongooseSchema };
