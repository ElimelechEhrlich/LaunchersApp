import { Router } from "express";
import { addLauncher, getLaunchers, getLaunchersById } from "../controllers/launchersC.js";

const router = Router()

router.get('/', getLaunchers)
router.get('/:id', getLaunchersById)
router.post('/', addLauncher)

export default router