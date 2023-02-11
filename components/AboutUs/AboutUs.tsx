
import styles from './AboutUs.module.css'
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const AboutUs = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="about-us"
      className="bg-gray h-[700px] w-full flex flex-row justify-center items-center relative overflow-hidden relative"
    ><h1>Abour Us - Our Mission</h1>
    </div>
  );
};

export default AboutUs;
