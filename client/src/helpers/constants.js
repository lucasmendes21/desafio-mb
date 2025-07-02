const ERROR_MESSAGES_CPF = {
  EMPTY_CPF: 'CPF é um campo obrigatório',
  INVALID_CPF_LENGTH: 'CPF inválido. O CPF deve conter 11 dígitos.',
  INVALID_CPF_EQUAL_DIGITS: 'CPF inválido. O CPF não pode conter todos os dígitos iguais.',
  INVALID_CPF_DIGIT_1: 'CPF inválido. O primeiro dígito verificador informado não é válido.',
  INVALID_CPF_DIGIT_2: 'CPF inválido. O segundo dígito verificador informado não é válido.',
}

const ERROR_MESSAGES_DATES = {
  EMPTY_DATE: 'Data de nascimento é um campo obrigatório',
  INVALID_DATE_FORMAT: 'Data inválida. O formato da data informada não é válido. Use o formato DD/MM/YYYY.',
  INVALID_DATE_YEAR: 'Data inválida. O ano informado não está no intervalo válido (1900-2025).',
  INVALID_DATE_FUTURE: 'Data inválida. A data informada não pode ser futura.',
  INVALID_DATE_PAST: 'Data inválida. A data informada não pode ser anterior a 1900.',
  INVALID_DATE_MONTH: 'Data inválida. O mês informado não está no intervalo válido (1-12).',
  INVALID_DATE_DAY: 'Data inválida. O dia informado não está no intervalo válido.',
}

const ERROR_MESSAGES_CNPJ = {
  INVALID_CNPJ_LENGTH: 'CNPJ inválido. O CNPJ deve conter 14 dígitos.',
  INVALID_CNPJ_EQUAL_DIGITS: 'CNPJ inválido. O CNPJ não pode conter todos os dígitos iguais.',
  INVALID_CNPJ_DIGIT_1: 'CNPJ inválido. O primeiro dígito verificador informado não é válido.',
  INVALID_CNPJ_DIGIT_2: 'CNPJ inválido. O segundo dígito verificador informado não é válido.',
}

const ERROR_MESSAGES_EMAIL = {
  EMPTY_EMAIL: 'E-mail é um campo obrigatório',
  INVALID_EMAIL: 'O e-mail informado é inválido',
}

export { ERROR_MESSAGES_CPF, ERROR_MESSAGES_DATES, ERROR_MESSAGES_CNPJ, ERROR_MESSAGES_EMAIL }
