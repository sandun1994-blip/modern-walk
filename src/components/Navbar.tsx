import Link from "next/link";


type Props = {
  brand: string;
};

function NavBar({ brand }: Props) {
  return (
    <>
      <nav className="fixed bg-white w-full top-0 z-[1000] h-24">
        <div className="mx-auto">
          <div className="flex justify-between items-center border-b-4 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-center lg:w-0 lg:flex-1 w-full">
              <div className="text-5xl font-bold">
                <Link href="/">{brand}</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;