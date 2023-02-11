
import styles from './WhyWe.module.css'
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const WhyWe = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="why-we"
      className="bg-[#76b5c5] h-[700px] w-full flex flex-row justify-center items-center relative overflow-hidden relative"
    ><h1>Why We</h1>
    </div>
  );
};

export default WhyWe;
