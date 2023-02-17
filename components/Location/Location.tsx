import { useRouter } from "next/router";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Location = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sr;
  return (
    <div
      id="location"
      className="relative h-[500px] w-full flex justify-center items-center overflow-hidden"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2808.94267284194!2d19.844817!3d45.248952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x897c6e291a880215!2sAdvokat%20Stegi%C4%87%20Bojan!5e0!3m2!1sen!2srs!4v1676034431472!5m2!1sen!2srs"
        height="500"
        loading="lazy"
        width="100%"
        title="Google Map showing the location of Advokat Stegić Bojan"
        className="object-cover flex absolute xs:relative top-0 left-0 h-full w-full"
      ></iframe>
    </div>
  );
};

export default Location;
