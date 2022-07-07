import {Router} from "express"
import { RegisterGame, getGames, getGame, DeleteGame } from "../controllers/gameController.js"

const router = Router()

router.post("/game", RegisterGame)
router.get("/games", getGames)
router.get("/game/:id", getGame)
router.delete("/game/:id", DeleteGame)


export default router


