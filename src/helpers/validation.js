/**
 * Validate Sting data
 * @param {String} data String data to be validated
 * @param {String} name Name to be shown in error message
 * @param {Number} minLength Minimum allowed length
 * @param {Number} maxLength Maximum allowed length
 * @param {Boolean} isRequired Is data required or not
 * @returns {String} Error message
 */
const validateString = (data, name, minLength, maxLength, isRequired = true) => {
  if (data === '' && isRequired) {
    return `${name} cannot be empty`;
  }
  if (typeof data !== 'string') {
    return `${name} must be of type string`;
  }
  if (data.length < minLength && data !== '') {
    return `${name} must be more than ${minLength} letters`;
  }
  if (data.length > maxLength) {
    return `${name} cannot more than ${maxLength} letters`;
  }
  return '';
};

/**
 * Email validation
 * @param {String} email data to be validated
 * @param {String} name Name to be displayed in error message
 * @param {Boolean} isRequired Is data required or not
 * @returns {String} Error message
 */
const validateEmail = (email, name, isRequired = false) => {
  if (email === '' && isRequired) {
    return `${name} cannot be empty`;
  }
  if (typeof email !== 'string') {
    return `${name} must be of the type string`;
  }
  if (email.length > 100) {
    return `${name} cannot be more than 100 letters`;
  }
  if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email) && email !== '') {
    return `${name} is invalid`;
  }
  return '';
};

/**
 * Validate Password
 * @param {String} data Password to be validated
 * @param {String} name Name to be displayed in error message
 * @param {Boolean} isRequired Is password required or not
 * @returns {String} Error message
 */
const validatePassword = (data, name, isRequired) => {
  if (data === '' && isRequired) {
    return `${name} cannot be empty`;
  }
  if (typeof data !== 'string') {
    return `${name} must be of type string`;
  }
  if (data.length < 6 && data !== '') {
    return `${name} must be more than 6 letters`;
  }
  if (data.length > 100) {
    return `${name} cannot be more than 100 letters`;
  }
  return '';
};

export { validateString, validateEmail, validatePassword };
