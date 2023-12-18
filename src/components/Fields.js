import React from "react";
import { BsDashLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Fields = () => {
  const fields = [
    {
      img: "/images/f1.svg",
      name: "Teeth Whitening",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis vitae non!",
      link: "",
    },
    {
      img: "/images/f2.svg",
      name: "Gum Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis vitae non!",
      link: "",
    },
    {
      img: "/images/f3.svg",
      name: "Sleep Apnea",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis vitae non!",
      link: "",
    },
    {
      img: "/images/f4.svg",
      name: "Root Canal",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis vitae non!",
      link: "",
    },
    {
      img: "/images/f5.svg",
      name: "Implants",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis vitae non!",
      link: "",
    },
    {
      img: "/images/f6.svg",
      name: "Dental Crown",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis vitae non!",
      link: "",
    },
  ];
  return (
    <div className="bg-secondary relative mt-28">
      <Image
        className="w-16 lg:w-20 absolute -top-12 right-16 sm:right-24 md:right-48"
        src={"/images/dental.png"}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />{" "}
      <div className="max-w-md sm:max-w-xl md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl mx-auto pt-10  px-5 md:px-0 lg:px-0 lg:pt-36 ">
        <p className="flex items-center mt-5 md:mt-12 lg:mt-0 sm:mt-10 gap-3 text-teks text-lg">
          {" "}
          <span>
            <BsDashLg className="font-semibold text-blue-500 sm:text-lg " />
          </span>
          We are leading dental studio
        </p>
        <h1 className="mt-4 md:mt-5 text-3xl lg:leading-snug font-semibold sm:text-5xl">
          Expertise in our field
        </h1>
        <div className="py-5 grid gap-7 md:mt-10 place-content-center md:grid-cols-2 lg:grid-cols-3 ">
          {fields.map((field, index) => (
            <div className="bg-white px-5 sm:px-7 shadow rounded-md pt-5 sm:pt-7 pb-8 sm:pb-10 ">
              <Image
                className="w-24 "
                src={field.img}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />{" "}
              <div>
                <h1 className="text-xl mt-4 font-semibold">{field.name}</h1>
                <p className="mt-3">{field.desc}</p>
                <div className="mt-5">
                  <Link
                    className="border-b-2 hover:border-slate-900 transition-all duration-[1500ms] ease-in "
                    href=""
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fields;
