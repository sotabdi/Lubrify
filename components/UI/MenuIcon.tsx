"use client";

import Image from "next/image";
import { useState } from "react";

const MenuIcon = () => {
  const [visible, setvisible] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-x-4">
      <div>
        <Image
          src="/searchIconsvg.svg"
          alt="Menu Icon"
          width={16}
          height={16}
          className="cursor-pointer"
          onClick={() => setvisible((prev) => !prev)}
        />
        <div
          className={`absolute top-0 left-0 w-full flex flex-col gap-y-1.5 bg-primaryBlue px-12 overflow-hidden transition-[height] duration-500 ease-in-expo z-50 ${
            visible ? "h-[100dvh]" : "h-0"
          }`}
        >
          <div className="flex justify-end py-[18px]">
            <div
              className="flex cursor-pointer"
              onClick={() => setvisible((prev) => !prev)}
            >
              <Image
                src={"/Images/MenuIconYellow.svg"}
                alt="Close Icon"
                width={16}
                height={16}
                className="rotate-45"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-x-3">
            <div>
              <Image
                src="/searchIconsvg.svg"
                alt="Menu Icon"
                width={30}
                height={30}
                className="opacity-50"
              />
            </div>
            <div>
              <form action="">
                <input
                  type="text"
                  className="w-[100%] font-poppins text-white opacity-60 focus:outline-none focus:border-none text-[28px]"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-white text-[17px] font-poppins">Quick Link</p>
          </div>
        </div>
      </div>
      <Image
        src={"/CartIcon.svg"}
        alt="cart icon"
        width={18}
        height={18}
        className="cursor-pointer"
      />
    </div>
  );
};

export default MenuIcon;
