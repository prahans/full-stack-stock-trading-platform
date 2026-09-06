import { api } from "../api/api";
import type { Holding } from "../types/holding";

export async function getHoldings(): Promise<Holding[]> {
  const response = await api.get<Holding[]>("/api/dashboard/allHoldings");

  return response.data;
}
