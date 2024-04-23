import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-secondary">
      <section className="py-16 flex flex-col items-center gap-4">
        <h2 className="text-4xl font-semibold">Next Blog</h2>
        <div className="flex justify-center gap-6 text-4xl">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaDiscord />
        </div>
      </section>
      <section className="text-center bg-slate-700 py-2">
        <h3>Copyright &copy; {year}; Design by <i className="text-gray-300">A.Hasnat</i></h3>
      </section>
    </footer>
  );
};

export default Footer;