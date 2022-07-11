import { db, ObjectId } from "../dbStrategy/mongo.js";
import joi from "joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function signUp(req, res) {
  const passwordCrypt = bcrypt.hashSync(req.body.password, 10);
  const user = { ...req.body, password: passwordCrypt };
  console.log("esse é o user tentando cadastrar: ", user);

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
      res.status(409).send("Existing user");
      return;
    }

    await db.collection("users").insertOne(user);
    res.sendStatus(201);
  } catch (error) {
    res.status(401).send(error);
  }
}

async function signIn(req, res) {
  const user = req.body;
  console.log("esse é o user tentando logar: ", user);

  const userSchema = joi.object({
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
    const userOnDb = await db
      .collection("users")
      .findOne({ email: user.email });
    const checkPassword = bcrypt.compareSync(user.password, userOnDb.password);

    console.log("usuario encontrado no db", userOnDb);
    console.log("checkpassword", checkPassword);

    if (userOnDb && checkPassword) {
      console.log("td certo");
      const id = userOnDb._id.toString();
      const secretKey = process.env.JWT_SECRET;
      console.log(id);
      // const config = { expiresIn: 60*60*24*30 };
      const token = jwt.sign({ id }, secretKey);
      console.log(token);
      return res.status(202).send(token);
    }
    return res.sendStatus(401);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { signIn, signUp };
