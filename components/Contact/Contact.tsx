
import styles from './Contact.module.css'
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';

const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  return (
    <div
      id="contact"
      className="bg-[#eab676] h-[700px] w-full flex flex-row justify-center items-center relative overflow-hidden relative"
    ><h1>Contact</h1>
    </div>
  );
};

export default Contact;
