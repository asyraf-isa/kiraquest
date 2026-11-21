interface FractionProps {
  whole?: string | number;
  num: string | number;
  den: string | number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Fraction({
  whole,
  num,
  den,
  className = "",
  size = "md",
}: FractionProps) {
  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm sm:text-base",
    lg: "text-lg sm:text-xl",
  };

  const lineStyles = {
    sm: "border-b-[1.5px] pb-[1px]",
    md: "border-b-2 pb-[1.5px]",
    lg: "border-b-2 pb-[2px]",
  };

  return (
    <span
      className={`inline-flex items-center align-middle font-bold tracking-tight select-none ${sizeStyles[size]} ${className}`}
      aria-label={`${whole ? `${whole} ` : ""}${num} per ${den}`}
    >
      {whole !== undefined && (
        <span className="mr-1.5 leading-none">{whole}</span>
      )}
      <span className="inline-flex flex-col text-center leading-none text-[0.85em] mx-0.5">
        <span className={`px-1 font-semibold ${lineStyles[size]} border-current`}>
          {num}
        </span>
        <span className="pt-[1.5px] px-1 font-semibold">{den}</span>
      </span>
    </span>
  );
}
