import NavBar from "@/components/Navbar";
import { Config } from "@/config";


type Props = {
  children: React.ReactNode;
};


const HomeLayout = ({ children }: Props) => {
  
  return (
    <div className="min-h-screen ">
      <NavBar brand={Config.uiMasterData.siteBrand}/>
      <main className="pt-24" >{children}</main>
    </div>
  );
};

export default HomeLayout;
