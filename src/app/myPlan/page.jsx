"use client";

import { FitContext } from "@/context/FitContext";
import React, { useContext, useState } from "react";
import MyPlanDataCard from "../addedDataCard/MyPlanDataCard";
import SavedDataCard from "../addedDataCard/SavedDataCard";
import Link from "next/link";

const MyPlanPage = () => {
  const { todaysPlan, saved } = useContext(FitContext);
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [sortBy, setSortBy] = useState("Duration");

  const sortPlan = (plan) => {
    return [...plan].sort((a, b) => {
      if (sortBy === "Duration") {
        return b.duration - a.duration;
      }
      if (sortBy === "Calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }
      if (sortBy === "Rating") {
        return b.rating - a.rating;
      }
      return 0;
    });
  };

  const sortedTodaysPlan = sortPlan(todaysPlan);
  const sortedSaved = sortPlan(saved);



    const TotalMinutes = todaysPlan.reduce(
    (total, plan) => total + plan.duration,
    0,
  );
  const TotalCalories = todaysPlan.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0,
  );

      const totalMinutes = saved.reduce(
    (total, plan) => total + plan.duration,
    0,
  );
  const totalCalories = saved.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0,
  );

  return (
    <div className="py-10 px-12 text-center md:text-start">
      <div>
        <h1 className="font-bold text-4xl">MY PLAN</h1>
        <p className="text-[#8A92A0] text-2xl">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {activeTab === "Today's Plan" ? (
        <div className="px-6  pt-8 pb-6 my-6 flex justify-between bg-[#13161D] rounded-2xl">
          <div >
            <h4 className="text-[#8A92A0]">Exercises</h4>
            <h1 className="text-[#CCFF00] font-bold text-4xl">{todaysPlan.length}</h1>
          </div>
          <div className=" border-l border-l-[#2D313B] px-3 md:px-8">
            <h4 className="text-[#8A92A0]">Minutes</h4>
            <h2 className="font-bold text-4xl">{TotalMinutes}</h2>
          </div>
          <div className=" border-l border-l-[#2D313B] px-3 md:px-8">
            <h4 className="text-[#8A92A0]">Calories</h4>
            <h2 className="font-bold text-4xl">{TotalCalories}</h2>
          </div>
        </div>
      ) : activeTab === "Saved" ? (
           <div className="px-6  pt-8 pb-6 my-6 flex justify-between bg-[#13161D] rounded-2xl">
          <div>
            <h4 className="text-[#8A92A0]">Exercises</h4>
            <h1 className="text-[#CCFF00] font-bold text-4xl">{saved.length}</h1>
          </div>
          <div className=" border-l border-l-[#2D313B] px-3 md:px-8">
            <h4 className="text-[#8A92A0]">Minutes</h4>
            <h2 className="font-bold text-4xl">{totalMinutes}</h2>
          </div>
          <div className=" border-l border-l-[#2D313B] px-3 md:px-8">
            <h4 className="text-[#8A92A0]">Calories</h4>
            <h2 className="font-bold text-4xl">{totalCalories}</h2>
          </div>
        </div>
      ) : 
        ""
      }

      <div className="md:flex justify-between mb-6">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box  rounded-xl">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
            onChange={() => setActiveTab("Today's Plan")}
          />

          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Saved"
            onChange={() => setActiveTab("Saved")}
          />
        </div>
        <div className="md:flex items-center gap-2">
          <h2 className="text-[#8A92A0]">Sort By</h2>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              // defaultValue="Pick a color"
              className="select rounded-xl"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {activeTab === "Today's Plan" ? (
          sortedTodaysPlan.length > 0 ? (
            sortedTodaysPlan.map((plan) => (
              <MyPlanDataCard key={plan.id} plan={plan}></MyPlanDataCard>
            ))
          ) : (
            <div className="border border-dashed border-[#A1A1AA] rounded-xl text-center px-4 py-24 ">
              <div>
                <h1 className="pb-2 font-bold text-2xl">NOTHING HERE YET</h1>
                <p className="pb-6 text-md text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href={"/"}>
                  <button className="btn  bg-[#CCFF00] font-semibold text-black rounded-3xl">
                    Go to workouts
                  </button>
                </Link>
              </div>
            </div>
          )
        ) : activeTab === "Saved" ? (
          sortedSaved.length > 0 ? (
            sortedSaved.map((plan) => (
              <SavedDataCard key={plan.id} plan={plan}></SavedDataCard>
            ))
          ) : (
            <div className="border border-dashed border-[#A1A1AA] rounded-xl text-center px-4 py-24 ">
              <div>
                <h1 className="pb-2 font-bold text-2xl">NOTHING HERE YET</h1>
                <p className="pb-6 text-md text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href={"/"}>
                  <button className="btn  bg-[#CCFF00] font-semibold text-black rounded-3xl">
                    Go to workouts
                  </button>
                </Link>
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
