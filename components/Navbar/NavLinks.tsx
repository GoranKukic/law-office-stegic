import Link from 'react-scroll/modules/components/Link';

interface NavLinksProps {
  to: string;
  children:(React.ReactElement);
}

const NavLinks:React.FC<NavLinksProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      href="#"
      className="font-['Open Sans'] font-normal text-[16px] leadeing-[135%]"
      activeClass="active"
      smooth={true}
      offset={-80}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
