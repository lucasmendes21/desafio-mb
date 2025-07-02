import { ERROR_MESSAGES_CPF, ERROR_MESSAGES_DATES, ERROR_MESSAGES_CNPJ, ERROR_MESSAGES_EMAIL } from "./constants";

const checkEmptyField = (field) => {
  return field === '' || field === undefined || field === null
}

const validateCPF = (cpf) => {
  if (checkEmptyField(cpf)) return { isValid: false, message: ERROR_MESSAGES_CPF.EMPTY_CPF };

  const removeNonNumericCharacters = cpf.replace(/\D/g, '')

  if (removeNonNumericCharacters.length !== 11) {
    return { isValid: false, message: ERROR_MESSAGES_CPF.INVALID_CPF_LENGTH }
  }

  const checkIfAllDigitsAreTheSame = /^(\d)\1{10}$/.test(removeNonNumericCharacters)
  if (checkIfAllDigitsAreTheSame) {
    return { isValid: false, message: ERROR_MESSAGES_CPF.INVALID_CPF_EQUAL_DIGITS }
  }

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(removeNonNumericCharacters.charAt(i)) * (10 - i)
  }
  let remainder = sum % 11
  let firstDigit = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(removeNonNumericCharacters.charAt(9)) !== firstDigit) {
    return { isValid: false, message: ERROR_MESSAGES_CPF.INVALID_CPF_DIGIT_1 }
  }

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(removeNonNumericCharacters.charAt(i)) * (11 - i)
  }
  remainder = sum % 11
  let secondDigit = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(removeNonNumericCharacters.charAt(10)) !== secondDigit) {
    return { isValid: false, message: ERROR_MESSAGES_CPF.INVALID_CPF_DIGIT_2 }
  }

  return { isValid: true }
}

const validateDate = (date) => {
  if (checkEmptyField(date)) return { isValid: false, message: ERROR_MESSAGES_DATES.EMPTY_DATE };

  const checkDateIsCorrectFormat = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(date)
  if (!checkDateIsCorrectFormat) return { isValid: false, message: ERROR_MESSAGES_DATES.INVALID_DATE_FORMAT }

  const [day, month, year] = date.split('/').map(Number)
  const currentYear = new Date().getFullYear()
  if (year < 1900 || year > currentYear) {
    return { isValid: false, message: ERROR_MESSAGES_DATES.INVALID_DATE_YEAR }
  }

  if (month < 1 || month > 12) {
    return { isValid: false, message: ERROR_MESSAGES_DATES.INVALID_DATE_MONTH }
  }

  const lastDayOfMonth = new Date(year, month, 0).getDate()
  if (day < 1 || day > lastDayOfMonth) {
    return { isValid: false, message: ERROR_MESSAGES_DATES.INVALID_DATE_DAY }
  }

  const inputDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (inputDate > today) {
    return { isValid: false, message: ERROR_MESSAGES_DATES.INVALID_DATE_FUTURE }
  }

  return { isValid: true }
}

const validateCNPJ = (cnpj) => {
  const removeNonNumericCharacters = cnpj.replace(/\D/g, '')

  if (removeNonNumericCharacters.length !== 14) {
    return { isValid: false, message: ERROR_MESSAGES_CNPJ.INVALID_CNPJ_LENGTH }
  }

  const checkIfAllDigitsAreTheSame = /^(\d)\1{13}$/.test(removeNonNumericCharacters)
  if (checkIfAllDigitsAreTheSame) {
    return { isValid: false, message: ERROR_MESSAGES_CNPJ.INVALID_CNPJ_EQUAL_DIGITS }
  }

  let sum = 0
  let weight = 5
  for (let i = 0; i < 12; i++) {
    sum += parseInt(removeNonNumericCharacters.charAt(i)) * weight
    weight = weight === 2 ? 9 : weight - 1
  }
  let remainder = sum % 11
  let firstDigit = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(removeNonNumericCharacters.charAt(12)) !== firstDigit) {
    return { isValid: false, message: ERROR_MESSAGES_CNPJ.INVALID_CNPJ_DIGIT_1 }
  }

  sum = 0
  weight = 6
  for (let i = 0; i < 13; i++) {
    sum += parseInt(removeNonNumericCharacters.charAt(i)) * weight
    weight = weight === 2 ? 9 : weight - 1
  }
  remainder = sum % 11
  let secondDigit = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(removeNonNumericCharacters.charAt(13)) !== secondDigit) {
    return { isValid: false, message: ERROR_MESSAGES_CNPJ.INVALID_CNPJ_DIGIT_2 }
  }

  return { isValid: true }
}

const validateEmail = (email) => {
  if (checkEmptyField(email)) return { isValid: false, message: ERROR_MESSAGES_EMAIL.EMPTY_EMAIL };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: ERROR_MESSAGES_EMAIL.INVALID_EMAIL };
  }

  return { isValid: true };
}

export {
  validateCPF,
  checkEmptyField,
  validateDate,
  validateCNPJ,
  validateEmail
}
