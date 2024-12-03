import React from "react";
import Logo from "../assets/a.jpg";

const Login = () => {
  return (
    <div>
      <section className="bg-gray-800">
        <div className="">
          <div className=" px-6 py-8 rounded-md bg-gray-500 text-black">
            <div className="flex flex-row justify-center">
              <img
                src={Logo}
                alt=""
                width={200}
                height={200}
                className="h-200 w-200"
              />
            </div>
            <form>
              <h2 className="text-2xl text-center font-bold text-gray-800 mb-6 uppercase mx-4">
                Welcome Back
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-lg font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="border rounded w-full mb-2 text-white bg-gray-800 p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Password"
                  className="block text-lg text-while font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="Password"
                  name="Password"
                  id="Password"
                  placeholder="Your Password"
                  className="border rounded w-full mb-2 bg-gray-800 text-white p-2"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-full mx-auto hover:bg-gray-950 focus:outline-none focus:shadow-lg"
                >
                  Login Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
