import React from "react";

const Banner = () => {
  return (
    <div className="bg-emerald-800 py-12 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            Featured Product
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Amazing Product Name
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac libero venenatis hendrerit.
          </p>
          <div className="mt-6">
            <a
              href="#cta"
              className="inline-block text-base font-semibold bg-white hover:bg-gray-100 px-6 py-3 rounded-lg shadow-lg"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
