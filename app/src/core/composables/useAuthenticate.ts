/**
 * @description This composable is used to check if the user is authenticated or not.
 */
export const useAuthenticate = async (): Promise<void> => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    await navigateTo('/authentication/login');
  }
};
