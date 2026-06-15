import { addProduct, findProducts } from "../services/product.service.js";


export async function getAllProducts(req,res,next) {
    const products = await findProducts();
    return res.status(200).json(products);
}

export async function createProduct(req,res,next) {
    const product = await addProduct(req.body);
    return res.status(201).json(product);
}