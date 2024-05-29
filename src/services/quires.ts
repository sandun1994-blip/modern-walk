import { JewelryItem, Product } from "@/types/types";
import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<{ data: Product[] }> => {
      const { data } = await axios.get(``);

      return data;
    },
  });
}

export function useProductById(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async (): Promise<{ data: Product }> => {
      const { data } = await axios.get(`/${id}`);

      return data;
    },

    enabled: !!id,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<{ data: string[] }> => {
      const { data } = await axios.get(`/categories`);

      return data;
    },
  });
}

export function useProductByCategory(category: string) {
  return useQuery({
    queryKey: ["category", { category }],
    queryFn: async (): Promise<{ data: JewelryItem[] }> => {
      const { data } = await axios.get(`/categories/${category}`);

      return data;
    },
    enabled: !!category,
  });
}
