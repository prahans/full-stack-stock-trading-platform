import { api } from "../api/api";
import type { Order } from "../types/order";

export async function getOrders(): Promise<Order[]> {
  const response = await api.get<Order[]>("/api/dashboard/allOrders");

  return response.data;
}
