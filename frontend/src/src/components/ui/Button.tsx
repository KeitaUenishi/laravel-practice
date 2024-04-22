import { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white rounded-md px-4 py-2"
    >
      {children}
    </button>
  );
};
