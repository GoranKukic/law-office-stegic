import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";
import HeadTitle from "../components/HeadTitle/HeadTitle";
import Location from "@/components/Location/Location";
import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import WhyWe from "@/components/WhyWe/WhyWe";
import OurServices from "@/components/OurServices/OurServices";

export default function Home() {
  return (
    <Fragment>
      <HeadTitle />
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <AboutUs />
        <OurServices />
        <WhyWe />
        <Contact />
        <Location />
        <Footer />
      </div>
    </Fragment>
  );
}
