import mongoose from "mongoose";

const carMakeSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Dealer = mongoose.model("CarMake", carMakeSchema);

export default Dealer;