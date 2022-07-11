import { db, ObjectId } from "../dbStrategy/mongo.js";

export async function AddOrderCheckout(req, res) {
  const { products, total } = req.body;
  const { id } = res.locals;

  try {
    await db
      .collection("checkout")
      .insertOne({ products, total, userId: new ObjectId(id) });

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function ListCheckout(req, res) {
  // const { id } = res.locals;

  try {
    const checkoutOrder = await db.collection("checkout").find({}).toArray();

    res.send(checkoutOrder);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function DeleteCheckout(req, res) {
  try {
    await db.collection("checkout").deleteMany({});

    const productsCheckout = await db.collection("checkout").find({}).toArray();
    console.log(productsCheckout);
    res.status(200).send(productsCheckout);
  } catch (error) {
    res.sendStatus(500);
  }
}
