import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  return (
    <nav className="px-[10px] py-[10px] md:px-[15px] md:py-[20px] xl:py-[28px] bg-primaryBlue relative">
      {/* Mobile Nav */}
      <div className="grid grid-cols-3 items-center justify-between">
        <div className="flex justify-start">
          <Menu />
        </div>
        <div className="flex justify-center ">
          <Link href={"/"}>
            <Image
              src={"/Logo.svg"}
              alt="Logo"
              width={100}
              height={32}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-end">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
