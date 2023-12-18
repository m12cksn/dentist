import React from "react";
import Navbar from "./Navbar";
import { BsDashLg } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b sm:bg-gradient-to-l from-sky-500 via-sky-100 md:via-sky-200 to-white md:to-sky-50 ">
      <Navbar />
      <div className="max-w-md  sm:max-w-3xl lg:pb-5 md:max-w-4xl lg:max-w-[59rem] xl:max-w-6xl 2xl:max-w-7xl lg:container  justify-center mx-auto lg:items-center  lg:grid grid-cols-12 pt-5 sm:pt-7">
        <div className="px-5  sm:px-7 mx-auto col-span-7  md:px-12 lg:px-0 xl:col-span-6">
          <h1 className="flex items-center gap-3  text-blue-500 sm:text-lg font-semibold">
            <span>
              <BsDashLg className="font-semibold text-blue-500 sm:text-lg " />
            </span>
            Award winning Dentist clinic
          </h1>
          <h1 className="text-4xl font-semibold mt-4 sm:mt-5 text-slate-800 sm:text-6xl md:text-7xl lg:text-[5rem]  lg:leading-tight ">
            We earn your trust in{" "}
            <span className="relative z-30">
              dental{" "}
              <Image
                className="w-36 sm:w-52 md:w-56 absolute top-2 right-0 md:left-0"
                src={"/images/circle.png"}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />{" "}
            </span>{" "}
            care
          </h1>
          <h2 className="mt-5 sm:mt-7 text-slate-800 text-lg md:text-xl md:font-semibold lg:text-2xl">
            Putting your dental health in trusted hands
          </h2>
          <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row sm:items-center  gap-5">
            <Link
              className="text-slate-900 lg:text-xl hover:text-slate-500 transition-all duration-300 ease-in-out sm:font-semibold"
              href="#"
            >
              Get a Consultation
            </Link>
            <div className="mt-2">
              <Link
                className="text-slate-50 lg:text-xl rounded-md shadow px-5 py-3 bg-slate-900 hover:text-slate-500 transition-all duration-300 ease-in-out"
                href="#"
              >
                Browse Service
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center   col-span-5 w-full lg:static xl:col-span-6 relative sm:mt-24 lg:mt-0 mt-5">
          <div className="bg-gradient-to-b lg:hidden sm:max-w-3xl md:max-w-5xl  z-30 absolute from-transparent   via-white to-white w-full bottom-0 h-48 inset-x-0 "></div>
          <Image
            className="max-w-sm  sm:max-w-lg md:max-w-2xl relative px-3 object-cover lg:px-0 xl:px-0"
            src={"/images/hero1.png"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
