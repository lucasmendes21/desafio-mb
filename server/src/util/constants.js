const PERSON_TYPES = {
  FISICA: 'fisica',
  JURIDICA: 'juridica'
}

const ERROR_MESSAGES = {
  INVALID_REQUEST_BODY: 'Dados enviados no body da requisição são inválidos!',
  PERSON_TYPE_REQUIRED: 'Tipo de pessoa é um campo obrigatório.',
  INVALID_PERSON_TYPE: 'O tipo de pessoa informado não é válido.',
  INVALID_EMAIL: 'Email inválido.'
}

const ERROR_MESSAGES_DATES = {
  INVALID_DATE: 'Data inválida. O tipo de dado informado não é uma string.',
  INVALID_DATE_FORMAT: 'Data inválida. O formato da data informada não é válido. Use o formato DD/MM/YYYY.',
  INVALID_DATE_YEAR: 'Data inválida. O ano informado não está no intervalo válido (1900-2025).',
  INVALID_DATE_FUTURE: 'Data inválida. A data informada não pode ser futura.',
  INVALID_DATE_PAST: 'Data inválida. A data informada não pode ser anterior a 1900.',
  INVALID_DATE_MONTH: 'Data inválida. O mês informado não está no intervalo válido (1-12).',
  INVALID_DATE_DAY: 'Data inválida. O dia informado não está no intervalo válido.',
}

const ERROR_MESSAGES_CPF = {
  INVALID_CPF_TYPE: 'CPF inválido. O tipo de dado informado não é uma string.',
  INVALID_CPF_LENGTH: 'CPF inválido. O CPF deve conter 11 dígitos.',
  INVALID_CPF_EQUAL_DIGITS: 'CPF inválido. O CPF não pode conter todos os dígitos iguais.',
  INVALID_CPF_DIGIT_1: 'CPF inválido. O primeiro dígito verificador informado não é válido.',
  INVALID_CPF_DIGIT_2: 'CPF inválido. O segundo dígito verificador informado não é válido.',
}

const ERROR_MESSAGES_CNPJ = {
  INVALID_CNPJ_TYPE: 'CNPJ inválido. O tipo de dado informado não é uma string.',
  INVALID_CNPJ_LENGTH: 'CNPJ inválido. O CNPJ deve conter 14 dígitos.',
  INVALID_CNPJ_EQUAL_DIGITS: 'CNPJ inválido. O CNPJ não pode conter todos os dígitos iguais.',
  INVALID_CNPJ_DIGIT_1: 'CNPJ inválido. O primeiro dígito verificador informado não é válido.',
  INVALID_CNPJ_DIGIT_2: 'CNPJ inválido. O segundo dígito verificador informado não é válido.',
}

const PHYSICAL_PERSON_VALIDATIONS = [
  { field: 'name', message: 'Nome é um campo obrigatório.' },
  { field: 'email', message: 'Email é um campo obrigatório.' },
  { field: 'cpf', message: 'CPF é um campo obrigatório.' },
  { field: 'dateOfBirth', message: 'Data de nascimento é um campo obrigatório.' },
  { field: 'phone', message: 'Telefone é um campo obrigatório.' },
  { field: 'password', message: 'Senha é um campo obrigatório.' }
]

const LEGAL_PERSON_VALIDATIONS = [
  { field: 'companyName', message: 'Razão social é um campo obrigatório.' },
  { field: 'email', message: 'Email é um campo obrigatório.' },
  { field: 'cnpj', message: 'CNPJ é um campo obrigatório.' },
  { field: 'companyOpeningDate', message: 'Data de abertura da empresa é um campo obrigatório.' },
  { field: 'phone', message: 'Telefone é um campo obrigatório.' },
  { field: 'password', message: 'Senha é um campo obrigatório.' }
]

export {
  PERSON_TYPES,
  ERROR_MESSAGES,
  PHYSICAL_PERSON_VALIDATIONS,
  LEGAL_PERSON_VALIDATIONS,
  ERROR_MESSAGES_DATES,
  ERROR_MESSAGES_CPF,
  ERROR_MESSAGES_CNPJ
}
