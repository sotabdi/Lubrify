import Image from "next/image";
import Menu from "./UI/Menu";
import MenuIcon from "./UI/MenuIcon";

const Navbar = () => {
  return (
    <div className="relative px-2.5 py-2.5 grid grid-cols-3 justify-center items-center bg-primaryBlue">
      <div>
        <Menu />
      </div>
      <div>
        <div className="flex justify-center items-center">
          <Image
            src={"/Images/Logo.svg"}
            alt="Logo"
            width={100}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
