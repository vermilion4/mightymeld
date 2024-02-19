import React from "react";

export default function Main() {
  return (
    <>
      <div className="px-6 md:flex md:justify-center md:space-x-5 md:px-14 mb-10">
        <div className="mt-16 py-4 px-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 hover:rotate-y-180">
          <div className="w-sm">
            <img
              className="w-64 mx-auto"
              src="https://source.unsplash.com/random/200x200"
              alt=""
            />
            <div className="py-4 text-sky-600 text-center flex flex-col gap-4">
              <h1 className="text-xl font-bold text-purple-600">
                Easy Integration
              </h1>
              <p className=" text-slate-600">
                Integrate our prefab components effortlessly into your existing
                projects, enhancing functionality without the hassle.
              </p>
              <button className="py-2 rounded-full bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-sky-700 hover:to-yellow-600 transition duration-300 ease-in-out px-6 inline font-semibold text-white shadow">
                MORE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 hover:rotate-y-180">
          <div className="w-sm">
            <img
              className="w-64 mx-auto"
              src="https://source.unsplash.com/random/200x200"
              alt=""
            />
            <div className="py-4 text-sky-600 text-center flex flex-col gap-4">
              <h1 className="text-xl font-bold text-purple-600">
                Diverse Selection
              </h1>
              <p className=" text-slate-600">
                Integrate our prefab components effortlessly into your existing
                projects, enhancing functionality without the hassle.
              </p>
              <button className="py-2 rounded-full bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-sky-700 hover:to-yellow-600 transition duration-300 ease-in-out px-6 inline font-semibold text-white shadow">
                MORE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 hover:rotate-y-180">
          <div className="w-sm">
            <img
              className="w-64 mx-auto"
              src="https://source.unsplash.com/random/200x200"
              alt=""
            />
            <div className="py-4 text-sky-600 text-center flex flex-col gap-4">
              <h1 className="text-xl font-bold text-purple-600 line-clamp-1">
                Optimized Performance
              </h1>
              <p className=" text-slate-600">
                Integrate our prefab components effortlessly into your existing
                projects, enhancing functionality without the hassle.
              </p>
              <button className="py-2 rounded-full bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-sky-700 hover:to-yellow-600 transition duration-300 ease-in-out px-6 inline font-semibold text-white shadow">
                MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-purple-600 py-10 w-full px-4 flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-semibold leading-9 text-white text-center">
          Stay Updated!
        </h1>
        <p className="text-base leading-normal text-center text-white mt-6">
          Subscribe to our newsletter to get the latest update on your favourite
          product
        </p>
        <div className="border border-white flex flex-col sm:flex-row items-center w-full lg:w-5/12 mt-12 ">
          <input
            className="text-base w-full outline-none leading-none text-white px-3 py-2 lg:py-3 bg-transparent"
            placeholder="Email Address"
          />
          <button className="focus:outline-none w-full bg-white px-3 py-2 lg:py-3 hover:bg-opacity-75">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
