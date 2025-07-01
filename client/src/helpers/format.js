const formatDate = (date) => {
  if (!date) return ''
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

const formatDateToISO = (date) => {
  if (!date) return ''
  const [day, month, year] = date.split('/')
  return `${year}-${month}-${day}`
}

export { formatDate, formatDateToISO }
