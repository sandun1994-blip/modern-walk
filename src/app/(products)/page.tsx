

import { Metadata } from "next";
import Categories from "./_components/Categories";
import Produts from "./_components/Produts";
import Section from "@/components/Section";
import { Config } from "@/config";
import ProductCard from "@/components/ProductCard ";
import CategoryCard from "@/components/CategoryCard";





export default function HomePage() {
  return (
    <div className=" flex flex-col justify-center items-center  " >
        <Produts/> 
     {/* <Section isTopNav={true} isScroll={true} title={Config.uiMasterData.section.flash_sale}>
      <Produts/>
    </Section> */}
    <Section title={Config.uiMasterData.section.categories}>
     <Categories/>
    </Section>  
  </div>
  );
}
