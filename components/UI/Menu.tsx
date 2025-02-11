"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaFacebook } from "react-icons/fa";

const Menu = () => {
  type MenuList = {
    id: number;
    item: string;
    link?: string;
    subItem?: MenuList[];
  };

  const [menuopen, setmenuopen] = useState<boolean>(false);
  const [subopen, setsubopen] = useState<boolean>(false);
  const [subItem, setsubItem] = useState<Array<MenuList>>([]);

  const menuItem: MenuList[] = [
    {
      id: 1,
      item: "Home",
      link: "/",
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
      item: "Brands",
      link: "/about",
      subItem: [
        {
          id: 9,
          item: "Motul",
          link: "/about",
        },
        {
          id: 10,
          item: "Liqui Moly",
          link: "/about",
        },
        {
          id: 11,
          item: "Mobil",
          link: "/about",
        },
      ],
    },
    {
      id: 12,
      item: "About Us",
      link: "/about",
    },
    {
      id: 13,
      item: "Contact",
      link: "/contact",
    },
    {
      id: 14,
      item: "Faq",
      link: "/Faq",
    },
  ];

  const handleSubOpen = (item: MenuList): void => {
    setsubopen((prev) => !prev);
    if (item.subItem) {
      setsubItem([...item.subItem]);
    } else {
      setsubItem([]); // Reset subItem if no subItem exists
    }
  };

  return (
    <div>
      {/* collapsible menu button */}
      <div className="flex justify-start z-50">
        <div
          className="flex gap-x-2.5 items-center cursor-pointer"
          onClick={() => setmenuopen((prev) => !prev)}
        >
          <Image
            src={"/Images/MenuIcon.svg"}
            alt="Menu Icon"
            width={16}
            height={16}
          />
          <span className="font-poppins font-black uppercase text-[12px] text-white">
            Menu
          </span>
        </div>
      </div>
      {/* collapsible menu button */}

      {/* dropdown menu */}
      <div
        className={`absolute top-0 left-0 w-full flex bg-primaryBlue overflow-hidden  transition-[height] ease-in-expo z-20 ${
          menuopen ? "h-[100dvh] duration-400" : "h-0 duration-600"
        }`}
      >
        <div className="absolute left-0 top-0 w-full z-10">
          <div
            className={`flex items-center ${
              subopen ? "justify-between" : "justify-end"
            } px-5 py-1.5`}
          >
            {subopen && (
              <span
                className="text-white cursor-pointer bg-red-500"
                onClick={() => setsubopen((prev) => !prev)}
              >
                Back Icon
              </span>
            )}
            <div
              className={`flex gap-x-[10px] items-center cursor-pointer py-[18px] transition-all duration-200 ease-in-out justify-end ${
                menuopen
                  ? "delay-500 opacity-100 translate-y-0"
                  : "delay-0 opacity-0 -translate-y-[5px]"
              }`}
              onClick={() => setmenuopen((prev) => !prev)}
            >
              <Image
                src={"/Images/MenuIconYellow.svg"}
                alt="Close Icon"
                width={16}
                height={16}
                className="rotate-45"
              />
              <span className="font-poppins font-black uppercase text-[12px] text-white">
                Menu
              </span>
            </div>
          </div>
        </div>
        {/* main menu */}
        <div
          className={`flex flex-col justify-between pt-[60px] w-full lg:w-[50%] ps-2.5 `}
        >
          <div
            className={`relative ease-in-out transition-all ${
              menuopen
                ? "delay-600 duration-300 opacity-100 translate-y-0"
                : "delay-0 duration-100 opacity-0 -translate-y-[10px]"
            }`}
          >
            <ul
              className={`px-10 absolute flex flex-col gap-y-[15px] w-full h-[400px] transition-all ease-in-out duration-300 ${
                subopen
                  ? "-left-[155px] opacity-0 z-[-1]"
                  : "left-[0] opacity-100"
              }`}
            >
              {menuItem?.map((item) =>
                item.subItem ? (
                  <li key={item.id}>
                    <div className="inline-block">
                      <p
                        onClick={() => handleSubOpen(item)}
                        className="flex items-center gap-x-2.5 text-[28px] text-white font-bold cursor-pointer uppercase active:text-primaryYellow hover:text-primaryYellow transition-all ease-in-out duration-150"
                      >
                        {item.item}
                        <span className="text-[18px]">
                          <FaArrowRight />
                        </span>
                      </p>
                    </div>
                  </li>
                ) : (
                  <li
                    key={item.id}
                    onClick={() => setmenuopen((prev) => !prev)}
                  >
                    <Link
                      className="text-[28px] text-white font-bold cursor-pointer uppercase hover:text-primaryYellow transition-all ease-in-out duration-150 active:text-primaryYellow"
                      href={`${item.link}`}
                    >
                      {item.item}
                    </Link>
                  </li>
                )
              )}
            </ul>
            {/* submenu */}
            <ul
              className={`px-10 absolute flex flex-col gap-y-[15px] w-full h-[400px] transition-all ease-in-out duration-300 ${
                subopen
                  ? "left-[0px] opacity-100"
                  : "left-[155px] z-[-1] opacity-0"
              }`}
            >
              {subItem.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[25px] text-white font-bold cursor-pointer uppercase hover:text-primaryYellow"
                    href={`#`}
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* submenu */}
          </div>
          {/* main menu */}
          <div className="px-10">
            <div
              className={`transition-all ease-in-out ${
                menuopen
                  ? "delay-700 duration-300 opacity-100 translate-y-0"
                  : "delay-0 duration-100 opacity-0 -translate-y-[10px]"
              }`}
            >
              <div className="text-white font-poppins text-[17px] font-semibold cursor-pointer hover:text-primaryYellow duration-150 transition-all">
                <Link href={"#"}> SIGN UP</Link>
              </div>
              <div className="text-white py-6 flex justify-between">
                <div className="flex gap-x-2.5">
                  <FaFacebook />
                  <FaFacebook />
                  <FaFacebook />
                  <FaFacebook />
                </div>
                <div>
                  <FaFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-[#5c5a5a] overflow-hidden relative hidden lg:flex lg:w-[50%] lg:h-full lg:before:absolute lg:before:content-[''] lg:before:w-full lg:before:h-full lg:before:top-0 lg:before:left-0 lg:before:bg-primaryBlue transition-all ease-in-out ${
            menuopen
              ? "lg:before:left-[100%] lg:before:delay-500 lg:before:duration-300"
              : "lg:before:left-[0] lg:before:delay-0 lg:before:duration-200"
          }`}
        >
          <div className="w-full">
            <div className=" flex justify-center items-center h-[70%] w-full overflow-hidden">
              <Image
                src={"/Images/Lubrify.jpg"}
                alt="Social Media"
                width={800}
                height={800}
                className="object-center w-full"
              />
            </div>
            <div className="font-poppins px-10 py-5 flex flex-col gap-y-4">
              <h2 className="text-[28px] font-bold text-white uppercase hover:underline cursor-pointer">
                Liqui Moly Street Race 4T Synth 10W-40 Full Synthetic
              </h2>
              <Link
                href={"#"}
                className="inline-block font-bold text-white cursor-pointer hover:underline"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* dropdown menu */}
    </div>
  );
};

export default Menu;
