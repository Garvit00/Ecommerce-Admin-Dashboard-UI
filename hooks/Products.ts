import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types";


//fetch all products
const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

//fetch product by id
const fetchProductById = async (id: string | number): Promise<Product> => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

export const useProductById = (id: string | number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};

//fetch all categories
const fetchCategories = async (): Promise<string[]> => {
  const res = await axios.get("https://fakestoreapi.com/products/categories");
  return res.data;
};

export const useCategories = () => {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

//fetch products by category
const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return res.data;
};

export const useProductsByCategory = (category: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
  });
};
