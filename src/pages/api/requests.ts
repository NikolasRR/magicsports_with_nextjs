import api from "./api";
import { Product, User } from "./types";

async function signIn(data: User) {
  const response = await api.post("/sign-in", data);
  return response;
}

async function logOut() {
  const response = await api.post("/logout", {});
  return response;
}

async function getProducts(page: number): Promise<{ page: Product[], pages: number[] }> {
  const response = await api.get(`/products?limit=24&page=${page}`);
  return response.data
}

const requests = {
  signIn,
  logOut,
  getProducts
};

export default requests;