export const frontendUrl =
  import.meta.env.VITE_FRONTEND_URL?.trim() ||
  `${window.location.protocol}//${window.location.hostname}:5173`;

export const goToLogin = (replace = false) => {
  const loginUrl = `${frontendUrl}/login`;

  if (replace) {
    window.location.replace(loginUrl);
    return;
  }

  window.location.assign(loginUrl);
};
