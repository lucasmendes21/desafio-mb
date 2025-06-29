import express from 'express'
import userRouter from './router/user.js'

const app = express()

app.use(express.json())

app.use(userRouter)

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})
