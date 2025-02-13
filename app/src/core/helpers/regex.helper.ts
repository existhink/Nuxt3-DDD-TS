/**
 * @description Handle business logic to check if the string contains at least one lowercase letter
 */
export const isContainLowerCase = (str: string): boolean => {
  return /[a-z]/.test(str);
};

/**
 * @description Handle business logic to check if the string contains at least one number
 */
export const isContainNumber = (str: string): boolean => {
  return /\d/.test(str);
};

/**
 * @description Handle business logic to check if the string contains at least one special character
 */
export const isContainSpecialCharacter = (str: string): boolean => {
  return /[!@#$%^&*(),.?":{}|<>]/.test(str);
};

/**
 * @description Handle business logic to check if the string contains at least one uppercase letter
 */
export const isContainUpperCase = (str: string): boolean => {
  return /[A-Z]/.test(str);
};
