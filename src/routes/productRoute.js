import {Router} from "express"
import { RegisterGame, getGames, getGame, DeleteGame } from "../controllers/gameController.js"

const route = Router()

route.post("/game", RegisterGame)
route.get("/game/:id", getGame)
route.get("/games", getGames)
route.delete("/game/:id", DeleteGame)

export default route


