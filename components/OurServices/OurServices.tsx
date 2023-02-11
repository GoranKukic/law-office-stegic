
import styles from './OurServices.module.css'
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const OurServices = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="our-services"
      className="bg-[#eeeee4] h-[700px] w-full flex flex-row justify-center items-center relative overflow-hidden relative"
    ><h1>Our Services</h1>
    </div>
  );
};

export default OurServices;
