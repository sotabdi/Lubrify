"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Menu = () => {
  const [menuopen, setmenuopen] = useState<boolean>(false);
  const [subopen, setsubopen] = useState<boolean>(false);

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

  const handleSubOpen = (id: number): void => {
    setsubopen((prev) => !prev);
    console.log(id);
  };
  return (
    <div>
      {/* colapsable menu button */}
      <div className="flex justify-start">
        <div
          className="bg-amber-200 flex gap-x-2.5 items-center cursor-pointer"
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
      {/* colapsable menu button */}

      {/* dropdown menu */}
      <div
        className={`absolute top-0 left-0 w-full flex flex-col gap-y-1.5 bg-primaryBlue px-[2.5%] overflow-hidden delay-150 transition-[height] duration-500 ease-in-expo z-50 ${
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
              className="text-white"
              onClick={() => setsubopen((prev) => !prev)}
            >
              back
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
              className="rotate-45
               -translate(50,50)"
            />
            <span className="font-poppins font-black uppercase text-[12px] text-white">
              Menu
            </span>
          </div>
        </div>
        {/* main menu */}
        <div>
          <ul
            className={`flex flex-col px-10 gap-y-[10px]  ease-in-out duration-200 relative`}
          >
            {menuItem?.map((item) => (
              <li key={item.id}>
                {item.subItem ? (
                  <div
                    key={item.id}
                    className={`ease-in-out duration-200 cursor-pointer uppercase  ${
                      subopen
                        ? "-translate-x-6 opacity-0 absolute "
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    <p
                      onClick={() => handleSubOpen(item.id)}
                      className={`flex items-center gap-x-2.5 text-[28px] text-white font-bold`}
                    >
                      {item.item}
                      <span className="text-[18px]">
                        <FaArrowRight />
                      </span>
                    </p>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className={`ease-in-out duration-200 cursor-pointer uppercase  ${
                      subopen
                        ? "-translate-x-6 opacity-0 absolute"
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    <Link
                      className="text-[28px] text-white font-bold"
                      href={`${item.link}`}
                    >
                      {item.item}
                    </Link>
                  </div>
                )}
                <div
                  className={`absolute top-0 left-[100%] bg-primaryBlue w-full h-full ${
                    subopen
                      ? "translate-x-0 opacity-100 left-[100%] duration-200"
                      : "translate-x-6 opacity-0 absolute"
                  }`}
                >
                  {item.subItem?.map((subItem) => (
                    <div
                      key={subItem.id}
                      className={`flex flex-col text-white ease-in-out ${
                        subopen
                          ? "translate-x-0 opacity-100 duration-200"
                          : "translate-x-6 opacity-0 absolute"
                      } `}
                    >
                      <Link href={`${subItem.link}`}>{subItem.item}</Link>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* main menu */}

        {/* submenu */}
        {/* submenu */}
      </div>
      {/* dropdown menu */}
    </div>
  );
};

export default Menu;
