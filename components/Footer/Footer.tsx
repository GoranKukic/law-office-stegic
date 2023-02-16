import Logo from '../UI/Logo';
import Paragraph from '../UI/Paragraph';
import FooterLink from './FooterLink';
import Image from 'next/image';
import LocationIcon from '../../public/images/location.svg';
import InstaIcon from '../../public/images/instagram.svg';
import PhoneIcon from '../../public/images/phone.svg';
import MailIcon from '../../public/images/mail.svg';
import { Link } from 'react-scroll/modules';
import styles from './Footer.module.css';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import NextLink from 'next/link';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;
  return (
    <div className=" bg-footer-gradient flex justify-center items-center flex flex-col overflow-hidden !important">
      <div className='h-full bg-lightBlack max-w-[1172px] w-full'>
      <div className=" w-full mx-auto my-[55px] px-4 z-20">
        <div className="mb-[15px] flex items-left">
          <Link
            href="#"
            to="hero"
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <Logo />
          </Link>
        </div>
        <div className="flex flex-col gap-[35px] md:gap-[0px] md:flex-row">
          <div className="flex-col max-w-[500px] w-full pr-2">
            <div className="max-w-[390px] w-full mb-[15px] md:mb-[25px]">
              <Paragraph
                paragraph={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium nulla metus, quis potenti vitae. Dolor eget suspendisse vulputate feugiat.'
                }
                className={'text-gray flex text-left'}
              />
            </div>
          </div>
          <div className="max-w-[210px] w-full px-2">
            <div>
              <ul className=" flex flex-col gap-[15px] md:gap-[25px] text-[16px] font-normal text-gray font-['Open Sans'] leadeing-[155%]">
                <li>
                  <FooterLink
                    text={t.navAboutUs}
                    to={'about-us'}
                  />
                </li>
                <li>
                  <FooterLink
                    text={t.navOurServices}
                    to={'our-services'}
                    offset={-80}
                  />
                </li>
                <li>
                  <FooterLink text={t.navWhyWe} to={'why-we'} />
                </li>
                <li>
                  <FooterLink text={t.ctaBtnContent} to={'contact'} />
                </li>
                <li>
                  <FooterLink text={t.navLocation} to={'location'} />
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[290px] w-full px-2">
            <ul className='flex flex-col gap-[15px] md:gap-[20px] text-[16px] font-normal text-white font-["Open Sans"] leadeing-[135%]'>
              <li className={`${styles.contactListV2} transition-transform duration-500 ease-in-out flex gap-[7px] w-fit hover:duration-500`}>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto my-auto'>
                  <path d="M0.556641 3.36108L5.81664 6.86775C6.03575 7.01394 6.29324 7.09195 6.55664 7.09195C6.82004 7.09195 7.07753 7.01394 7.29664 6.86775L12.5566 3.36108M1.88997 10.6944H11.2233C11.5769 10.6944 11.9161 10.5539 12.1661 10.3039C12.4162 10.0538 12.5566 9.71471 12.5566 9.36108V2.69442C12.5566 2.3408 12.4162 2.00166 12.1661 1.75161C11.9161 1.50156 11.5769 1.36108 11.2233 1.36108H1.88997C1.53635 1.36108 1.19721 1.50156 0.947165 1.75161C0.697116 2.00166 0.556641 2.3408 0.556641 2.69442V9.36108C0.556641 9.71471 0.697116 10.0538 0.947165 10.3039C1.19721 10.5539 1.53635 10.6944 1.88997 10.6944Z" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="mailto:advokatstegic@gmail.com" className="cursor-pointer hover:text-goldBg hover:duration-500 overflow-hidden">advokatstegic@gmail.com</a>
              </li>
              <li className={`${styles.contactListV2} transition-transform duration-500 ease-in-out flex gap-[7px] w-fit hover:duration-500`}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto my-auto'>
                  <path d="M0.556641 2.41439C0.556641 2.06077 0.697116 1.72163 0.947165 1.47158C1.19721 1.22153 1.53635 1.08105 1.88997 1.08105H4.07664C4.2165 1.08116 4.35279 1.12525 4.46621 1.20709C4.57963 1.28892 4.66444 1.40436 4.70864 1.53705L5.70731 4.53239C5.75791 4.68461 5.75192 4.84998 5.69045 4.99815C5.62898 5.14632 5.51614 5.26736 5.37264 5.33905L3.86797 6.09239C4.60552 7.72475 5.91295 9.03218 7.54531 9.76972L8.29864 8.26505C8.37034 8.12155 8.49137 8.00872 8.63954 7.94724C8.78771 7.88577 8.95308 7.87979 9.10531 7.93039L12.1006 8.92906C12.2334 8.97329 12.349 9.0582 12.4308 9.17175C12.5126 9.28531 12.5567 9.42174 12.5566 9.56172V11.7477C12.5566 12.1013 12.4162 12.4405 12.1661 12.6905C11.9161 12.9406 11.5769 13.0811 11.2233 13.0811H10.5566C5.03397 13.0811 0.556641 8.60372 0.556641 3.08105V2.41439Z" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="tel:+381 65 20 81 543" className="cursor-pointer hover:text-goldBg hover:duration-500 overflow-hidden" >+381 65 20 81 543</a>
              </li>
              <li className={`${styles.contactList} transition-transform duration-500 ease-in-out flex gap-[7px] w-fit hover:duration-500`}>
                <svg className='mx-auto my-auto' fill='#FFFFFF' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 15 15" version="1.1">
                  <g id="surface1">
                    <path d="M 11.875 0 L 3.125 0 C 1.398438 0 0 1.398438 0 3.125 L 0 11.875 C 0 13.601562 1.398438 15 3.125 15 L 11.875 15 C 13.601562 15 15 13.601562 15 11.875 L 15 3.125 C 15 1.398438 13.601562 0 11.875 0 Z M 5 11.875 L 3.125 11.875 L 3.125 5 L 5 5 Z M 4.0625 4.207031 C 3.457031 4.207031 2.96875 3.714844 2.96875 3.105469 C 2.96875 2.496094 3.457031 2.003906 4.0625 2.003906 C 4.667969 2.003906 5.15625 2.496094 5.15625 3.105469 C 5.15625 3.714844 4.667969 4.207031 4.0625 4.207031 Z M 12.5 11.875 L 10.625 11.875 L 10.625 8.371094 C 10.625 6.265625 8.125 6.425781 8.125 8.371094 L 8.125 11.875 L 6.25 11.875 L 6.25 5 L 8.125 5 L 8.125 6.101562 C 8.996094 4.488281 12.5 4.367188 12.5 7.652344 Z M 12.5 11.875 "/>
                  </g>
                </svg>
                <a
                  href="https://www.linkedin.com/in/bojan-stegi%C4%87-33596259/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:text-goldBg hover:duration-500 overflow-hidden"
                >
                  @Bojan Stegić
                </a>
              </li>
              <li className={`${styles.contactList} transition-transform duration-500 ease-in-out flex gap-[7px] w-fit hover:duration-500`}>
                <svg className='-ml-[3px] mr-auto my-auto' width="21" height="21" viewBox="0 0 21 21" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7129 14.4192L12.177 17.955C12.0224 18.1098 11.8388 18.2326 11.6367 18.3164C11.4346 18.4001 11.2179 18.4432 10.9991 18.4432C10.7803 18.4432 10.5637 18.4001 10.3616 18.3164C10.1595 18.2326 9.97583 18.1098 9.8212 17.955L6.28453 14.4192C5.35222 13.4868 4.71731 12.2989 4.46011 11.0057C4.2029 9.71252 4.33494 8.37209 4.83954 7.15394C5.34413 5.93578 6.19861 4.89461 7.29494 4.16209C8.39126 3.42956 9.68017 3.03857 10.9987 3.03857C12.3172 3.03857 13.6061 3.42956 14.7025 4.16209C15.7988 4.89461 16.6533 5.93578 17.1579 7.15394C17.6625 8.37209 17.7945 9.71252 17.5373 11.0057C17.2801 12.2989 16.6452 13.4868 15.7129 14.4192V14.4192Z" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.498 9.70532C13.498 10.3684 13.2347 11.0042 12.7658 11.4731C12.297 11.9419 11.6611 12.2053 10.998 12.2053C10.335 12.2053 9.69912 11.9419 9.23028 11.4731C8.76144 11.0042 8.49805 10.3684 8.49805 9.70532C8.49805 9.04228 8.76144 8.4064 9.23028 7.93755C9.69912 7.46871 10.335 7.20532 10.998 7.20532C11.6611 7.20532 12.297 7.46871 12.7658 7.93755C13.2347 8.4064 13.498 9.04228 13.498 9.70532V9.70532Z" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a
                  href={'https://goo.gl/maps/ScJa4y5t9fCLfKwn7'}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-goldBg hover:duration-500"
                >
                  Maksima Gorkog 6/53, Novi Sad
                </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1172px] w-full mx-auto px-4 mb-[8px] z-20">
        <div className="flex flex-col flex-col-reverse items-center md:flex-row  md:flex-nowrap justify-between text-[14px] font-normal text-gray font-['Open Sans'] leadeing-[155%]">
          <div>
            <span className="text-center">
              <a 
                href={'https://gorankukic.netlify.app/'}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue hover:duration-500"> Made by Goran Kukić 
              </a>
                {" "}{new Date().getFullYear()} <wbr /> &copy; |
              {t.footerDesc}
            </span>
          </div>
          <div>
            <NextLink
              href="/privacy-policy"
              className="hover:text-goldBg hover:duration-500"
            >
              {t.footerPrivacyPolicy}
            </NextLink>
          </div>
        </div>
      
      </div>
</div>
    </div>
  );
};

export default Footer;
