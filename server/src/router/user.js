import express from 'express'
import { createUser } from '../controller/user.js'
import { createUserValidation } from '../validation/user.js'

const router = express.Router()

router.post('/registration', createUserValidation, createUser)

export default router
