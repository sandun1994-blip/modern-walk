import { CATEGORY, colorMap } from "@/config";
import Link from "next/link";

type Props = {
  category: string;
};

function CategoryCard({ category }: Props) {
  const color = colorMap[category as CATEGORY];
  return (
    <Link
      href={`/category/${category}-clothing`}
     
    >
      <div
        className={`relative w-[47%] h-[250px] flex justify-center items-center p-8 rounded-3xl
         shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-lg xl:w-[35%] md:h-[400px]`}
         style={{ backgroundColor: color }}
      >
        <div
          className={`font-bold text-center text-white md:text-5xl sm:text-3xl`}
        >
          {category}
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
