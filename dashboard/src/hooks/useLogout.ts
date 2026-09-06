import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";
import { goToLogin } from "../config/appUrls";

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await api.post("/api/auth/logout");
    },

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["currentUser"],
      });

      if (!goToLogin()) {
        window.location.reload();
      }
    },
  });
}
