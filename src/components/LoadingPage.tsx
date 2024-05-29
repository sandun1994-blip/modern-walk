import { LoaderIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-w-full  min-h-52">
      Loading <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default LoadingPage;
