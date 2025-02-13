// Interfaces
import type { UseFetchOptions } from 'nuxt/app';

/**
 * @description This composable is used to fetch data from the API.
 */
export function useApiFetch<T>(url: string | (() => string), options?: UseFetchOptions<T>) {
  const { $httpClient } = useNuxtApp(); // Inject custom HTTP client
  const resolvedUrl = typeof url === 'function' ? url() : url; // Ensure URL is a string

  return useAsyncData<T>(`api-fetch-${resolvedUrl}`, () =>
    $httpClient<T>(resolvedUrl, {
      ...(options as Record<string, unknown>), // Ensure correct type conversion
    }),
  );
}
