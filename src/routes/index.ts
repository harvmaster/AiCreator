import Express from 'express'

import user from './user'
import model from './model'

const router = Express.Router()

router.use('/user', user)
router.use('/model', model)

export default router