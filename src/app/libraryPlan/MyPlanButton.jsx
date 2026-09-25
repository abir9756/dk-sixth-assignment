'use client'

import { FitContext } from '@/context/FitContext';
import React, { useContext } from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';

const MyPlanButton = ({data}) => {
      const {todaysPlan,setTodaysPlan} = useContext(FitContext)
   

      const handlePlanButton = () =>{
     console.log('trigerd')
     console.log(data)
     setTodaysPlan([...todaysPlan,data])
      
      }
    return (
        <div>
             <button
             onClick={()=>handlePlanButton()}
              className="btn bg-[#CCFF00] text-black rounded-xl"><BiSolidAddToQueue /> Add to today's plan</button>
        </div>
    );
};

export default MyPlanButton;