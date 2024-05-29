
import { useProductByCategory } from "@/services/quires";
import { Metadata } from "next";
import CategoryItems from "./_components/CategoryItems";


export const metadata: Metadata = {
  title: "Category Page",
  description: "Developed by SANDUN",
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
 

  return <CategoryItems category={params.category}/>;
};

export default CategoryPage;
