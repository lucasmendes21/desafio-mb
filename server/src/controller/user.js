function createUser(req, res) {
  res.status(201).json({
    message: 'Usuário criado com sucesso!',
    data: {
      ...req.body,
      password: '********',
    },
  })
}

export { createUser }
