import axios from "axios";

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE,
});

export const productApi = axios.create({
  baseURL: import.meta.env.VITE_PRODUCT_SERVICE,
});

export const orderApi = axios.create({
  baseURL: import.meta.env.VITE_ORDER_SERVICE,
});