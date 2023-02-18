interface HeadlineProps {
  headline: string | (string | React.ReactElement)[];
  className?: string;
  underline?: any;
}

const Headline: React.FC<HeadlineProps> = ({
  headline,
  className,
  underline,
}) => {
  return (
    <h2
      className={`text-[32px] md:text-[42px] font-normal leading-[155%] font-['Prata'] whitespace-normal ${className} `}
    >
      {/* {headline} */}
      {Array.isArray(headline)
        ? headline.map((headlineItem, index) => {
            return <span key={index}>{headlineItem}</span>;
          })
        : headline}
      {underline ? underline : null}
    </h2>
  );
};

export default Headline;
