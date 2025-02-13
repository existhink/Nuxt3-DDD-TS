/**
 * @description Handle business logic for formatting currency to IDR
 */
export const useCurrencyOfIDR = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};
