import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './OurServices.module.css';

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
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
    <div className="w-full bg-[#333]">
      <div className="max-w-[1172px] mx-auto">
    <div className={`${styles.OSwrapper} container bg-[#333] flex flex-nowrap w-[600%] h-[100vh] h-[calc(100vh-80px)]`}>
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
