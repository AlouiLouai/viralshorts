interface SuggestionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="p-4">
      <div
        className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("${imageUrl}")`
        }}
      >
        <div className="flex w-full items-end justify-between gap-4 p-4">
          <div className="flex max-w-[440px] flex-1 flex-col gap-1">
            <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">{title}</p>
            <p className="text-white text-base font-medium leading-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
