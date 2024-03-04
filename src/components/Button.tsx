import React from "react";

interface Props {
  styles: string;
}

const Button = ({ styles }: Props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outlline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
