import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    dealerId: {
      type: String,
      required: true,
    },
    carMakeId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    wheelsCount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Dealer = mongoose.model("Car", carSchema);

export default Dealer;