"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Product } from "@/types/types";
import ProductCard from "./ProductCard ";
import { Button } from "./ui/button";
import { title } from "process";
import { truncatedText } from "@/utils/helperText";
import Image from "next/image";

const Slider = ({ products }: { products: Product[] }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      className="w-full max-w-xs  md:max-w-[800px] lg:max-w-[1480px]"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1 p-10 h-[600px]">
        {(products || []).map((item, index) => (
          <CarouselItem key={index} className=" pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="max-h-[650px] rounded-2xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-sm">
                    {truncatedText(item.title,35)}
                  </CardTitle>
                 
                </CardHeader>
                <CardContent className="flex  items-center justify-center  py-5">
                  
                    <Image
                      src={item.image}
                      alt="Product"
                      className="aspect-[1]"
                      height="150"
                      width="150"
                    />
                 
                </CardContent>
                <CardFooter className="flex justify-between flex-col gap-3 bg-red-400 py-5 rounded-2xl shadow-2xl">
                  <span className="text-2xl text-blue-400 font-bold">
                   Rs {item.price}
                  </span>
                <CardDescription>
                   {truncatedText(item.description,100)}
                  </CardDescription>

                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;

//   <ProductCard
//   key={item.id}
//   id={item.id}
//   title={item.title}
//   price={item.price}
//   imgUrl={item.image}
//   description={item.description}
//   category={item.category}
// />
