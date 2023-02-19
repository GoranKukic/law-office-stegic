import { useEffect } from "react";
import Image from "next/image";
import heroBg from "../../public/images/heroBg.jpg";
import styles from "./Hero.module.css";
import Title from "../UI/Title";

import AOS from "aos";
import "aos/dist/aos.css";

import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-sine" });
  }, []);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;

  return (
    <div
      id="hero"
      className="hero-gradient h-[100vh] flex flex-row justify-center items-center relative overflow-hidden relative"
    >
      <div className={`${styles.heroGradient} radialBackground`} />
      <Image
        src={heroBg}
        alt="Hero background"
        fill
        priority
        className=" object-cover object-top object-left h-full"
        placeholder="blur"
        blurDataURL="/images/heroUpperBg.webp"
        sizes="100vw"
      />
      <div className="relative max-w-[1172px] w-full bg-transparent flex justify-center z-20 px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="max-w-[855px] w-full flex flex-col gap-[20px]"
        >
          <Title title={t.heroTitle} className="text-white mb-[10px]" />
          <span className="max-w-[855px] w-full">
            <h2
              className={`${styles.heroHeadline} capitalize m-0 w-full text-goldBg text-[76px] font-["Prata"] text-justify`}
            >
              Audiatur et altera pars
            </h2>
          </span>
          <span className="max-w-[570px] ml-auto mr-0">
            <p className="text-white text-[16px] font-normal text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tempus nulla id arcu aliquam molestie. Mauris a lorem
              id nisi scelerisque commodo id eget libero. Proin tristique ex
              tortor.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
