import {Router} from "express"
import { RegisterGame, getGames } from "../controllers/gameController.js"

const router = Router()

router.post("/game", RegisterGame)
router.get("/games", getGames)

export default router


