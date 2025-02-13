export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const authentication = localStorage.getItem('authentication')!;
  const { authentication_accessToken } = JSON.parse(authentication) ?? '';

  const httpClient = $fetch.create({
    baseURL: config.public.apiBase as string,
    onRequest({ options }) {
      if (authentication_accessToken) {
        // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
        options.headers.set('Authorization', `Bearer ${authentication_accessToken}`);
      }
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(async () => await navigateTo('/authentication/login'));
      }
    },

    onResponse: async ({ response }) => {
      return response._data.data;
    },
  });

  return {
    provide: {
      httpClient,
    },
  };
});
