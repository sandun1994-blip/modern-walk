import { CATEGORY, colorMap } from "@/config";
import { truncatedText } from "@/utils/helperText";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  description: string;
  category: string;
};

function ProductCard({
  id,
  imgUrl,
  price,
  description,
  category,
  title,
}: Props) {
  const color = colorMap[category as CATEGORY];

  return (
    <Link href={`/product/${id}`}>
      <div className="min-w-[330px] md:min-w-[300px] max-w-[60%] flex flex-col justify-between max-h-[400px] 
      rounded-3xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-100 xl:max-w[100%]">
        <div className="font-bold text-xl md:text-xl px-4 pt-10 mb-2 text-center text-gray-900">
          {truncatedText(title,12)}
        </div>

        <div className="py-2  flex justify-center items-center ">
          <Image
            src={imgUrl}
            alt="Product"
            className="aspect-[1]"
            height="1500"
            width="150"
          />
        </div>

        <div
          className="p-6 rounded-t-3xl min-h[350px]"
          style={{ backgroundColor: color }}
        >
          <p className="text-white font-bold text-4xl text-center md:text-3xl">
            Rs {price}
          </p>
          <p className="text-white text-xl text-center md:text-md">
            {truncatedText(description, 80)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
