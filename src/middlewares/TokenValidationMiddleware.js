// import { db } from "../dbStrategy/mongo.js";
// import jwt from "jsonwebtoken";

// export async function TokenValidationMiddleware(req, res, next) {
//   const authorization = req.headers.authorization;
//   const token = authorization?.replace("Bearer ", "").trim();
//   const secretKey = process.env.JWT_SECRET;

//   try {
//     const data = jwt.verify(token, secretKey);
//   } catch {
//     res.sendStatus(401);
//   }

//   res.locals.id = data;
//   next();
// }
// ----------------------------------------------------------------
// export async function TokenValidationMiddleware(req, res, next) {
//   const authorization = req.headers.authorization;
//   const token = authorization?.replace("Bearer ", "").trim();

//   if (!token) {
//     return res.sendStatus(401);
//   }

//   try {
//     const session = await db.collection("sessions").findOne({ token });

//     if (!session) {
//       return res.sendStatus(401);
//     }

//     const user = await db.collection("users").findOne({
//       _id: session.userId,
//     });

//     if (!user) {
//       return res.sendStatus(401);
//     }

//     res.locals.user = user;
//     next();
//   } catch (error) {
//     res.sendStatus(500);
//   }
// }
