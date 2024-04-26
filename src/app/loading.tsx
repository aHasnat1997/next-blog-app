import { CgSpinner } from "react-icons/cg";

const loading = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <CgSpinner className="text-6xl animate-spin" />
    </section>
  );
};

export default loading;