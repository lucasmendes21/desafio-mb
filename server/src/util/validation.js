import { ERROR_MESSAGES_DATES, ERROR_MESSAGES_CPF, ERROR_MESSAGES_CNPJ } from './constants.js'

function validateEmail(email) {
  if (typeof email !== 'string') {
    return false
  }

  if (email.trim() === '') {
    return false
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function checkEmptyField(field) {
  return field === '' || field === undefined || field === null
}

function validateDate(date) {
  if (typeof date !== 'string') return { isValid: false, message: ERROR_MESSAGES_DATES.INVALID_DATE }

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

function validateCPF(cpf) {
  if (typeof cpf !== 'string') return { isValid: false, message: ERROR_MESSAGES_CPF.INVALID_CPF_TYPE }

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

function validateCNPJ(cnpj) {
  if (typeof cnpj !== 'string') return { isValid: false, message: ERROR_MESSAGES_CNPJ.INVALID_CNPJ_TYPE }

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

export {
  validateEmail,
  checkEmptyField,
  validateDate,
  validateCPF,
  validateCNPJ
}
