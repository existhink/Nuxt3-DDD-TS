export {};

/**
 * @description Here's a way to extend the global interfaces.
 */
declare global {
  /**
   * @description Here's we can define the global interfaces.
   */
  interface IAppStoreStates {
    app_isLoading: boolean;
  }

  interface IBindStateForm {
    solo: boolean;
    flat: boolean;
    placeholder: string;
    class: string;
    hideDetails: string;
    autocomplete: string;
  }

  interface ICurrencyOptions {
    minimumFractionDigits: number;
    style: string;
    currency: string;
  }

  interface IPagination {
    total: number;
    skip: number;
    limit: number;
  }

  interface IResponseListenerForm {
    input: () => void;
    blur: () => void;
  }

  interface IBusEvent {
    [key: string]: unknown;
    [key: symbol]: unknown;
  }
}
