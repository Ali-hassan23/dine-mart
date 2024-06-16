import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="min-h-screen max-w-5xl sm:mx-auto flex flex-col sm:flex-row justify-between sm:items-center mx-8 gap-8 text-gray-600">
        <div className="w-48 flex flex-col gap-8">
          <Link href="/">
            <Image src="/Logo.webp" alt="Dine Mart" width={150} height={150} className="w-auto h-auto"/>
          </Link>
          <p className="">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex flex-row gap-4">
            <Link href="" className="bg-gray-200 p-3 rounded-xl">
              <FaTwitter />
            </Link>
            <Link href="" className="bg-gray-200 p-3 rounded-xl">
              <FaFacebook />
            </Link>
            <Link href="" className="bg-gray-200 p-3 rounded-xl">
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Company</h2>
          <p>About</p>
          <p>Terms of Use</p>
          <p>Privay Policy</p>
          <p>How It Works?</p>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Support</h2>
          <p>Support Carrier</p>
          <p>24h Service</p>
          <p>Chat Support</p>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p>Whatsapp</p>
          <p>Support 24h</p>
        </div>
      </footer>

      <div className="border-t-2 border-gray-700 flex flex-col sm:flex-row justify-between mt-5">
        <div className="max-w-6xl sm:mx-auto flex flex-col sm:flex-row gap-8 justify-between h-20 sm:items-center m-8">
          <p>Copyright 2024 Dine Market</p>
          <p>
            Design by.{" "}
            <span className="font-bold text-gray-600">Wayne Enterprises</span>
          </p>
          <p className="pb-3">
            Code by{" "}
            <Link
              className="font-bold text-gray-600"
              href="https://github.com/Ali-hassan23"
              target="blank"
            >
              @Ali-hassan23
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
