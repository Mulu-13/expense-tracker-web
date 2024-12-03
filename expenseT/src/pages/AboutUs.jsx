import React from "react";
import Image from "../assets/a.jpg";
import { Link } from "react-router-dom";
import Expense from "../Components/Expense";
import Video from "../assets/Seldi.mp4";

const AboutUs = () => {
  return (
    <div className="">
      <nav className="relative container mx-auto p-2 ">
        <div className="flex items-center justify-between">
          <div className="pt-2 flex flex-row gap-2 items-center ">
            <img src={Image} alt="Image" className="h-8 w-8 rounded-lg" />
            <p className="text-3xl font-semibold text-gray-800 font-">
              Dormina
            </p>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link className="text-xl hover:text-gray-600" to={"/"}>
              Product
            </Link>
            <Link className="text-xl hover:text-gray-600" to={"/"}>
              About Us
            </Link>
            <Link className="text-xl hover:text-gray-600" to={"/"}>
              Community
            </Link>
          </div>
          <div className="">
            <button className="hidden md:block rounded-3xl text-xl bg-gray-900 text-white pt-2 pb-3  px-3 content-baseline">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <section className="w-full">
        <Expense />
      </section>
      {/* <div className="max-w-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-black w-full h-full rounded-md">
            <video
              src={Video}
              className="border-[20px] border-black rounded-lg"
              controls
            ></video>
          </div>
          <div className="bg-black w-16 h-16"></div>
          <div className="bg-black w-24 h-3"></div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
