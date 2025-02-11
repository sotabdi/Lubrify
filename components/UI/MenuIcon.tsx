"use client";

import Image from "next/image";
import { useState } from "react";

const MenuIcon = () => {
  const [visible, setvisible] = useState<boolean>(false);
  const [cartshow, setcartshow] = useState<boolean>(false);

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
          className={`absolute top-0 left-0 w-full flex flex-col gap-y-1.5 bg-primaryBlue px-10 overflow-hidden transition-[height] duration-500 ease-in-expo z-50 ${
            visible ? "h-[100dvh] duration-400" : "h-0 duration-600"
          }`}
        >
          <div className="flex justify-end py-[18px] ">
            <div
              className={`flex cursor-pointer transition-all ease-in-out ${
                visible
                  ? "delay-500 opacity-100 translate-y-0"
                  : "delay-0 opacity-0 -translate-y-[5px]"
              }`}
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
          <div
            className={`flex w-full items-center gap-x-3 transition-all ease-in-out ${
              visible
                ? "delay-600 duration-300 opacity-100 translate-y-0"
                : "delay-0 duration-100 opacity-0 -translate-y-[10px]"
            }`}
          >
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
          <div
            className={`mt-12 transition-all ease-in-out ${
              visible
                ? "delay-700 duration-300 opacity-100 translate-y-0"
                : "delay-0 duration-100 opacity-0 -translate-y-[10px]"
            }`}
          >
            <h6 className="text-white text-[17px] font-poppins opacity-50">
              Quick Link
            </h6>
            <div className="pt-2.5">
              <ul className="flex flex-col gap-y-2.5">
                <li className="text-white text-[17px] font-poppins font-semibold">
                  -Somewhere to go
                </li>
                <li className="text-white text-[17px] font-poppins font-semibold">
                  -Somewhere to go
                </li>
                <li className="text-white text-[17px] font-poppins font-semibold">
                  -Somewhere to go
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* cart icon */}
      <div>
        <Image
          src={"/CartIcon.svg"}
          alt="cart icon"
          width={18}
          height={18}
          className="cursor-pointer"
          onClick={() => setcartshow((prev) => !prev)}
        />
        <div
          className={`absolute top-0 left-0 w-full flex flex-col gap-y-1.5 bg-primaryBlue px-10 overflow-hidden transition-[height] duration-500 ease-in-expo z-50 ${
            cartshow ? "h-[100dvh] duration-400" : "h-0 duration-600"
          }`}
        >
          <div className="flex justify-end py-[18px]">
            <div
              className={`flex cursor-pointer transition-all ease-in-out ${
                cartshow
                  ? "delay-500 opacity-100 translate-y-0"
                  : "delay-0 opacity-0 -translate-y-[5px]"
              }`}
              onClick={() => setcartshow((prev) => !prev)}
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
          <div
            className={`flex flex-col gap-y-[30px] transition-all ease-in-out ${
              cartshow
                ? "delay-600 duration-300 opacity-100 translate-y-0"
                : "delay-0 duration-100 opacity-0 -translate-y-[10px]"
            }`}
          >
            <h6 className="font-poppins text-[28px] text-white font-semibold">
              Your Bag is Empty
            </h6>
            <p className="font-poppins text-white opacity-50 text-[17px]">
              sign in to se if yoy have any save items
            </p>
          </div>
          <div
            className={`mt-12 transition-all ease-in-out ${
              cartshow
                ? "delay-700 duration-300 opacity-100 translate-y-0"
                : "delay-0 duration-100 opacity-0 -translate-y-[10px]"
            }`}
          >
            <h6 className="text-white text-[17px] font-poppins opacity-50">
              My Profile
            </h6>
            <div className="pt-2.5">
              <ul className="flex flex-col gap-y-2.5">
                <li className="text-white text-[17px] font-poppins font-semibold ">
                  -Order
                </li>
                <li className="text-white text-[17px] font-poppins font-semibold">
                  -Your Saves
                </li>
                <li className="text-white text-[17px] font-poppins font-semibold">
                  -Account
                </li>
                <li className="text-white text-[17px] font-poppins font-semibold">
                  -Sign In
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
