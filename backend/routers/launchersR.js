import { Router } from "express";
import { addLauncher, getLaunchers, getLauncherById, editLauncher } from "../controllers/launchersC.js";
import { airForceAuth, authUser, intelligenceCorpsAuth } from "../middlewares/usersM.js";

const router = Router()

router.get('/',authUser, intelligenceCorpsAuth, getLaunchers)
router.get('/:id', authUser, intelligenceCorpsAuth, getLauncherById)
router.post('/', authUser, intelligenceCorpsAuth, addLauncher)
router.put('/update_launcher', authUser, airForceAuth, editLauncher)

export default router
