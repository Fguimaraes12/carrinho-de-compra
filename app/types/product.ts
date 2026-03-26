export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  stock: number;
  tags: string[];
  images: string[];
}

export type ProductsResponse = {
  products: Product[];
};
