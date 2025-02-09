"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../CommonComponents/Button";

const MenuIcon = () => {
  const [isLoggedin, steisLoggedin] = useState<boolean>(false);
  const [visible, setvisible] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-x-4 justify-between">
      {!isLoggedin && (
        <div className="hidden md:inline-block">
          <Button placeHolder="Sign Up" link="#" />
        </div>
      )}
      <div>
        <Image
          src="/searchIconsvg.svg"
          alt="Menu Icon"
          width={16}
          height={16}
          className="cursor-pointer"
          onClick={() => setvisible((prev) => !prev)}
        />
        {visible && (
          <div className="absolute top-0 left-0 w-full h-[100dvh] backdrop-blur-[4px]">
            <div className="w-full px-2.5 h-[30%] bg-primaryBlue">
              <div className="flex w-full gap-x-3 py-[30px]">
                <Image
                  src="/searchIconsvg.svg"
                  alt="Menu Icon"
                  width={20}
                  height={20}
                  className="opacity-70"
                />
                <form action="">
                  <input
                    type="text"
                    className="w-[100%] py-4 font-poppins text-white opacity-60 active:border-0"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Image
        src={"/CartIcon.svg"}
        alt="cart icon"
        width={18}
        height={18}
        className="cursor-pointer"
      />
      {isLoggedin && (
        <Image
          src={"/profileIcon.svg"}
          alt="search icon"
          width={16}
          height={16}
          className="cursor-pointer hidden md:block"
        />
      )}
    </div>
  );
};

export default MenuIcon;
