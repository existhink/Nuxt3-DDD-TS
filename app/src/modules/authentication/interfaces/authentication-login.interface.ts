// Interfaces
import type { Validation } from '@vuelidate/core';

export interface IAuthenticationLoginPayload {
  username: string;
  password: string;
}

export interface IAuthenticationLoginProvided {
  authenticationLogin_formData: IAuthenticationLoginPayload;
  authenticationLogin_isLoading: Ref<boolean>;
  authenticationLogin_formValidations: globalThis.Ref<Validation>;
  authenticationLogin_onSubmit: () => void;
}
