export const frontendUrl =
  import.meta.env.VITE_FRONTEND_URL?.trim().replace(/\/+$/, "") ||
  (import.meta.env.DEV
    ? `${window.location.protocol}//${window.location.hostname}:5173`
    : "");

export const goToLogin = (replace = false) => {
  if (!frontendUrl) return false;

  const loginUrl = `${frontendUrl}/login`;

  if (replace) {
    window.location.replace(loginUrl);
    return true;
  }

  window.location.assign(loginUrl);
  return true;
};
