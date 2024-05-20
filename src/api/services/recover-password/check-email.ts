import { api } from "../..";

export const checkEmail = async (email: string) => {
  return await api.post("/redefinir-senha/enviar-email", { email });
};
