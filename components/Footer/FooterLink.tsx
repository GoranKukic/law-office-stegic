import { Link } from 'react-scroll/modules';

interface LinkProps {
  text: string
  to: any
  offset?: number;
}

const FooterLink : React.FC <LinkProps> = (props) => {
  return (
    <Link
      href="#"
      to={props.to}
      className="hover:text-goldBg hover:duration-500 hover:pb-[2px] cursor-pointer w-fit"
      smooth={true}
      offset={-80}
      duration={500}
    >
      {props.text}
    </Link>
  );
};

export default FooterLink;
