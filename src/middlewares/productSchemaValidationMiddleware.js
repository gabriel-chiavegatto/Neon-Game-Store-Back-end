import {
  cartSchema,
  checkoutSchema,
  orderSchema,
} from "../schemas/productSchema.js";

export async function ValidateCart(req, res, next) {
  const validation = cartSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    console.log(validation.error.details);
    return res.sendStatus(422);
  }

  next();
}

export async function ValidateCheckout(req, res, next) {
  const validation = checkoutSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    console.log(validation.error.details);
    return res.sendStatus(422);
  }

  next();
}

export async function ValidateOrder(req, res, next) {
  const validation = orderSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    console.log(validation.error.details);
    return res.sendStatus(422);
  }

  next();
}
