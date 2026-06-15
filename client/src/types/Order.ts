export interface Order {
  orderId: string;
  name: string;
  email: string;
  productId: string;
  productName: string | null;
  productDescription: string | null;
  quantity: number;
}