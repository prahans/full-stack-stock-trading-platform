import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/ordersApi";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
}
