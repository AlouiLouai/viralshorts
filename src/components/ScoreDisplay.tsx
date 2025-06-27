interface ScoreDisplayProps {
  score: number; // Percentage value, e.g., 60 for 60%
  title: string;
  analysisText: string;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, title, analysisText }) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex gap-6 justify-between">
        <p className="text-white text-base font-medium leading-normal">{title}</p>
        <p className="text-white text-sm font-normal leading-normal">{score}%</p>
      </div>
      <div className="rounded bg-[#4d4d4d]">
        <div className="h-2 rounded bg-black" style={{ width: `${score}%` }}></div>
      </div>
      <p className="text-[#adadad] text-sm font-normal leading-normal">{analysisText}</p>
    </div>
  );
};

export default ScoreDisplay;
