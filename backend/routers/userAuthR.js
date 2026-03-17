import { Router } from "express";
import { getUsers, addUser, editUser, removeUser, userLogin, getUserloggedIn } from "../controllers/usersC.js";
import { adminAuth, authUser } from "../middlewares/usersM.js";

const router = Router()

router.post('/register/create', authUser, adminAuth, addUser)
router.put('/register/update:id', authUser, adminAuth, editUser)
router.delete('/register/delete/:id', authUser, adminAuth, removeUser)
router.post('/login', userLogin )
router.get('/getUser', authUser, getUserloggedIn )
router.get('/getAllUsers',authUser, adminAuth, getUsers)

export default router