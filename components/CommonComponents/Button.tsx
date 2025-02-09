import Link from "next/link";

type ButtonProps = {
  placeHolder: string; // lowercase 'string'
  link: string; // lowercase 'string'
};
const Button = ({ placeHolder, link }: ButtonProps) => {
  return (
    <div className="text-white text-[12px] uppercase cursor-pointer font-poppins font-extrabold px-5 py-2 border border-white hover:border-primaryYellow hover:text-primaryBlue transition-all ease-in-out duration-200 btn">
      <Link href={link} className="z-10">
        {placeHolder}
      </Link>
    </div>
  );
};

export default Button;
