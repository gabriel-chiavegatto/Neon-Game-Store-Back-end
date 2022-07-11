import { db, ObjectId } from "../dbStrategy/mongo.js";

export async function AddProductCart(req, res) {
  const { name, description, price, imageURL } = req.body;
  const {cartStatus} = req.query
  const { id } = res.locals;

  try {
    await db.collection("cart").insertOne({
      name,
      description,
      price,
      imageURL,
      userId: new ObjectId(id),
    });

    await db.collection("games").updateOne({_id: ObjectId(id)}, {
      $set:{inCart:cartStatus}
    })


    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function DeleteProductCart(req, res) {
  const  {id}  = req.params;
  console.log(req.params)
  console.log(id);
  try {
    await db.collection("cart").deleteOne({ _id: new ObjectId (id) });

    const productsCart = await db.collection("cart").find({}).toArray();
    console.log(productsCart);
    res.status(200).send(productsCart);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function ListCart(req, res) {
  // const { id } = res.locals;

  try {
    const productsCart = await db.collection("cart").find({}).toArray();

    res.send(productsCart);
  } catch (error) {
    res.sendStatus(500);
  }
}


export async function DeleteProductsCart(req, res) {
  try {
    await db.collection("cart").deleteMany({});

    const productsCart = await db.collection("cart").find({}).toArray();
    console.log(productsCart);
    res.status(200).send(productsCart);
  } catch (error) {
    res.sendStatus(500);
  }
}