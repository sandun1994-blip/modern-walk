"use client";

import LoadingPage from "@/components/LoadingPage";
import { useProducts } from "@/services/quires";

import Slider from "@/components/Slider";
import { Product } from "@/types/types";
import ProductCard from "@/components/ProductCard ";

const Produts = () => {
  const { data, isLoading, isPending } = useProducts();

  if (isLoading) {
    return <LoadingPage />;
  }
  console.log(data);
  return (
    <>
    <Slider products={data?.data || []}/>     
    </>
  );

};

export default Produts;
