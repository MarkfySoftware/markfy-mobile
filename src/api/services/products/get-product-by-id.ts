// src/api/getProductById.ts
import { IProduct } from "@/src/types/Product";
import { api } from "../..";

export const getProductById = async (id: string): Promise<IProduct> => {
  const req = await api.get(`/item/${id}`);
  return req.data as IProduct;
};
