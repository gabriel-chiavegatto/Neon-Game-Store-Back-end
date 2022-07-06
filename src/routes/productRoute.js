import {Router} from "express"
import { RegisterGame, getGames } from "../controllers/gameController.js"

const route = Router()

route.post("/game", RegisterGame)
route.get("/games", getGames)

export default route


