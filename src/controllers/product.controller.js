import { v4 as uuid } from "uuid";
import { store } from "../data/store.js";

export const getProducts = (req, res) => {
  const products = store.getProducts();
  res.status(200).json(products);
};

export const addProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price || price <= 0) {
    return res.status(400).json({ message: "Invalid product data" });
  }

  const products = store.getProducts();

  const product = {
    id: uuid(),
    name,
    price,
    createdAt: new Date()
  };

  products.push(product);
  store.saveProducts(products);

  res.status(201).json(product);
};
