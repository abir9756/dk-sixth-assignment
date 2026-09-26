"use client";

import { FitContext } from "@/context/FitContext";
import React, { useContext, useState } from "react";
import { MdBookmarkBorder } from "react-icons/md";
import { toast } from "react-toastify";

const SavedButton = ({ data }) => {
  const { saved, setSaved } = useContext(FitContext);
  const [Added, setAdded] = useState(false);
  const handleSavedButton = () => {
    if (Added) {
      toast.error("Already Added");
      return;
    }

    setSaved([...saved, data]);
    setAdded(!Added);
    toast.success("Saved");
  };
  return (
    <div>
      <button
        onClick={() => handleSavedButton()}
        className="btn text-[#E5E7EB] border border-[#374151] bg-black rounded-xl"
      >
        <MdBookmarkBorder /> Save for later
      </button>
    </div>
  );
};

export default SavedButton;
