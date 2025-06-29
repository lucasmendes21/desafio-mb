function successResponse(res, data, statusCode = 200) {
  res.status(statusCode).json({
    message: 'Success',
    data,
  })
}

function errorResponse(res, message, statusCode = 400) {
  res.status(statusCode).json({
    message,
  })
}

export { successResponse, errorResponse }