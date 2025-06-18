import mongoose from "mongoose";

const dealerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Dealer = mongoose.model("Dealer", dealerSchema);

export default Dealer;