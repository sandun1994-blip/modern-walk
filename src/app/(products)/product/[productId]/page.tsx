import { Metadata } from 'next';
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: "Product Page",
  description: "Developed by SANDUN",
};


const ProductPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>ProductPage 1</div>
  )
}

export default ProductPage