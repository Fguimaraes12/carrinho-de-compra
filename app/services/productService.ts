import { api } from "../lib/api/api";
import { ProductsResponse } from "../types/product";

export const getProducts = async () => {
  const { data } = await api.get<ProductsResponse>("/products");
  return data.products;
};
