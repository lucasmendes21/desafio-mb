import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathToDist = path.join(__dirname, '..', '..', '..', 'dist')
router.use(express.static(path.join(pathToDist)))

router.get('/registration', (req, res) => {
    res.sendFile(path.join(pathToDist, 'index.html'))
})

export default router
