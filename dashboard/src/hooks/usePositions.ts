import { useQuery } from "@tanstack/react-query";
import { getPositions } from "../services/positionsApi";

export function usePositions() {
  return useQuery({
    queryKey: ["positions"],
    queryFn: getPositions,
  });
}
