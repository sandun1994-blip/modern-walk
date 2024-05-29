"use client";

import CardItem from "@/components/CardItem";
import LoadingPage from "@/components/LoadingPage";
import { useProductByCategory } from "@/services/quires";
import Link from "next/link";

const CategoryItems = ({ category }: { category: string }) => {
  const { data, isPending } = useProductByCategory(category);
  const encodedCategory = decodeURIComponent(category);
  if (isPending) {
    return <LoadingPage />;
  }
  return (
    <>
     <h1 className="mt-7 ml-40 md:ml-[10%] text-start text-3xl font-bold w-[80%] capitalize">{encodedCategory}</h1>
    <div className="w-[100%] flex mx-auto  flex-wrap justify-center items-center gap-10 py-10">
      {data?.data.map((item) => (
        <Link href={`/product/${item.id}`} key={item.id}>
          {" "}
          <CardItem item={item} textCount={20} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default CategoryItems;
