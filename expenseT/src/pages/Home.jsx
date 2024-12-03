import React from "react";
import Login from "./Login";
import Image from "../assets/user.jpg";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 bg-gray-500 mt-4">
      <div className="w-full flex flex-row justify-center items-center gap-3">
        <div className="hidden md: md:block md:w-2/3 md:bg-[url('src/assets/user.jpg')] md:h-96 md:bg-auto md:bg-no-repeat md:bg-center md:bg-gray-500 md:rounded-lg"></div>
        <div className="w-[70%] md:w-1/3 md:border md:border-gray-600">
          <Login />
        </div>
      </div>
      {/* <div className="bg-gray-200 tablet:bg-gray-600 h-20 w-20 my-10">

      </div> */}
    </div>
  );
};

export default Home;
