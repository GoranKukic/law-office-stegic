import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './OurServices.module.css';
import Title from "../UI/Title";
import Headline from "../UI/Headline";
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

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
        end: () => "+=" + ((document.querySelector(".container") as HTMLElement)?.offsetWidth ?? 0)

      }
    });
  }, []);

  return (
    <div id="our-services" className="w-full bg-solidGray">
      <div className="max-w-[1140px] mx-auto">
    <div className={`${styles.OSwrapper} container bg-solidGray flex flex-nowrap w-[600%] h-[100vh] relative`}>
    <div className={` pt-[110px] absolute top-[0px] left-0 flex w-[100vw] cont:w-[100%] justify-center items-center`}>
      <div className="flex flex-col w-full">
        <Title  title={t.ourServicesTitle} className='text-goldBg mb-[10px] mx-auto text-center mx-auto w-full'/>
        <Headline  headline={t.ourServicesHeadline} className={"text-white mb-[20px] mx-auto text-center mx-aut w-full"}/>
      </div>
    </div>
      <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] bg-red w-full h-[100%]">
        <h1>Oblasti Rada - SCROLL DOWN</h1>
      </section>
      <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] bg-red w-full h-[100%]">
        <h2>Pravo osiguranja</h2>
      </section>
      <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] bg-red w-full h-[100%]">
        <h2>Prekršajno pravo</h2>
      </section>
      <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] bg-red w-full h-[100%]">
        <h2>Odštetno pravo</h2>
      </section>
      <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] bg-red w-full h-[100%]">
        <h2>Ugovorno pravo</h2>
      </section>
      <section className="panel flex relative justify-center items-center text-center text-white m-0 p-0 min-w-[100vw] cont:min-w-[100%] bg-red w-full h-[100%]">
        <h2>Druge oblasti prava</h2>
      </section>
    </div></div></div>
  );
}

export default OurServices;
