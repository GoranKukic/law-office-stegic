import React from 'react';
import { Link } from 'react-scroll/modules';
import CtaButton from '../UI/CtaButton';
import NavLinksMobile from './NavLinksMobile';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import dynamic from "next/dynamic";

const LanguageSwitcher = dynamic(() => import("../Navbar/LanguageSwitcher"), { ssr: false });

interface MobileNavProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-fill h-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md  text-center`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex flex-col">
        <NavLinksMobile
          to={'about-us'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer text-[18px]">
            <span>{t.navAboutUs}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'our-services'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navOurServices}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'why-we'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navWhyWe}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>
        <NavLinksMobile
          to={'location'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className="relative group cursor-pointer">
            <span>{t.navLocation}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-goldBg transition-all group-hover:w-full"></span>
          </p>
        </NavLinksMobile>

        <Link
          href="#"
          to="contact"
          smooth={true}
          offset={-290}
          duration={500}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <CtaButton />
        </Link>
        <div className="flex justify-center items-center  my-4">
        <LanguageSwitcher ariaId="language-switcher-mobile" id="mobile"/>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;