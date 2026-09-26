'use client'

import { FitContext } from '@/context/FitContext';
import React, { useContext } from 'react';
import { MdBookmarkBorder } from 'react-icons/md';
import { toast } from 'react-toastify';

const SavedButton = ({data}) => {
     const {saved,setSaved }= useContext(FitContext)

     const handleSavedButton = () =>{
        console.log('s trigerd')
        setSaved([...saved,data])
        toast.success("Saved")
        
     }
    return (
        <div>
            <button
            onClick={()=>handleSavedButton()}
            className="btn text-[#E5E7EB] rounded-xl"><MdBookmarkBorder /> Save for later</button>
        </div>
    );
};

export default SavedButton;