/**
 * @description Handle business logic for debounce
 */
export const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
): ((...args: T) => void) => {
  let timeout: number;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => callback(...args), delay);
  };
};
