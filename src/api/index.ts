import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: `http://10.0.2.2:8080/gerenciamento-de-compras/`,
});
