// import { Link } from 'react-scroll/modules';

import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

interface CtaButtonProps {
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ className }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;

  return (
    <button
      className={`flex justify-center items-center h-[50px] w-[180px] text-black text-[16px] font-['Open Sans'] font-semibold
      box-border border-2 border-solid border-goldButton rounded-sm leading-[155%] cursor-pointer bg-goldButton 
      transition-colors duration-700 transform hover:bg-white hover:text-goldButton active:bg-gray ${className}`}
      type="button"
    >
      {t.ctaBtnContent}
    </button>
  );
};

export default CtaButton;
