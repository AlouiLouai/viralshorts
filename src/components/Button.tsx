interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // Example variants
  className?: string; // Allow custom classes
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary', className = '' }) => {
  // Base classes
  let baseClasses = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]";

  // Variant specific classes
  if (variant === 'primary') {
    baseClasses += " bg-black text-white";
  } else if (variant === 'secondary') {
    // Example for a secondary button, adjust as needed
    baseClasses += " bg-gray-500 text-white";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      <span className="truncate">{text}</span>
    </button>
  );
};

export default Button;
