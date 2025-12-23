import fs from "fs";
import path from "path";

const productsPath = path.join("data", "products.json");
const billsPath = path.join("data", "bills.json");

// Read JSON file
const readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

// Write JSON file
const writeJSON = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const store = {
  getProducts: () => readJSON(productsPath),
  saveProducts: (products) => writeJSON(productsPath, products),
  getBills: () => readJSON(billsPath),
  saveBills: (bills) => writeJSON(billsPath, bills)
};
