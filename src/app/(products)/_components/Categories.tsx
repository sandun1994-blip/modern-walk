"use client";
import CategoryCard from "@/components/CategoryCard";

import { useCategories } from "@/services/quires";
import React from "react";

const Categories = () => {
  const { data,isLoading } = useCategories();


  if (isLoading) {
    return <></>;
  }

  return (<>
  <h1 className="mt-10 ml-[35%] md:ml-40 text-start text-4xl md:text-4xl font-bold w-[80%] text-gray-800 capitalize ">Categories</h1>
    <div className="flex flex-row py-10 justify-center  w-[100%] items-center gap-10 flex-wrap px-10">
      {data?.data.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
    </>
  );
};

export default Categories;
