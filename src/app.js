import express from "express";
import productRoutes from "../routes/product.routes.js";
import billRoutes from "../routes/bill.routes.js";
import dotenv from "dotenv";


const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/bills", billRoutes);

//Installing env files here
dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});