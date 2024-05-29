'use client'
import { getColor } from "@/utils/utils";
import { useRouter } from "next/navigation";


type Props = {
  category: string;
};

function CategoryCard({ category }: Props) {


  const router = useRouter()

  const encodedCategory = encodeURIComponent(category);
const handleClick =()=>{
  router.push(`categories/${encodedCategory}`, { scroll: false })
}

  return (
   
      <div
        className={`relative w-[47%] h-[250px] flex justify-center items-center p-8 rounded-3xl
         shadow-xl hover:shadow-lg xl:w-[35%] md:h-[400px] hover:cursor-pointer hover:scale-105`}
        style={{ backgroundColor: getColor(category) }}
        onClick={handleClick}
      >
        <div
          className={`font-bold text-center text-white md:text-5xl sm:text-3xl capitalize `}
        >
          {category}
        </div>
      </div>
   
  );
}

export default CategoryCard;
