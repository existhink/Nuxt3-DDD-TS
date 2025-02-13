// Constants
import { AUTHENTICATION_ENDPOINT_LOGIN } from '../constants/authentication.api.constant';

// Interfaces
import type { IAuthenticationLoginPayload } from '../interfaces/authentication-login.interface';
import type { IAuthenticationStoreStates } from '../interfaces/authentication.interface';

// Pinia
import { defineStore } from 'pinia';

export const useAuthenticationStore = defineStore('authentication', {
  state: (): IAuthenticationStoreStates => ({
    authentication_accessToken: '',
    authentication_isLoading: false,
  }),
  getters: {
    /**
     * @description Usually, we define getters if the getter name is different from the state name.
     */
  },
  actions: {
    /**
     * @description Handle fetch api authentication login.
     * @url /login
     * @method POST
     * @access public
     */
    async fetchAuthentication_login(payload: IAuthenticationLoginPayload): Promise<unknown> {
      try {
        this.authentication_isLoading = true;

        const { data, error } = await useApiFetch(AUTHENTICATION_ENDPOINT_LOGIN, {
          body: payload,
          method: 'POST',
          onResponse: async ({ response }) => {
            const result = response._data.data;

            this.authentication_accessToken = result.accessToken;
          },
        });

        if (error.value) {
          throw new Error(error.value?.message);
        }

        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(new Error(error as string));
      } finally {
        this.authentication_isLoading = false;
      }
    },
  },
  persist: {
    storage: localStorage,
    pick: ['authentication_accessToken'],
  },
});
