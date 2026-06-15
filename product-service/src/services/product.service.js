import Product from "../models/product.model.js";

export async function findProducts() {
    return await Product.find();
}

export async function addProduct(product) {
    return await Product.create(product);
}