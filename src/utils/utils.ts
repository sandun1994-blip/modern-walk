import { categories } from "@/config";

export const getColor = (category: string) => {
  const color = categories.find((c) => c.cat === category)?.color ?? "#03dce3";

  return color;
};
