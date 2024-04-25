type Props = {
  ariaLabel?: string;
  color?: string;
};

export const Loading = ({
  ariaLabel = "読み込み中",
  color = "bg-blue-600",
}: Props) => {
  return (
    <div
      className="flex justify-center items-center w-full my-8"
      aria-label={ariaLabel}
    >
      <div className={`animate-ping h-2 w-2 ${color} rounded-full`}></div>
      <div className={`animate-ping h-2 w-2 ${color} rounded-full mx-8`}></div>
      <div className={`animate-ping h-2 w-2 ${color} rounded-full`}></div>
    </div>
  );
};
