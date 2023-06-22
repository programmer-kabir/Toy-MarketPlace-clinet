import { Button } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
        <div>
            <div className="relative bg-[url(https://i.ibb.co/gFrTv5x/1.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-[#161616] sm:to-[rgba(21, 21, 21, 0)] bg-gradient-to-r "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left ">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Let us find your
            <strong className="block font-extrabold text-orange-600">
              Forever Car.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-gray-200 sm:text-xl/relaxed">
            Back in 1959, prominent Jaguar dealer Wally Troy set out to build
            his ideal sports car from scratch.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button>Get Started</Button>
            <Button color="gray">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
        </div>
  );
};

export default Banner;
