import { errorResponse } from '../response/response.js'
import { validateEmail, checkEmptyField, validateDate, validateCPF, validateCNPJ } from '../util/validation.js'
import { PERSON_TYPES, ERROR_MESSAGES, PHYSICAL_PERSON_VALIDATIONS, LEGAL_PERSON_VALIDATIONS } from '../util/constants.js'

const createUserValidation = (req, res, next) => {
  if (!req.body || typeof req.body !== 'object') {
    return errorResponse(res, ERROR_MESSAGES.INVALID_REQUEST_BODY)
  }

  const { personType = '' } = req.body

  if (checkEmptyField(personType)) {
    return errorResponse(res, ERROR_MESSAGES.PERSON_TYPE_REQUIRED)
  }

  if (personType !== PERSON_TYPES.FISICA && personType !== PERSON_TYPES.JURIDICA) {
    return errorResponse(res, ERROR_MESSAGES.INVALID_PERSON_TYPE)
  }

  if (personType === PERSON_TYPES.FISICA) {
    const { email, cpf, dateOfBirth } = req.body

    for (const validation of PHYSICAL_PERSON_VALIDATIONS) {
      const fieldValue = req.body[validation.field]
      if (checkEmptyField(fieldValue)) {
        return errorResponse(res, validation.message)
      }
    }

    if (!validateEmail(email)) {
      return errorResponse(res, ERROR_MESSAGES.INVALID_EMAIL)
    }

    const { isValid, message } = validateDate(dateOfBirth)
    if (!isValid) {
      return errorResponse(res, message)
    }

    const { isValid: isCPFValid, message: cpfMessage } = validateCPF(cpf)
    if (!isCPFValid) {
      return errorResponse(res, cpfMessage)
    }
  } else {
    const { email, cnpj, companyOpeningDate } = req.body

    for (const validation of LEGAL_PERSON_VALIDATIONS) {
      const fieldValue = req.body[validation.field]
      if (checkEmptyField(fieldValue)) {
        return errorResponse(res, validation.message)
      }
    }

    if (!validateEmail(email)) {
      return errorResponse(res, ERROR_MESSAGES.INVALID_EMAIL)
    }

    const { isValid, message } = validateDate(companyOpeningDate)
    if (!isValid) {
      return errorResponse(res, message)
    }

    const { isValid: isCNPJValid, message: cnpjMessage } = validateCNPJ(cnpj)
    if (!isCNPJValid) {
      return errorResponse(res, cnpjMessage)
    }
  }

  next()
}

export { createUserValidation }
