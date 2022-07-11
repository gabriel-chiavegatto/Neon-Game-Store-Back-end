import { db, ObjectId } from "../dbStrategy/mongo.js";
import joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function signUp(req, res) {
    const passwordCrypt = bcrypt.hashSync(req.body.password, 10);
    const user = { ...req.body, password: passwordCrypt };
  
  const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  const validation = userSchema.validate(user, { abortEarly: false });

  if (validation.error) {
    console.log(validation.error.details);
    res.sendStatus(406);
    return;
  }
  try {
    const repeatUser = await db
      .collection("users")
      .findOne({ email: user.email });
    if (repeatUser) {
        return res.status(409).send("Existing user");
    }
    await db.collection("users").insertOne(user);
    res.sendStatus(201);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function signIn(req, res) {
  const user = req.body;
  console.log("esse é o user tentando logar: ", user,  { abortEarly: false });

  const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

    try {
        const validation = userSchema.validate(user);
        if (validation.error) {
            console.log(validation.error.details);
            res.sendStatus(406);
            return;
        }

        const userOnDb = await db.collection('users').findOne({ email: user.email });
        const checkPassword = bcrypt.compareSync(user.password, userOnDb.password);
        const secretKey = process.env.JWT_SECRET;
        console.log(userOnDb)
       
        if(userOnDb && checkPassword){
             const token = jwt.sign({id:userOnDb._id}, secretKey);
             res.status(202).send({name:userOnDb.name, token});
        }else{
            res.sendStatus(401)
        }
         
        
    } catch (error) {
         res.status(400).send(error);
    }
}

export { signIn, signUp };
