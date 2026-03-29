export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export type ProductsResponse = {
  products: Product[];
};
