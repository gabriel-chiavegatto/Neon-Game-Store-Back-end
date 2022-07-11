import jwt from "jsonwebtoken";

export async function TokenValidationMiddleware(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;
  const { id } = jwt.verify(token, secretKey);
<<<<<<< HEAD
  
  try {
    
    if(!token || !id){
      return res.sendStatus(401)
  }
=======

  try {
    console.log(id);
    console.log("oii");
>>>>>>> c65ed2953e59b44b996adcc5db584ce23a806a3f

    if (!token || !id) {
      return res.sendStatus(401);
    }
  } catch {
    res.sendStatus(500);
  }

  res.locals.id = id;
  console.log(res.locals.id)
  next();
}

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
