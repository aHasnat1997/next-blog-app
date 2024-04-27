import Image from "next/image";
import { TbError404 } from "react-icons/tb";

const NotFoundPage = () => {
  return (
    <div className='mt-32 text-4xl w-full flex flex-col justify-center items-center'>
      <TbError404 className="text-9xl" />
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;