import { Metadata } from "next";
import Categories from "./_components/Categories";
import Produts from "./_components/Produts";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Developed by SANDUN",
};

export default function HomePage() {
  return (
    <div className=" flex flex-col justify-center items-center  ">
      <Produts />

      <Categories />
    </div>
  );
}
