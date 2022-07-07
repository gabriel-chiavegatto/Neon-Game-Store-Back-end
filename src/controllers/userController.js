import { db, ObjectId } from "../dbStrategy.js/mongo.js";
import joi from 'joi';

async function signUp(req, res) {
    const user = req.body;
    console.log('esse é o user: ',user);

    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    });

    const validation = userSchema.validate(user, {abortEarly: false});

    if (validation.error){
        console.log(validation.error.details);
        res.sendStatus(406);
        return;
    }
    try {
        const repeatUser = await db.collection("users").findOne({email: user.email});
        if(repeatUser){
            res.status(409).send("Existing user");
            return;
        }

        await db.collection("users").insertOne(user);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(401);
    }
}

async function signIn(req, res) {

}
export { signIn, signUp }