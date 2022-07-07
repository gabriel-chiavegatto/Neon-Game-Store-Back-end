import {Router} from "express"
import { RegisterGame, getGames, DeleteGame } from "../controllers/gameController.js"

const router = Router()

router.post("/game", RegisterGame)
router.get("/games", getGames)
router.delete("/game/:id", DeleteGame)


export default router


