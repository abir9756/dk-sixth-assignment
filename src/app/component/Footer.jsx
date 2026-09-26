import Image from "next/image";
import React from "react";
import Logo from "@/app/asset/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#090A0D] mt-16">
        <div className="divider"></div>
      <div className="container mx-auto md:flex md:justify-between text-center py-10">
        <div className="flex justify-center gap-3">
          <Image src={Logo} alt="Logo" ></Image>
          <h2 className="font-bold text-xl">FITLOG</h2>
        </div>
        <Link href={""}>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </Link>
      </div>
    </div>
  );
};

export default Footer;
