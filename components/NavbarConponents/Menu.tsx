"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Menu = () => {
  const [open, setopen] = useState<boolean>(false);
  const [iscurrent, setiscurrent] = useState<number | null>();

  const handleClick = () => {
    setopen((prev) => !prev);
  };

  type MenuList = {
    id: number;
    item: string;
    link?: string;
    subItem?: MenuList[];
  };
  const menuItem: MenuList[] = [
    {
      id: 1,
      item: "Home",
      link: "/home",
    },
    {
      id: 2,
      item: "Shop",
      link: "/shop",
      subItem: [
        {
          id: 3,
          item: "Engine Oil",
          link: "/shop/electronics",
        },
        {
          id: 4,
          item: "Additives",
          link: "/shop/clothing",
        },
        {
          id: 5,
          item: "COOLANT",
          link: "/shop/clothing",
        },
        {
          id: 6,
          item: "GEAR AND TRANSMISSION Fluid",
          link: "/shop/clothing",
        },
        {
          id: 7,
          item: "Maintenance And Care",
          link: "/shop/clothing",
        },
      ],
    },
    {
      id: 8,
      item: "About Us",
      link: "/about",
    },
    {
      id: 9,
      item: "Contact",
      link: "/contact",
    },
    {
      id: 10,
      item: "Faq",
      link: "/Faq",
    },
  ];

  const handleSubmen = (menuId: number) => {
    setiscurrent((prev) => {
      return prev == menuId ? null : menuId;
    });
  };
  return (
    <div>
      {/* Menu Button */}
      <div
        className="flex gap-x-[10px] items-center cursor-pointer"
        onClick={handleClick}
      >
        <Image src="/MenuIcon.svg" alt="Menu Icon" width={16} height={16} />
        <p className="font-poppins font-black uppercase text-[12px] text-white">
          Menu
        </p>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 w-full flex flex-col gap-y-1.5 bg-primaryBlue px-[2.5%] overflow-hidden delay-150 transition-[height] duration-500 ease-in-expo z-50 ${
          open ? "h-[100dvh]" : "h-0"
        }`}
      >
        <div
          className={`flex gap-x-[10px] items-center cursor-pointer py-[18px] transition-all duration-200 ease-in-out justify-end ${
            open
              ? "delay-600 opacity-100 translate-y-0"
              : "delay-0 opacity-0 -translate-y-[5px]"
          }`}
          onClick={handleClick}
        >
          <Image
            src="/MenuIconYellow.svg"
            alt="Menu Icon"
            className="-translate(50,50) rotate-45"
            width={16}
            height={16}
          />
          <p className="font-poppins font-black uppercase text-[12px] text-white">
            Menu
          </p>
        </div>

        {/* menuitem */}
        <div className="flex flex-col justify-between h-full relative">
          <div className="flex flex-col gap-y-[20px] mt-[30px]">
            {menuItem?.map((list) =>
              list.subItem ? (
                <div key={list.id}>
                  <div
                    onClick={() => handleSubmen(list.id)}
                    className={`duration-300 ${
                      open
                        ? "delay-600 opacity-100 translate-y-0"
                        : "delay-0 opacity-0 translate-y-[5px]"
                    }`}
                  >
                    <div className="flex items-center gap-x-2.5 text-white uppercase hover:text-primaryYellow transition-all ease-in duration-150">
                      <p className="font-poppins font-bold text-[24px]">
                        {list.item}
                      </p>
                      <span className="text-[18px]">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                  {iscurrent === list.id && (
                    <div className="absolute bg-primaryBlue w-full h-full top-0 left-0 z-50 overflow-hidden">
                      <div>
                        <div className="flex items-center justify-between mt-[15px] pb-[25px] mb-[35px] border-b border-white">
                          <div>
                            <span
                              className="text-[18px] text-white"
                              onClick={() => setiscurrent(null)}
                            >
                              <FaArrowLeft />
                            </span>
                          </div>
                          <div className="font-poppins font-black text-[14px] text-white uppercase">
                            {list.item}
                          </div>
                          <div className="text-primaryBlue">test</div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                          {list.subItem.map((subitem) => (
                            <div
                              key={subitem.id}
                              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                iscurrent === list.id
                                  ? "translate-x-0 opacity-100 visible"
                                  : "translate-x-5 opacity-0 invisible"
                              }`}
                            >
                              <Link
                                href={`${subitem.link}`}
                                className="font-poppins font-black text-[16px] text-white uppercase"
                              >
                                {subitem.item}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={"/"}
                  key={list.id}
                  className={`duration-300 ${
                    open
                      ? "delay-600 opacity-100 translate-y-0"
                      : "delay-0 opacity-0 translate-y-[5px]"
                  }`}
                >
                  <p className="font-poppins font-bold text-[24px] text-white uppercase hover:text-primaryYellow transition-all ease-in duration-150">
                    {list.item}
                  </p>
                </Link>
              )
            )}
          </div>

          {/* social media */}
          <div>
            {/* buuton for mobile */}
            <div>
              <a
                href="#"
                className="md:hidden text-white text-[16px] uppercase cursor-pointerfont-poppins font-black hover:underline mb-[15px] hover:text-primaryYellow duration-150"
              >
                Sign up
              </a>
            </div>
            <div className="py-[15px]">
              <p className="font-poppins text-white">social media</p>
            </div>
          </div>
        </div>
      </div>

      {/* test */}
    </div>
  );
};

export default Menu;
