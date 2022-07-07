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
   const {category} = req.query

   try {
      const games = await db.collection("games").find().toArray()
      if(category === "Todos"){
            res.status(200).send(games)
         }
      const filter = await db.collection("games").find({categories:category}).toArray()
      console.log(filter)
     res.status(200).send(filter)
      
   } catch (error) {
      return res.sendStatus(500)
   }
}

async function getGame(req, res){
   const id = req.params.id
   console.log("oi")
   try {
      const game = await db.collection("games").findOne({_id: ObjectId(id)})
      res.status(200).send(game)
   } catch (error) {
      return res.sendStatus(500)
   }
}

async function DeleteGame(req, res){
   const idGame = req.params.id
   try {
      await db.collection("games").deleteOne({_id: ObjectId(idGame)})
      res.sendStatus(200)

   } catch (error) {
      return res.sendStatus(500)
   }
}


export {RegisterGame, getGames, getGame, DeleteGame}