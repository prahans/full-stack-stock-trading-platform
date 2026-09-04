import { Router } from "express";
import { type Request, type Response } from "express";

import Holding from "../models/holdings.ts";
import Position from "../models/positions.ts";
import Order from "../models/orders.ts";
import { userVerification } from "../middlewares/authMiddleware.ts";

const router = Router();

router.get(
  "/allholdings",
  userVerification,
  async (req: Request, res: Response) => {
    try {
      const allHoldings = await Holding.find({});
      res.status(200).json(allHoldings);
    } catch (error) {
      console.error("Get holdings error:", error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
);

router.get(
  "/allpositions",
  userVerification,
  async (req: Request, res: Response) => {
    try {
      const allPositions = await Position.find({});
      res.status(200).json(allPositions);
    } catch (error) {
      console.error("Get positions error:", error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
);

router.get(
  "/allOrders",
  userVerification,
  async (req: Request, res: Response) => {
    try {
      const allOrders = await Order.find({});
      res.status(200).json(allOrders);
    } catch (error) {
      console.error("Get orders error:", error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
);

router.post(
  "/newOrder",
  userVerification,
  async (req: Request, res: Response) => {
    try {
      let newOrder = new Order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
      });
      newOrder.save();
      res.status(201).send("order saved!");
    } catch (error) {
      console.error("Get orders error:", error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
);

export default router;
