"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import Image from "next/image";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const menus = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/dental",
      title: "Dental",
    },
    {
      link: "/destination",
      title: "Destination",
    },
    {
      link: "/pages",
      title: "Pages",
    },
    {
      link: "/blog",
      title: "Blog",
    },
    {
      link: "/contact",
      title: "Contact",
    },
  ];

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <div className=" w-full  md:shadow-none  z-40 ">
      <header className="md:rounded-lg  top-5   w-full ease-in-out duration-500  z-50">
        <nav className="2xl:max-w-7xl  lg:pt-14 xl:max-w-7xl lg:max-w-5xl  md:rounded-lg container   flex justify-between items-center py-5 md:py-6 lg:py-6 px-6 xl:px-0 md:px-8 lg:px-10">
          {/* ==== Menu Desktop ====  */}
          <Link href="/" className="flex items-center  rounded-full">
            <Image
              className="w-16 lg:w-24 h-full    object-cover  bg-cover bg-center"
              src={"/images/logo.png"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
          </Link>
          <div className="lg:flex  gap-14">
            <div className="lg:flex gap-7 hidden items-center">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  className=" text-slate-600 lg:font-semibold hover:text-slate-900 ease-in-out duration-150 transition-all text-xl  md:text-[1.1rem]"
                  href={menu.link}
                >
                  <h1>{menu.title}</h1>
                </Link>
              ))}
            </div>
            {/* <div className=" hidden lg:flex items-center gap-7"></div> */}
          </div>

          {/* ==== Menu Mobile ====  */}
          <div
            className="flex lg:hidden"
            onClick={handleSmallerScreenNavigation}
          >
            {/* {openIndexes.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
            {menuIcon ? (
              <ImMenu4
                size={28}
                className="text-textBase  w-14 h-14 text-sky-200 transition-all duration-500 ease-in-out"
              />
            ) : (
              <ImMenu3
                size={28}
                className="text-textBase w-14 h-14 text-sky-200 transition-all duration-500 ease-in-out"
              />
            )}
          </div>
          <div
            className={
              menuIcon
                ? "lg:hidden absolute top-[82px] right-0 bottom-0 z-50 left-0 flex justify-center items-start pt-14 w-[70%] h-screen bg-gradient-to-b from-sky-400 via-cyan-400 text-slate-700 ease-in-out duration-500"
                : "lg:hidden absolute top-[82px] right-0 z-50  -left-[65rem] flex justify-center items-start pt-14 w-[70%] h-screen  bg-gradient-to-b from-sky-400 via-cyan-400 text-slate-800 ease-in-out duration-500"
            }
          >
            <div className="w-full">
              <ul className=" font-extralight text-lg flex flex-col justify-center ml-10 gap-7">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    onClick={handleSmallerScreenNavigation}
                    className="font-semibold  ease-in-out duration-150 transition-all"
                  >
                    <Link
                      className="   hover:text-slate-400 transition-all duration-300 ease-in-out "
                      href={menu.link}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
