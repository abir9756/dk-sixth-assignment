'use client'

import { FitContext } from '@/context/FitContext';
import React, { useContext, useState } from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { toast } from 'react-toastify';

const MyPlanButton = ({data}) => {
      const {todaysPlan,setTodaysPlan} = useContext(FitContext)
    const [Added , setAdded] = useState(false)
    

      const handlePlanButton = () =>{
        //   if(Added){
        //     toast.error("Already Added")
        //     return
        // }
     setTodaysPlan([...todaysPlan,data])
        setAdded(!Added)
        toast.success("Added to today's plan")

      
      }
    return (
        <div>
             <button
             onClick={()=>handlePlanButton()}
             disabled={Added}
              className="btn bg-[#CCFF00] text-black rounded-xl"><BiSolidAddToQueue /> Add to today's plan</button>
        </div>
    );
};

export default MyPlanButton;