import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHome,
  FaPhoneAlt,
  FaFax,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-100 mt-6 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
        {/* <h6 className="mb-4 text-xl font-bold  uppercase md:justify-start">
                Troy Sport Car
              </h6> */}
              <img src={"https://i.ibb.co/frHWShB/pngegg.png"} alt="" className="w-1/12" />
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <p>
                Back in 1959, prominent Jaguar dealer Wally Troy set out to
                build his ideal sports car from scratch. The finished Troy
                Roadster was constructed on a custom tube chassis with aluminum
                bodywork and a Chevrolet 283 ci V8 with dual carburetors.
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Toy Cars
              </h6>
              <p className="mb-4">
                <Link className="text-neutral-600 dark:text-neutral-200">
                  sports car
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-neutral-600 dark:text-neutral-200">
                  truck
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-neutral-600 dark:text-neutral-200">
                  mini fire truck
                </Link>
              </p>
              <p>
                <Link className="text-neutral-600 dark:text-neutral-200">
                  mini police car
                </Link>
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <Link className="text-neutral-600 dark:text-neutral-200">
                  Home
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-neutral-600 dark:text-neutral-200">
                  Pricing
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-neutral-600 dark:text-neutral-200">
                  Orders
                </Link>
              </p>
              <p>
                <Link className="text-neutral-600 dark:text-neutral-200">
                  Help
                </Link>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <FaHome className="mr-3 h-6 w-5"></FaHome>
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <HiMail className="mr-3 h-6 w-5"></HiMail>
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-3 h-6 w-5"></FaPhoneAlt>+ 01 234 567
                88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaFax className="mr-3 h-6 w-5"></FaFax>+ 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 mx-auto  ">
          <div className="flex justify-center items-center gap-4 ">
            <FaFacebookF className="w-7 h-6"></FaFacebookF>
            <FaTwitter className="w-7 h-6"></FaTwitter>
            <FaGooglePlusG className="w-7 h-6"></FaGooglePlusG>
            <FaInstagram className="w-7 h-6"></FaInstagram>
            <FaLinkedinIn className="w-7 h-6"></FaLinkedinIn>
            <FaGithub className="w-7 h-6"></FaGithub>
          </div>
        </div>

        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <Link className="font-semibold text-neutral-600 dark:text-neutral-400">
            Troy Sports Car
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
