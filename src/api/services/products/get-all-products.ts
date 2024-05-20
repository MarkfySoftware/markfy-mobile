import { IProduct } from "@/src/types/Product";
import { api } from "../..";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await api.get("/item");

  return response.data as IProduct[];
};
