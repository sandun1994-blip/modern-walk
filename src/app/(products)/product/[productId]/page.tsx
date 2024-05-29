import CardItem from "@/components/CardItem";
import LoadingPage from "@/components/LoadingPage";
import { Card } from "@/components/ui/card";
import { useProductById } from "@/services/quires";

import { Product } from "@/types/types";
import { Metadata } from "next";
import React from "react";
import SingleProduct from "./_components/SingleProduct";

type Props = {};

export const metadata: Metadata = {
  title: "Product Page",
  description: "Developed by SANDUN",
};

const ProductPage = ({ params }: { params: { productId: string } }) => {
  return <SingleProduct productId={params.productId} />;
};

export default ProductPage;
