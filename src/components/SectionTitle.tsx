interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex min-w-72 flex-col gap-3">
      <p className="text-white tracking-light text-[32px] font-bold leading-tight">{title}</p>
      <p className="text-[#adadad] text-sm font-normal leading-normal">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
