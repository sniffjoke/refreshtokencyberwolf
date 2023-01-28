import {Router} from "express";
import auth from "../middleware/auth.js";
import roleCheck from "../middleware/roleCheck.js";

const router = Router()

// router.get('/details', auth, roleCheck(['admin']),(req, res) => {
router.get(
    '/details',
    auth,
    roleCheck(['user']),
    (req, res) => {
    res.status(200).json({message: 'user authenticated.'})
})

export default router
