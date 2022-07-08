import { db, ObjectId } from "../dbStrategy/mongo.js";

export async function AddOrderHistory(req, res) {
  const { name, cpf, products, total, address, payment, date } = req.body;
  const { id } = res.locals;

  try {
    await db
      .collection("orders")
      .insertOne({
        name,
        cpf,
        products,
        total,
        address,
        payment,
        date,
        userId: new ObjectId(id),
      });

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function ListOrdersHistory(req, res) {
  // const { id } = res.locals;

  try {
    const productsCart = await db.collection("orders").find({}).toArray();

    res.send(productsCart);
  } catch (error) {
    res.sendStatus(500);
  }
}
