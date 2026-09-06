import { api } from "../api/api";
import type { Position } from "../types/positions";

export async function getPositions(): Promise<Position[]> {
  const response = await api.get<Position[]>("/api/dashboard/allPositions");

  return response.data;
}
