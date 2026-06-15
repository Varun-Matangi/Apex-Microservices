import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  price: Number,
  brand: String,
});

const Product = mongoose.model('Products',productSchema,'products');
export default Product;