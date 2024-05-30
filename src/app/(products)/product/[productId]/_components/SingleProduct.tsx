"use client";

import LoadingPage from "@/components/LoadingPage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductById } from "@/services/quires";
import { Product } from "@/types/types";
import { truncatedText } from "@/utils/helperText";
import { getColor } from "@/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const SingleProduct = ({ productId }: { productId: string }) => {
  const { data, isPending } = useProductById(productId);
  const item = data?.data as Product;
  if (isPending) {
    return <LoadingPage />;
  }

  return (
    <div className="flex justify-center items-center h-[90vh]">
      {" "}
      <Card
        className="h-[80%] w-[50%] rounded-2xl shadow-xl flex flex-col justify-between
    hover:bg-gray-100 hover:scale-105 hover:cursor-pointer "
      >
        <CardHeader>
          <CardTitle className="font-bold text-md md:text-xl xl:text-2xl px-4 pt-4 mb-2 text-center text-gray-900">
            {truncatedText(item.title)}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex items-center justify-center py-10">
          <Image
            src={item.image}
            alt="Product"
            className="aspect-[1]"
            height="350"
            width="350"
          />
        </CardContent>

        <CardFooter
          className={clsx(
            `flex justify-between flex-col py-8 rounded-2xl shadow-2xl min-h-[200px] gap-4 overflow-hidden `
          )}
          style={{ backgroundColor: getColor(item.category) }}
        >
          <span className="text-white font-bold text-2xl text-center md:text-3xl">
            Rs {item.price}
          </span>
          <CardDescription className="text-black text-sm md:text-md hidden md:block text-center ">
            {truncatedText(item.description, 600)}
          </CardDescription>

          <CardDescription className="text-black text-sm md:text-md  md:hidden text-center">
            {truncatedText(item.description, 60)}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleProduct;
