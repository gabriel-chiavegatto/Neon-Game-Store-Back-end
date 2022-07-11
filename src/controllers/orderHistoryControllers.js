import { db, ObjectId } from "../dbStrategy/mongo.js";

export async function AddOrderHistory(req, res) {
  const { name, cpf, products, total, address, payment, date } = req.body;
  const { id } = res.locals;
  const orderNumber = (+new Date() * Math.random())
    .toString(36)
    .substring(0, 6);

  try {
    await db.collection("orders").insertOne({
      name,
      cpf,
      products,
      total,
      address,
      payment,
      date,
      orderNumber,
      userId: new ObjectId(id),
    });

    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function ListOrdersHistory(req, res) {
  const { id } = res.locals;

  try {
    const orderHistory = await db
      .collection("orders")
      .find({ userId: new ObjectId(id) })
      .toArray();

    res.send(orderHistory);
  } catch (error) {
    res.sendStatus(500);
  }
}
