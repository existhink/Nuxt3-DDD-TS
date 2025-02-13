// Define type augmentation for NuxtApp
declare module '#app' {
  /**
   * @description Here's you can define the global interfaces of your plugins.
   */
  interface NuxtApp {
    $bus: typeof emitter;
    $httpClient: typeof $fetch;
  }
}

export {};
