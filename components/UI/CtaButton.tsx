// import { Link } from 'react-scroll/modules';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const CtaButton = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <button
      className="flex justify-center items-center h-[50px] w-[180px] text-white text-[16px] font-['Open Sans'] font-semibold
      box-border border-2 border-solid border-goldBg rounded-sm leading-[155%] cursor-pointer bg-goldBg 
      transition-colors duration-700 transform hover:bg-white hover:text-goldBg active:bg-gray"
      type="button"
    >
      {t.ctaBtnContent}
    </button>
  );
};

export default CtaButton;
