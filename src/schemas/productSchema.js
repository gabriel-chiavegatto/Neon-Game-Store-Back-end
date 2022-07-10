import joi from "joi";

export const cartSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  imageURL: joi.string().uri().required(),
});

export const checkoutSchema = joi.object({
  products: joi.array().min(1).required(),
  total: joi.number().required(),
});

export const orderSchema = joi.object({
  name: joi.string().required(),
  cpf: joi.string().required(),
  products: joi.array().min(1).required(),
  total: joi.number().required(),
  address: joi.string().required(),
  payment: joi
    .string()
    .valid("Cartão de crédito", "Cartão de débito", "Boleto")
    .required(),
  date: joi.string().required(),
});
