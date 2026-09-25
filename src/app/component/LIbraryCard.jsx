import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { PiFireSimpleFill } from "react-icons/pi";

const LIbraryCard = ({ work }) => {
  return (
    <div>
      <Link href={`/library/${work.id}`}>
        <div className="card bg-[#15171D] rounded-3xl shadow-sm">
          <figure>
            <Image
              src={work.image}
              alt="image"
              width={500}
              height={200}
            ></Image>
          </figure>
          <div className="card-body ">
            <div>
              {work.muscleGroups.map((group, ind) => (
                <div
                  key={ind}
                  className="badge bg-[#C2F800] text-black mr-2 rounded-2xl"
                >
                  {group}
                </div>
              ))}
            </div>

            <h1 className="font-bold text-2xl">{work.name}</h1>
            <p className="text-[#9CA3AF]">{work.equipment}</p>
            <div className="divider "></div>

            <div className="flex">
              <p className="flex items-center gap-1">
                <LuClock />
                {work.duration} min
              </p>
              <p className="flex items-center gap-1">
                <PiFireSimpleFill />
                {work.caloriesBurned} kcal
              </p>
              <p className="flex items-center gap-1">
                <IoMdStarOutline />
                {work.rating}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LIbraryCard;
