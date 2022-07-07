import { db, ObjectId } from "../dbStrategy.js/mongo.js";

export async function AddProductCart(req, res) {
  const { name, description, price, imageURL } = req.body;
  const { id } = res.locals;

  try {
    await db.collection("cart").insertOne({
      name,
      description,
      price,
      imageURL,
      userId: new ObjectId(_id),
    });

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function DeleteProductCart(req, res) {
  const { id } = res.locals;
  const { _id } = req.body;

  try {
    await db.collection("cart").deleteOne({ _id: new ObjectId(_id) });

    const productsCart = await db
      .collection("cart")
      .find({ userId: new ObjectId(id) })
      .toArray();

    res.status(200).send(productsCart);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function ListCart(req, res) {
  const { id } = res.locals;

  try {
    const productsCart = await db
      .collection("cart")
      .find({ userId: new ObjectId(id) })
      .toArray();

    res.send(productsCart);
  } catch (error) {
    res.sendStatus(500);
  }
}
