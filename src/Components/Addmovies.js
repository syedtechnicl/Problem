import React, { useContext, useState } from "react";
import { moviesRef } from "../Firebase/firebase";
import { addDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

const Addmovies = () => {
  const [loading, setloading] = useState(false);
  const [forms, setforms] = useState({
    title: "",
    year: "",
    des: "",
    image: "",
  });

  const AddData = async () => {
    setloading(true);
    try {
      await addDoc(moviesRef, forms);
      swal({
        title: "Successfully Added",
        icon: "success",
        button: false,
        timer: 3000,
      });
    } catch (err) {
      swal({
        title: err.message,
      });
    }
    setloading(false);
  };

  return (
    <>
      <div className="maincontainer">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Add Movies
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text- text-white p-1"
                    >
                      Title
                    </label>
                    <input
                      value={forms.title}
                      onChange={(e) => {
                        setforms({ ...forms, title: e.currentTarget.value });
                      }}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-md text-white">
                      Year
                    </label>
                    <input
                      value={forms.year}
                      onChange={(e) => {
                        setforms({ ...forms, year: e.currentTarget.value });
                      }}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {/* nn */}
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-md text-white"
                    >
                      Image
                    </label>
                    <input
                      id="message"
                      value={forms.image}
                      onChange={(e) => {
                        setforms({ ...forms, image: e.currentTarget.value });
                      }}
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                {/* nn */}
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-md text-white"
                    >
                      Description
                    </label>
                    <input
                      id="message"
                      value={forms.des}
                      onChange={(e) => {
                        setforms({ ...forms, des: e.currentTarget.value });
                      }}
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    onClick={() => {
                      AddData();
                    }}
                    className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none  rounded text-lg hover:bg-green-900"
                  >
                    {" "}
                    {loading ? <TailSpin height={30} /> : "success"}{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Addmovies;
