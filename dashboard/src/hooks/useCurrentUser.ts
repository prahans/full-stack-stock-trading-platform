import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "../services/authApi";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,

    staleTime: 2 * 60 * 1000,

    retry: (failureCount, error) => {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        return false;
      }

      return failureCount < 2;
    },
  });
}
