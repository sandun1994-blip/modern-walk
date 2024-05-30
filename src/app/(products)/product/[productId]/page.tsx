
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
