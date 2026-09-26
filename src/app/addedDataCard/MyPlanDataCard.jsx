"use client";
import { FitContext } from "@/context/FitContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { PiFireSimpleFill } from "react-icons/pi";
import { VscChromeClose } from "react-icons/vsc";
import { toast } from "react-toastify";

const MyPlanDataCard = ({ plan }) => {
  const { todaysPlan, setTodaysPlan } = useContext(FitContext);

  const removePlan = (plan) => {
    const deletePlan = todaysPlan.filter((p) => p.id !== plan.id);
    setTodaysPlan(deletePlan);
    toast.warning("Removed from Plan");
  };
  const [active, setActive] = useState(false);
  const handleMark = () => {
    if (!active) {
      toast.success("Marked");
    }
    setActive(!active);
  };

  return (
    <div>
      <div className="card lg:card-side shadow-sm flex items-center justify-between mb-4 p-4 bg-[#13161D] ">
        <div className="md:flex ">
          {/* image */}
          <figure className="rounded-xl">
            <Image
              src={plan.image}
              alt="lifting image"
              width={100}
              height={200}
              className="w-full "
            ></Image>
          </figure>
          {/* detail */}
          <div className="card-body">
            <h2 className="card-title  font-bold text-2xl">{plan.name}</h2>
            <p className="font-semibold text-[#8A92A0]">{plan.equipment}</p>
            <div className="flex gap-4 pt-1.5">
              <p className="flex items-center gap-1">
                <LuClock className="text-[#CCFF00]" />
                {plan.duration} min
              </p>
              <p className="flex items-center gap-1">
                <PiFireSimpleFill className="text-[#CCFF00]" />
                {plan.caloriesBurned} kcal
              </p>
              <p className="flex items-center gap-1">
                <IoMdStarOutline className="text-[#CCFF00]" />
                {plan.rating}
              </p>
            </div>
          </div>
        </div>
        {/* button */}

        <div className="card-actions  items-center">
          <Link href={`/library/${plan.id}`}>
            <button className="btn rounded-3xl text-xs">View Details</button>
          </Link>
          <button
            onClick={handleMark}
            className="btn  bg-[#CCFF00] text-black rounded-3xl"
          >
            {active ? (
              <span className="flex items-center justify-center gap-2">
                <FaCheck />
                Mark as Done
              </span>
            ) : (
              "Mark as Done"
            )}
          </button>
          <VscChromeClose onClick={() => removePlan(plan)} />
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </div>
  );
};

export default MyPlanDataCard;
