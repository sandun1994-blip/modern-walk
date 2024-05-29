"use client";
import CategoryCard from "@/components/CategoryCard";
import { useCategories } from "@/services/quires";
import React from "react";

const Categories = () => {
  const { data } = useCategories();



  return (
    <>
      {data?.data ||
        [].map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
    </>
  );
};

export default Categories;
