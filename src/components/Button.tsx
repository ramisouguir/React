import React from "react";

interface Props {
  styles: string;
  text: string;
}

const Button = ({ styles, text }: Props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px]
       text-primary outlline-none ${styles} bg-blue-gradient rounded-[10px]`}
    >
      {text}
    </button>
  );
};

export default Button;
