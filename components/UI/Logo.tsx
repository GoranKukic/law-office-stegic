import LogoImg from "../../public/images/logo2.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[180px] h-[55px]">
      <Image
        src={LogoImg}
        alt="Logo"
        fill
        priority
        className="object-contain object-left"
        sizes="(min-width: 768px) 50vw,
               (min-width: 1200px) 30vw,
               100vw"
        placeholder="blur"
        blurDataURL="../../public/images/logo2.png"
      />
    </div>
  );
};

export default Logo;
