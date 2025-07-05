import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();
app.use(express.json()); //this is a middleware which allows us to accept JSON data in the body
app.get("/", (req,res)=>{
    res.send("Server is Ready!!!!!");
});

app.post("/api/products", async(req,res) => {

    const product = req.body; //user body
    if(!product.name || !product.image || !product.description || !product.price){
        return res.status(400).json({success: false, message: "please fill all the fields"});
    }

    const newProduct = new Product(product);//await Product.create(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct}) //201 means something is created
    } catch (error) {
        console.error("Error in creating the product:",error.message);
        res.status(500).json({success:false,message: "internal server error"}) //500 is for internal server errors
    }
});

app.delete("/api/products/:id", async (req,res) => {
    const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("error in deleting product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
    
});

app.listen(5000, () =>{
    connectDB();
    console.log("Server started at http://localhost:5000");
})
