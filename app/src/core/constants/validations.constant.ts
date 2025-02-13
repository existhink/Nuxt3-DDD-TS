export const VALIDATION_MESSAGE: Record<string, string> = {
  alpha: '{attribute} field is must be alphabet',
  alphaNum: '{attribute} field only allow alphabet and number',
  alphaSpace: '{attribute} field is must be alphabet',
  available: '{attribute} already exists',
  date: '{attribute} field date is invalid range',
  email: 'Email must contain @ and . (dot) domain',
  invalidCloseHour: 'must be more than open hour',
  invalidDateEnd: 'End date must be less than Start date',
  invalidDateStart: 'Start date must be more than End date',
  invalidOpenHour: 'must be less than close hour',
  isContainLowerCase: '{attribute} field must contain at least one lowercase letter',
  isContainNumber: '{attribute} field must contain at least one number',
  isContainSpecialCharacter: '{attribute} field must contain at least one special character',
  isContainUpperCase: '{attribute} field must contain at least one uppercase letter',
  isNotSameAsNewPassword: 'New Password can not be same with Current Password',
  lessThanMax: '{attribute} must be less than {max}',
  maxLength: '{attribute} maximum length is {max}',
  maxValue: '{attribute} maximum is {max}',
  minLength: '{attribute} minimum length is {min}',
  minValue: '{attribute} minimum is {min}',
  moreThanMin: '{attribute} must be more than {min}',
  numeric: '{attribute} field is must be numeric',
  password: 'Password must contain alphabet, number, and symbol (ex: mypassword!@44)',
  phone: '{attribute} field contains an invalid phone format',
  phoneNumber: 'Invalid phone number format',
  required: '{attribute} field is required',
  sameAs: 'The {attribute} entered does not match',
  sameAsCreatedPassword: 'Your confirmation password does not match the password you entered.',
  sameAsPassword: 'Re-enter New Password does not match New Password',
  url: '{attribute} field contains an invalid url',
  username: '{attribute} field only allow alphabet, number, - , _ , @, and . (dot).',
};
