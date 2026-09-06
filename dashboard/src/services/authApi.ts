import { api } from "../api/api";
import type { CurrentUser } from "../types/currentUser";

type CurrentUserResponse = {
  user: CurrentUser;
};

export async function getCurrentUser(): Promise<CurrentUser> {
  const response = await api.get<CurrentUserResponse>("/api/auth/me");

  return response.data.user;
}
