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
import CardItem from "./CardItem";
import Link from "next/link";

const Slider = ({ products }: { products: Product[] }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      className="w-full max-w-[70%]  md:max-w-[85%] lg:max-w-[80%]"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1 p-10 h-auto">
        {(products || []).map((item, index) => (
          <CarouselItem
            key={index}
            className=" pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4"
          >
            <div className="p-1">
          <Link href={`/product/${item.id}`}>   <CardItem item={item} textCount={20}/></Link> 
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
