import { v4 as uuid } from "uuid";
import { store } from "../data/store.js";



export const getBills = (req, res) => {
  try {
    const bills = store.getBills();
    res.status(200).json(bills);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bills" });
  }
};

export const createBill = (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Items required" });
  }

  try {
    let subtotal = 0;

    const billItems = items.map(item => {
      if (!item.name || !item.price || item.price <= 0 || !item.quantity || item.quantity <= 0) {
        throw new Error("Invalid item data");
      }

      const total = item.price * item.quantity;
      subtotal += total;

      return {
        ...item,
        total
      };
    });

    const tax = +(subtotal * 0.05).toFixed(2);
    const grandTotal = +(subtotal + tax).toFixed(2);

    const bills = store.getBills();

    const bill = {
      id: uuid(),
      items: billItems,
      subtotal,
      tax,
      grandTotal,
      createdAt: new Date()
    };

    bills.push(bill);
    store.saveBills(bills);

    res.status(201).json(bill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
