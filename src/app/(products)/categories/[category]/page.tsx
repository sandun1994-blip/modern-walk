
import { useProductByCategory } from "@/services/quires";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Category Page",
  description: "Developed by SANDUN",
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { data } = useProductByCategory(params.category);

  console.log(data, "id");

  return <div>categry id</div>;
};

export default CategoryPage;
