import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const [forms, setforms] = useState({
    mobile: "",
    password: "",
  });

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="w-full flex flex-col mt-8 items-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Login
          </h1>

          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label for="message" className="leading-7 text-md text-white">
                Mobile
              </label>
              <input
                value={forms.name}
                onChange={(e) => {
                  setforms({ ...forms, mobile: e.currentTarget.value });
                }}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <br />
            <div className="relative">
              <label for="message" className="leading-7 text-md text-white">
                Password
              </label>
              <input
                value={forms.password}
                onChange={(e) => {
                  setforms({ ...forms, password: e.currentTarget.value });
                }}
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <br />
            <button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none  rounded text-lg hover:bg-green-900">
              Login
            </button>
            <center>
              <Link to={"/register"}>
                <p className="cursor-pointer text-white pt-3">
                  If You Don't Have Account ?{" "}
                  <span className="text-blue-500">Register</span>
                </p>
              </Link>
            </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
