import { LoaderIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-w-full min-h-52 text-lg text-gray-600 font-semibold">
    Loading <LoaderIcon className="animate-spin ml-2" />
  </div>
  );
};

export default LoadingPage;
