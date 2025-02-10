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
      <div className="flex justify-start">
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
        className={`absolute top-0 left-0 w-full flex flex-col gap-y-1.5 bg-primaryBlue px-[2.5%] overflow-hidden  transition-[height] duration-500 ease-in-expo z-50 ${
          menuopen ? "h-[100dvh]" : "h-0"
        }`}
      >
        <div
          className={`flex items-center ${
            subopen ? "justify-between" : "justify-end"
          } px-2.5 py-2.5`}
        >
          {subopen && (
            <span
              className="text-white cursor-pointer"
              onClick={() => setsubopen((prev) => !prev)}
            >
              Back Icon
            </span>
          )}
          <div
            className={`flex gap-x-[10px] items-center cursor-pointer py-[18px] transition-all duration-200 ease-in-out justify-end ${
              menuopen
                ? "delay-600 opacity-100 translate-y-0"
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
        {/* main menu */}
        <div
          className={`flex flex-col justify-between h-full w-full duration-150 ${
            !menuopen
              ? "-translate-y-2 opacity-0"
              : "-translate-y-0 opacity-100"
          }`}
        >
          <div
            className={`px-10 flex justify-between ease-in transition-all delay-500 duration-300 ${
              menuopen ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul
              className={`flex-shrink-0 w-[250px] flex flex-col gap-y-[15px] transition-all ease-in-out duration-300 z-10 ${
                subopen
                  ? "-translate-x-[100px] opacity-0 "
                  : "translate-x-0 opacity-100"
              }`}
            >
              {menuItem?.map((item) =>
                item.subItem ? (
                  <li key={item.id}>
                    <p
                      onClick={() => handleSubOpen(item)}
                      className="flex items-center gap-x-2.5 text-[28px] text-white font-bold cursor-pointer uppercase active:text-primaryYellow hover:text-primaryYellow transition-all ease-in-out duration-150"
                    >
                      {item.item}
                      <span className="text-[18px]">
                        <FaArrowRight />
                      </span>
                    </p>
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
              className={`flex-shrink-0  w-[250px] flex flex-col gap-y-[15px] transition-all ease-in-out duration-300 ${
                subopen
                  ? "-translate-x-[250px] opacity-100"
                  : "-translate-x-[150px] opacity-0 "
              }`}
            >
              {subItem.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[25px] text-white font-bold cursor-pointer uppercase"
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
              className={`delay-600 duration-300 ease-in ${
                menuopen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-white font-poppins font-semibold cursor-pointer hover:text-primaryYellow duration-150 transition-all">
                <Link href={"#"}> SIGN UP</Link>
              </div>
              <div className="text-white py-4">
                <div className="flex gap-x-2.5">
                  <FaFacebook />
                  <FaFacebook />
                  <FaFacebook />
                  <FaFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* dropdown menu */}
    </div>
  );
};

export default Menu;
