import mongoose, { Schema } from "mongoose";

interface Holding {
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
}

const HoldingsSchema = new Schema<Holding>({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = mongoose.model("Holding", HoldingsSchema);

export default Holding;
