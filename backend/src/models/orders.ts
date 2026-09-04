import mongoose, { Schema } from "mongoose";

interface Order {
  name: String;
  qty: Number;
  price: Number;
  mode: String;
}

const OrdersSchema = new Schema<Order>({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const Order = mongoose.model("Order", OrdersSchema);

export default Order;
