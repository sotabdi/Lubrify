import Image from "next/image";
import Menu from "./UI/Menu";

const Navbar = () => {
  return (
    <div className="relative px-2.5 py-2.5 grid grid-cols-3 justify-center items-center">
      <div className="bg-red-500">
        <Menu />
      </div>
      <div className="bg-yellow-400">
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
      <div className="bg-purple-600">Icon</div>
    </div>
  );
};

export default Navbar;
