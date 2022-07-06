import {db, ObjectId} from "../dbStrategy.js/mongo.js"


async function RegisterGame(req, res){
 const gameData = req.body
 //name, description, category, price, imageURL
 console.log(gameData)
 
 try {
    await db.collection("games").insertOne(gameData)
    res.status(201).send(gameData)

 } catch (error) {
    return res.sendStatus(500)
 }
}

async function getGames(req, res){
   try {
      const games = await db.collection("games").find().toArray()
      res.status(200).send(games)
   } catch (error) {
      return res.sendStatus(500)
   }
}


export {RegisterGame, getGames}