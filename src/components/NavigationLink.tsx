interface NavigationLinkProps {
  href: string;
  text: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, text }) => {
  return (
    <a className="text-white text-sm font-medium leading-normal" href={href}>
      {text}
    </a>
  );
};

export default NavigationLink;
