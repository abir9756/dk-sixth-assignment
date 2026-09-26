"use client";

import { FitContext } from "@/context/FitContext";
import React, { useContext, useState } from "react";
import MyPlanDataCard from "../addedDataCard/MyPlanDataCard";
import SavedDataCard from "../addedDataCard/SavedDataCard";
import Link from "next/link";



const MyPlanPage = () => {
  const { todaysPlan, saved } = useContext(FitContext);
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [sortBy,setSortBy] = useState("Duration")

  return (
    <div className="py-10 px-12">
      <div>
        <h1 className="font-bold text-4xl">MY PLAN</h1>
        <p className="text-[#8A92A0] text-2xl">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="px-6  pt-8 pb-6 my-6 flex justify-between bg-[#13161D] rounded-2xl">
        <div>
          <h4>Exercises</h4>
        </div>
        <div>
          <h4>Minutes</h4>
        </div>
        <div>
          <h4>Calories</h4>
        </div>
      </div>
      <div className="flex justify-between mb-6">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box rounded-xl">
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
        <div className="flex items-center gap-2">
          <h2 className="text-[#8A92A0]">Sort By</h2>
          <div>
            <select defaultValue="Pick a color" className="select rounded-xl">
              <option disabled={true}>Sort By</option>
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {}

        {activeTab === "Today's Plan" ? (
          todaysPlan.length > 0 ? (
            todaysPlan.map((plan) => (
            <MyPlanDataCard key={plan.id} plan={plan}></MyPlanDataCard>)
          )) : (
            <div className="border border-dashed border-[#A1A1AA] rounded-xl text-center px-4 py-24 ">
              <div>
                <h1 className="pb-2 font-bold text-2xl">NOTHING HERE YET</h1>
                <p className="pb-6 text-md text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href={'/'}>
                <button className="btn  bg-[#CCFF00] font-semibold text-black rounded-3xl">
                  Go to workouts
                </button>
                </Link>
              </div>
            </div>
          )
        ) : activeTab === "Saved" ? (
          saved.length > 0 ? (
            saved.map((plan) => (
            <SavedDataCard key={plan.id} plan={plan}></SavedDataCard>))
          ) : (
            <div className="border border-dashed border-[#A1A1AA] rounded-xl text-center px-4 py-24 ">
              <div>
                <h1 className="pb-2 font-bold text-2xl">NOTHING HERE YET</h1>
                <p className="pb-6 text-md text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href={'/'}>
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
