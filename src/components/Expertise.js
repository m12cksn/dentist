import React from "react";
import Image from "next/image";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { BsDashLg } from "react-icons/bs";

const Expertise = () => {
  return (
    <div className="lg:mt-28">
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto   px-5 lg:px-0 lg:grid grid-cols-12 gap-20 items-center">
        <div className=" md:max-w-2xl mx-auto relative col-span-6">
          <Image
            className="rounded-3xl"
            src={"/images/expert.jpg"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />{" "}
          <h1 className="flex text-xl text-teks items-center top-0 right-0 bg-white absolute py-3 px-6 rounded-bl-3xl">
            {" "}
            <span className="text-3l">
              <FcTouchscreenSmartphone />
            </span>
            +1 241 7710
          </h1>
        </div>
        <div className="md:max-w-md mx-auto col-span-6">
          <p className="flex items-center mt-5 md:mt-12 lg:mt-0 sm:mt-10 gap-3 text-teks sm:text-lg">
            {" "}
            <span>
              <BsDashLg className="font-semibold text-blue-500 sm:text-lg " />
            </span>
            Who we are ?
          </p>
          <h1 className="mt-4 md:mt-5 text-3xl lg:leading-snug font-semibold sm:text-5xl">
            Our sole mission is to bring a{" "}
            <span className="text-teks"> smile to your face.</span>
          </h1>
          <p className="flex items-center mt-5 md:mt-10 gap-3 font-semibold">
            Dr. Amelia Warren,<span className="text-teks">Founder</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
