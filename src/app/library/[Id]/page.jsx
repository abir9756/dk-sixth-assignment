import MyPlanButton from "@/app/libraryPlan/MyPlanButton";
import SavedButton from "@/app/libraryPlan/SavedButton";
import Image from "next/image";
import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdBookmarkBorder } from "react-icons/md";

const LibraryDetailPage = async ({ params }) => {
  const { Id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`);
  const data = await res.json();
  // console.log(data);


  return (
    <div className="container mx-auto">
      <div className="card lg:card-side gap-14 shadow-sm">
        <figure className="w-full lg:w-1/2 rounded-2xl">
        <Image src={data.image} alt="image" width={800} height={500}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-5xl">{data.name}</h2>
          <p className="text-[#9CA3AF] text-2xl pb-5">{data.description}</p>
            <div className="pb-7">
            {
               data.muscleGroups.map((group,ind)=><div key={ind} className="badge bg-[#C2F800] text-black mr-2 rounded-2xl">{group}</div>)
            }
           </div>

           <div className="rounded-2xl mb-8 bg-[#1E2330] border border-gray-800">
            <div className="border-b py-3.5 px-6 border-gray-800 flex justify-between"><span className="text-[#9CA3AF] font-bold">EQUIPMENT</span><span>{data.equipment}</span></div>
            <div className="border-b py-3.5 px-6 border-gray-800 flex justify-between"><span className="text-[#9CA3AF] font-bold">DIFFICULTY</span><span>{data.difficulty}</span></div>
            <div className="border-b py-3.5 px-6 border-gray-800 flex justify-between"><span className="text-[#9CA3AF] font-bold">SETS</span><span>{data.sets}</span></div>
            <div className="border-b py-3.5 px-6 border-gray-800 flex justify-between"><span className="text-[#9CA3AF] font-bold">REPS</span><span>{data.reps}</span></div>
            <div className="border-b py-3.5 px-6 border-gray-800 flex justify-between"><span className="text-[#9CA3AF] font-bold">DURATON</span><span>{data.duration} min</span></div>
            <div className="border-b py-3.5 px-6 border-gray-800 flex justify-between"><span className="text-[#9CA3AF] font-bold">CALORIES</span><span>{data.caloriesBurned} kcal</span></div>
            <div className=" py-3.5 px-6 flex justify-between"><span className="text-[#9CA3AF] font-bold">RATING</span><span>{data.rating}</span></div>
           </div>


            <div>
                <h1 className="font-extrabold text-2xl mb-4">INSTRUCTIONS</h1>
             <div>
                <ol className="list-decimal pl-4">
                {
                    data.instructions.map((instruction,ind)=>{
                 return   <li className="text-[#D1D5DB] " key={ind}>{instruction}</li>
                })
                }
                </ol>
             </div>

            </div>
          <div className="card-actions ">
            <MyPlanButton data={data}></MyPlanButton>
            <SavedButton data={data}></SavedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetailPage;
