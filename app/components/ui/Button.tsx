import { Chicle } from "next/font/google";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
};

const Button = ({ children, icon}: ButtonProps) => {
  return (
    <button className="w-[ p-2 bg-orange-400/80 grid place-content-center gap-2 items-center rounded-full">
      <span>{icon}</span>
      {children}
    </button>
  );
};
export default Button;
