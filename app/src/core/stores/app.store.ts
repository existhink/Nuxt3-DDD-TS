// Pinia
import { defineStore } from 'pinia';

/**
 * @description This store is used to handle the global states, mutations, and actions of the application.
 */
export const useAppStore = defineStore('app', {
  state: (): IAppStoreStates => ({
    app_isLoading: false,
  }),
  getters: {
    /**
     * @description Usually, we define getters if the getter name is different from the state name.
     */
  },
  actions: {
    /**
     * @description Usually, we define actions if the action name is different from the state name.
     */
  },
});
