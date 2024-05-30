import { truncatedText } from "@/utils/helperText";
import { getColor } from "@/utils/utils";
import clsx from "clsx";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { Product } from "@/types/types";
import Image from "next/image";

type Props = { item: Product; textCount: number };

const CardItem = ({ item, textCount }: Props) => {
  return (
    <Card
      className="min-h-[600px] max-h-[600px] max-w-[400px] rounded-2xl shadow-xl flex flex-col justify-between
    hover:bg-gray-100 hover:cursor-pointer hover:scale-105"
    >
      <CardHeader>
        <CardTitle className="font-bold text-xl md:text-xl xl:text-xl px-4 pt-4 mb-2 text-center text-gray-900">
          {truncatedText(item?.title, textCount)}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-center py-4">
        <Image
          src={item.image}
          alt="Product"
          className="aspect-[1]"
          height="150"
          width="150"
          priority
        />
      </CardContent>

      <CardFooter
        className={clsx(
          `flex justify-between flex-col py-8 rounded-2xl shadow-2xl min-h-[200px]`
        )}
        style={{ backgroundColor: getColor(item.category) }}
      >
        <span className="text-white font-bold text-2xl text-center md:text-3xl">
          Rs {item.price}
        </span>
        <CardDescription className="text-black text-md md:text-md text-center font-serif">
          {truncatedText(item.description, textCount * 3)}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
