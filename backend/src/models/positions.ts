import mongoose, { Schema } from "mongoose";

interface Position {
  product: String;
  name: String;
  qty: Number;
  avg: Number;
  price: Number;
  net: String;
  day: String;
  isLoss: Boolean;
}

const PositionsSchema = new Schema<Position>({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Position = mongoose.model("Position", PositionsSchema);

export default Position;
