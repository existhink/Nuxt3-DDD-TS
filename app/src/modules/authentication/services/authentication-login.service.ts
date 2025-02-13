// Interfaces
import type { IAuthenticationLoginPayload } from '../interfaces/authentication-login.interface';

// Store
import { storeToRefs } from 'pinia';
import { useAuthenticationStore } from '../stores/authentication.store';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useAuthenticationLoginService = () => {
  /**
   * @description Injected variables
   */
  const store = useAuthenticationStore(); // Instance of the store
  const { authentication_isLoading } = storeToRefs(store);

  /**
   * @description Constant variables
   */
  // Please put your constant variables here

  /**
   * @description Reactive data binding
   */
  const authenticationLogin_formData = reactive<IAuthenticationLoginPayload>({
    username: '',
    password: '',
  });

  /**
   * @description Form validations
   */
  const authenticationLogin_formRules: ComputedRef = computed(() => ({
    username: { required },
    password: { required },
  }));
  const authenticationLogin_formValidations = useVuelidate(
    authenticationLogin_formRules,
    authenticationLogin_formData,
    {
      $autoDirty: true,
    },
  );

  /**
   * @description Handle side effect when reactive data binding is changed
   */
  // Please put your side effect here

  /**
   * @description Handle fetch api authentication login. We call the fetchAuthenticationLogin function from the store to handle the request.
   */
  const authenticationLogin_fetchAuthenticationLogin = async (): Promise<void> => {
    try {
      await store.fetchAuthentication_login(authenticationLogin_formData);

      setTimeout(async () => {
        await navigateTo('/');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * @description Handle action on submit form.
   */
  const authenticationLogin_onSubmit = async (): Promise<void> => {
    authenticationLogin_formValidations.value.$touch();
    if (authenticationLogin_formValidations.value.$invalid) return;

    await authenticationLogin_fetchAuthenticationLogin();
  };

  /**
   * @description Return everything what we need into an object
   */
  return {
    authenticationLogin_formData,
    authenticationLogin_formValidations,
    authenticationLogin_isLoading: authentication_isLoading,
    authenticationLogin_onSubmit,
  };
};
