import Image from "next/image";
import heroImg from "@/assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className="max-section my-4">
      <Image
        src={heroImg}
        alt="Hero Image"
        className="w-full h-[40rem]"
      />
    </section>
  );
};

export default Hero;