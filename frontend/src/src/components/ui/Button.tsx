import { buttonType } from "@/types/Button";
import { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({
  children,
  onClick,
  buttonType = "primary",
  ...options
}: {
  children: ReactNode;
  onClick?: () => void;
  buttonType?: buttonType;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonColor = () => {
    if (buttonType === "danger") {
      return "bg-red-500";
    } else if (buttonType === "secondary") {
      return "bg-gray-500";
    } else {
      return "bg-blue-500";
    }
  };
  return (
    <button
      onClick={onClick}
      className={`w-full ${buttonColor()} text-white rounded-md px-4 py-2`}
      {...options}
    >
      {children}
    </button>
  );
};
