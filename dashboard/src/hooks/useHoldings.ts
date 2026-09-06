import { useQuery } from "@tanstack/react-query";
import { getHoldings } from "../services/holdingsApi";

export function useHoldings() {
  return useQuery({
    queryKey: ["holdings"],
    queryFn: getHoldings,
  });
}
