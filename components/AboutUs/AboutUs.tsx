
import styles from './AboutUs.module.css'
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import Image from 'next/image';
import aboutUsBg from '../../public/images/aboutUsBg.png'
import Title from '../UI/Title';
import Headline from '../UI/Headline';

const AboutUs = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="about-us"
      className="min-h-[650px] bg-aboutUs-gradient flex justify-center items-center flex flex-col overflow-hidden">
      <div className=" relative bg-white h-full max-w-[1172px] w-full mx-auto my-[0] px-4 z-20">
        <div className='absolute -right-[230px] -bottom-[2px] w-[600px] opacity-[35%] ipad:opacity-100'>
        <Image src={aboutUsBg} alt={'About Us Backgroun Image'}/>
        </div>
        <div className='relative z-30 my-[120px] mr-auto ml-0 max-w-[570px] w-full'
        
        ><Title  title={t.aboutUsTitle} className='text-goldBg mb-[10px]'/>
          <Headline  headline={t.aboutUsHeadline} className={"text-black max-w-[350px] mb-[20px]"}/>
        <p className='mb-[16px]'>Morbi quis commodo quam. Nullam sodales mauris eget mi consectetur imperdiet. Nam elementum placerat tortor, quis commodo sapien convallis a. Vivamus arcu ante, pharetra ac sem quis, ultricies lobortis urna. In hendrerit vel ipsum sit amet ullamcorper. Morbi elementum urna ut lacinia finibus. Duis tristique rhoncus mi non posuere.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nec pharetra dui. Nullam dapibus lectus ut mauris scelerisque, ac mollis erat egestas. Praesent vitae justo ac est porta lobortis. Fusce vitae lacinia nibh. Vestibulum iaculis pretium metus, vitae pulvinar mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div></div>
    </div>
  );
};

export default AboutUs;
