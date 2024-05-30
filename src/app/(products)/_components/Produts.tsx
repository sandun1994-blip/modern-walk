"use client";

import LoadingPage from "@/components/LoadingPage";
import { useProducts } from "@/services/quires";
import Slider from "@/components/Slider";


const Produts = () => {
  const { data, isLoading, isPending } = useProducts();

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <>
     <h1 className="mt-7 ml-40 md:ml-3 text-start text-3xl md:text-4xl font-bold  text-gray-800  w-[80%]">Flash Sale</h1>
    <Slider products={data?.data || []}/>     
    </>
  );

};

export default Produts;
