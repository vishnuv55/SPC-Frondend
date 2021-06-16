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
  if (data.length > 50) {
    return `${name} cannot be more than 100 letters`;
  }
  return '';
};

/**
 *
 * A validator function to validate Date
 * @param {Date} date date to be validated
 * @param {String} [fieldName] Field name to be displayed in error message.
 * @param {Boolean} [isRequired] Is this field required or not.
 */
const validateDate = (date, fieldName = 'Date', isRequired = false) => {
  if (date !== undefined && date !== null) {
    const dateObject = new Date(date);
    if (!(dateObject instanceof Date) || Number.isNaN(dateObject.getTime())) {
      return `${fieldName} must be of type Date`;
    }
  } else if (isRequired) {
    return `${fieldName} field cannot be empty`;
  }
  return '';
};

/**
 *
 * Checks if the date is a valid date of birth
 * @param {Date} dateOfBirth Date of Birth to validate
 * @param {Number} [minimumAge] Minimum age the person should have
 * @param {String} [fieldName] Field name to be displayed in error message.
 * @param {Boolean} [isRequired] Is this field required or not.
 */
const validateDateOfBirth = (
  dateOfBirth,
  minimumAge = 1,
  fieldName = 'Date of Birth',
  isRequired = false
) => {
  validateDate(dateOfBirth, fieldName, isRequired);

  if (dateOfBirth !== undefined && dateOfBirth !== null) {
    const currentDate = new Date();
    const minimumDOB = new Date();

    // Converting to date object
    const dateOfBirthObject = new Date(dateOfBirth);

    minimumDOB.setFullYear(currentDate.getFullYear() - minimumAge);

    if (minimumDOB.getTime() < dateOfBirthObject.getTime()) {
      return `The person should be at least ${minimumAge} years old.`;
    }
  } else if (isRequired) {
    return `${fieldName} field cannot be empty`;
  }
  return '';
};

/**
 *
 * A validator function to validate any number using length
 * @param {Number} data Data to be validated
 * @param {Number} lowerLimit Lower limit the data can have
 * @param {Number} upperLimit Upper limit the data can have
 * @param {String} fieldName Field name to be displayed in error message.
 * @param {Boolean} [isRequired] Is this field required or not
 */
const validateNumber = (data, lowerLimit, upperLimit, fieldName, isRequired = false) => {
  if (data !== undefined && data !== null) {
    if (typeof data !== 'number') {
      return `${fieldName} must be of type number`;
    }
    if (data < lowerLimit || data > upperLimit) {
      return `Invalid ${fieldName}`;
    }
  } else if (isRequired) {
    return `${fieldName} field cannot be empty`;
  }
  return '';
};

/**
 *
 * A validator function to validate Phone number
 * @param {String | Number} phoneNumber Phone number to be validated
 * @param {String} [fieldName] Field name to be displayed in error message.
 * @param {Boolean} [isRequired] Is this field required or not
 */
const validatePhone = (phoneNumber, fieldName = 'Phone Number', isRequired = false) => {
  if (phoneNumber !== undefined && phoneNumber !== '' && phoneNumber !== null) {
    if (!/^\d{10}$/.test(phoneNumber)) {
      return `Invalid ${fieldName}`;
    }
  } else if (isRequired) {
    return `${fieldName} field cannot be empty`;
  }
  return '';
};
/**
 *
 * @param {String} password Password to be validated to
 * @param {String} confirmPassword Password to be confirmed
 * @returns {String} Error message if any
 */
const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return `Password doesn't match`;
  }
  return '';
};

/**
 *
 * A validator function to validate URL
 * @param {String} url URL to be validated
 * @param {String} [fieldName] Field name to be displayed in error message.
 * @param {Boolean} [isRequired] Is this field required or not
 */
const validateUrl = (url, fieldName = 'URL', isRequired = false) => {
  if (url !== undefined && url !== '') {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/; // prettier-ignore
    if (typeof url !== 'string') {
      return `${fieldName} must be of type string`;
    }
    if (url.length > 500) {
      return `${fieldName} must not exceed the 100 character limit`;
    }
    if (!regexp.test(url)) {
      return `Invalid ${fieldName}`;
    }
  } else if (isRequired) {
    return `${fieldName} field cannot be empty`;
  }
  return '';
};

const validatePassOutYear = (year) => {
  const currentYear = new Date().getFullYear();
  const msg = validateNumber(year, currentYear, currentYear + 4, 'PassOut Year', true);
  return msg;
};

export {
  validateString,
  validateEmail,
  validatePassword,
  validateDateOfBirth,
  validateDate,
  validateNumber,
  validatePhone,
  validateConfirmPassword,
  validateUrl,
  validatePassOutYear,
};
