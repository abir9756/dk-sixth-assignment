'use client'
import React, { useContext } from "react";

import Logo from "@/app/asset/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FitContext } from "@/context/FitContext";
import { TbCircleNumber0 } from "react-icons/tb";
const Navbar = () => {
      const {todaysPlan,saved} = useContext(FitContext)
    
    const pathname = usePathname()

    const link= <>
    <li><Link className={pathname==="/" ? "text-[#C2F800] rounded-4xl bg-[#1A2312]" :""} href={'/'}>Workouts</Link></li>
    <li><Link className={pathname==="/myPlan" ? "text-[#C2F800]  rounded-4xl bg-[#1A2312]" :""} href={'/myPlan'}>My Plan</Link></li>
    
   
    
    </>
    const buttonLink = <>
    {/* <div className="badge badge-primary badge-sm"></div> */}
           <Link href={'/myPlan'} className="btn bg-black border-none shadow-none">Plan<div className="badge bg-[#C2F800] badge-xs font-bold text-xs text-black">{todaysPlan.length}</div> </Link>
          <Link  href={'/myPlan'} className="btn bg-black border-none shadow-none">Saved <div className="badge  badge-xs font-bold text-xs bg-black border border-[#2D313B] text-[#D1D5DB]">{saved.length}</div></Link>
    </>


  return (

    <nav className=" bg-black shadow-sm border-b mb-12 border-b-[#2D313B]">
    <div className="container mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-4xl z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="flex items-center gap-2 font-bold text-2xl ">
          <Image src={Logo} alt="Logo"></Image>
          <h2>FITLOG</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {link}
        </ul>
      </div>
      <div className="navbar-end">
    {buttonLink}
            
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
