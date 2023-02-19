import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./OurServices.module.css";
import Title from "../UI/Title";
import Headline from "../UI/Headline";
import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";
import Image from "next/image";
import indemnityPhoto from "../../public/images/indemnity.jpg";
import contractPhoto from "../../public/images/contract.jpg";
import familyPhoto from "../../public/images/family.jpg";
import penaltyPhoto from "../../public/images/penalty.jpg";
import otherLawAreasPhoto from "../../public/images/otherLawAreas.jpg";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () =>
          "+=" +
          ((document.querySelector(".container") as HTMLElement)?.offsetWidth ??
            0),
      },
    });
  }, []);

  return (
    <div id="our-services" className="w-full bg-lightBlack">
      <div className="max-w-[1140px] mx-auto">
        <div
          className={`${styles.OSwrapper} container bg-lightBlack flex flex-nowrap items-end w-[600%] h-[100vh] relative`}
        >
          <div
            className={` pt-[110px] absolute top-[0px] left-0 flex w-[100vw] cont:w-[100%] justify-center items-center`}
          >
            <div className="flex flex-col w-full">
              <Title
                title={t.ourServicesTitle}
                className="text-white mb-[10px] mx-auto text-center mx-auto w-full"
              />
              <Headline
                headline={t.ourServicesHeadline}
                className={
                  "text-goldBg mb-[20px] mx-auto text-center mx-aut w-full"
                }
              />
            </div>
          </div>
          {/* Contract Law */}
          <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] w-full h-[calc(100%-180px)]">
            <div className="flex flex-col justify-center max-w-[932px] w-full h-full px-4">
              <div className="relative max-h-[55%] h-full max-w-[500px] w-full mr-0 ml-auto">
                <Image
                  src={contractPhoto}
                  alt={"Contract Photo"}
                  fill
                  className="absoolute object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <h3
                  className={
                    "text-white text-[32px] md:text-[36px] font-normal leading-[100%] font-['Prata'] whitespace-normal drop-shadow-lg shadow-black mb-[20px] ml-0 mr-auto w-full text-left absolute -top-[85px] px-4"
                  }
                >
                  {t.ourServicesCard1Headline}
                </h3>
              </div>
              <div className="mx-auto max-w-[650px] w-full mt-[20px]">
                <p className="text-ourServicesText bg-lightBlack">
                  Mauris suscipit metus eget sapien laoreet, non viverra nisi
                  sagittis. Duis elit enim, maximus sit amet iaculis ut,
                  porttitor at eros. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis tincidunt nisi eu sapien vehicula, sed
                  cursus nunc ullamcorper. Sed vel mattis dolor.
                </p>
              </div>
            </div>
          </section>
          {/* Indemnity Law */}
          <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] w-full h-[calc(100%-180px)]">
            <div className="flex flex-col justify-center max-w-[932px] w-full h-full px-4">
              <div
                className={`relative max-h-[55%] h-full max-w-[500px] w-full mr-0 ml-auto`}
              >
                <Image
                  src={indemnityPhoto}
                  alt={"Indemnity Photo"}
                  fill
                  className="absoolute object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <h3
                  className={
                    "text-white text-[32px] md:text-[36px] font-normal leading-[100%] font-['Prata'] whitespace-normal drop-shadow-lg shadow-black mb-[20px] ml-0 mr-auto w-full text-left absolute -top-[85px] px-4"
                  }
                >
                  {t.ourServicesCard2Headline}
                </h3>
              </div>
              <div className="mx-auto max-w-[650px] w-full mt-[20px]">
                <p className="text-ourServicesText bg-lightBlack">
                  Mauris suscipit metus eget sapien laoreet, non viverra nisi
                  sagittis. Duis elit enim, maximus sit amet iaculis ut,
                  porttitor at eros. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis tincidunt nisi eu sapien vehicula, sed
                  cursus nunc ullamcorper. Sed vel mattis dolor.
                </p>
              </div>
            </div>
          </section>
          {/* Family Law */}
          <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] w-full h-[calc(100%-180px)]">
            <div className="flex flex-col justify-center max-w-[932px] w-full h-full px-4">
              <div className="relative max-h-[55%] h-full max-w-[500px] w-full mr-0 ml-auto">
                <Image
                  src={familyPhoto}
                  alt={"Family Photo"}
                  fill
                  className="absoolute object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <h3
                  className={
                    "text-white text-[32px] md:text-[36px] font-normal leading-[100%] font-['Prata'] whitespace-normal drop-shadow-lg shadow-black mb-[20px] ml-0 mr-auto w-full text-left absolute -top-[85px] px-4"
                  }
                >
                  {t.ourServicesCard3Headline}
                </h3>
              </div>
              <div className="mx-auto max-w-[650px] w-full mt-[20px]">
                <p className="text-ourServicesText bg-lightBlack">
                  Mauris suscipit metus eget sapien laoreet, non viverra nisi
                  sagittis. Duis elit enim, maximus sit amet iaculis ut,
                  porttitor at eros. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis tincidunt nisi eu sapien vehicula, sed
                  cursus nunc ullamcorper. Sed vel mattis dolor.
                </p>
              </div>
            </div>
          </section>
          {/* Penalty Law */}
          <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] w-full h-[calc(100%-180px)]">
            <div className="flex flex-col justify-center max-w-[932px] w-full h-full px-4">
              <div className="relative max-h-[55%] h-full max-w-[500px] w-full mr-0 ml-auto">
                <Image
                  src={penaltyPhoto}
                  alt={"Penalty Photo"}
                  fill
                  className="absoolute object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <h3
                  className={
                    "text-white text-[32px] md:text-[36px] font-normal leading-[100%] font-['Prata'] whitespace-normal drop-shadow-lg shadow-black mb-[20px] ml-0 mr-auto w-full text-left absolute -top-[85px] px-4"
                  }
                >
                  {t.ourServicesCard4Headline}
                </h3>
              </div>
              <div className="mx-auto max-w-[650px] w-full mt-[20px]">
                <p className="text-ourServicesText bg-lightBlack">
                  Mauris suscipit metus eget sapien laoreet, non viverra nisi
                  sagittis. Duis elit enim, maximus sit amet iaculis ut,
                  porttitor at eros. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis tincidunt nisi eu sapien vehicula, sed
                  cursus nunc ullamcorper. Sed vel mattis dolor.
                </p>
              </div>
            </div>
          </section>
          {/* Other Law Areas Law */}
          <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] w-full h-[calc(100%-180px)]">
            <div className="flex flex-col justify-center max-w-[932px] w-full h-full px-4">
              <div className="relative max-h-[55%] h-full max-w-[500px] w-full mr-0 ml-auto">
                <Image
                  src={otherLawAreasPhoto}
                  alt={"Other Law Areas Photo"}
                  fill
                  className="absoolute object-cover rounded-lg"
                />
              </div>
              <div className="relative">
                <h3
                  className={
                    "text-white text-[32px] md:text-[36px] font-normal leading-[100%] font-['Prata'] whitespace-normal drop-shadow-lg shadow-black mb-[20px] ml-0 mr-auto w-full text-left absolute -top-[85px] px-4"
                  }
                >
                  {t.ourServicesCard5Headline}
                </h3>
              </div>
              <div className="mx-auto max-w-[650px] w-full mt-[20px]">
                <p className="text-ourServicesText bg-lightBlack">
                  Mauris suscipit metus eget sapien laoreet, non viverra nisi
                  sagittis. Duis elit enim, maximus sit amet iaculis ut,
                  porttitor at eros. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Duis tincidunt nisi eu sapien vehicula, sed
                  cursus nunc ullamcorper. Sed vel mattis dolor.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
