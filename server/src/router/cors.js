import express from 'express'

const router = express.Router()

const corsRouter = (req, res, next) => {
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}

router.use(corsRouter)

export default router
