import styles from "./WhyWe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";
import Image from "next/image";
import WhyWeBg from "../../public/images/whyWeBg.jpg";
import Title from "../UI/Title";
import Headline from "../UI/Headline";
import MoneySaveImg from "../../public/images/piggy-bank.png";

const WhyWe = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;

  return (
    <div
      id="why-we"
      className="relative min-h-[900px] pb-[250px] pt-[100px] w-full flex flex-row justify-center items-center overflow-hidden"
    >
      <div className={`${styles.paralaxContainer}`}>
        <Image
          src={WhyWeBg}
          alt={"Why we background image"}
          fill
          className="absolute object-cover object-top h-full"
          placeholder="blur"
          blurDataURL="../../public/images/whyWeBg.jpg"
          sizes="100vw"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="max-w-[1172px] w-full backdrop-blur-[8.5px] p-4"
      >
        <Title title={t.whyWeTitle} className="text-goldBg text-center" />
        <Headline
          headline={t.whyWeHeadline}
          className="mb-[40px] text-center"
        ></Headline>
        <div className="flex flex-row flex-wrap justify-center gap-[30px] z-20">
          {/* Benefit */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t-[6px] border-solid border-goldBg flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <Image
                src={MoneySaveImg}
                alt="Piggybank icon"
                className="max-h-[40px] h-full max-w-[40px] w-full"
              />
              <span className='text-[20px] md:text-[24px] font-normal text-goldBg font-["Prata"] leadeing-[155%] text-black'>
                {t.whyWeCard1Headline}
              </span>
              <p className={"text-center text-gray"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla metus, quis potenti vitae. Dolor eget suspendisse
                vulputate feugiat.
              </p>
            </div>
          </div>

          {/* Benefit */}

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t-[6px] border-solid border-goldBg flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <Image
                src={MoneySaveImg}
                alt="Piggybank icon"
                className="max-h-[40px] h-full max-w-[40px] w-full"
              />
              <span className='text-[20px] md:text-[24px] font-normal text-goldBg font-["Prata"] leadeing-[155%] text-black'>
                {t.whyWeCard2Headline}
              </span>
              <p className={"text-center text-gray"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla metus, quis potenti vitae. Dolor eget suspendisse
                vulputate feugiat.
              </p>
            </div>
          </div>

          {/* Benefit */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-[360px] px-[34px] pt-[60px] pb-[55px] bg-white border-t-[6px] border-solid border-goldBg flex flex-col gap-[33px] items-center justify-center text-center cursor-pointer overflow-hidden transform hover:-translate-y-4 duration-500 ease-in-out">
              <Image
                src={MoneySaveImg}
                alt="Piggybank icon"
                className="max-h-[40px] h-full max-w-[40px] w-full"
              />
              <span className='text-[20px] md:text-[24px] font-normal text-goldBg font-["Prata"] leadeing-[155%] text-black'>
                {t.whyWeCard3Headline}
              </span>
              <p className={"text-center text-gray"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                nulla metus, quis potenti vitae. Dolor eget suspendisse
                vulputate feugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </div>
  );
};
export default WhyWe;
