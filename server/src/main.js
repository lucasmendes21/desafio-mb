import express from 'express'
import corsRouter from './router/cors.js'
import userRouter from './router/user.js'
import frontendRouter from './router/frontend.js'

const app = express()

app.use(express.json())

app.use(corsRouter)
app.use(userRouter)
app.use(frontendRouter)

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})
