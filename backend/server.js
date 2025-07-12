import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; //using environment variable for port, if not set then default to 5000

const __dirname = path.resolve(); //to get the current directory name

app.use(express.json()); //this is a middleware which allows us to accept JSON data in the body

app.use("/api/products", productRoutes); //mounting the product routes

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); //serving static files from the frontend build directory

  //   app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); //serving the index.html file for any route
  //   });
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
