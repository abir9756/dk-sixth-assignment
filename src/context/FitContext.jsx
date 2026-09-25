'use client'
import React, { createContext, useState } from 'react';

export const FitContext = createContext({})


const FitProvider = ({children}) => {
    const [todaysPlan,setTodaysPlan] = useState([])
    const [saved,setSaved] = useState([])
    const allHook={
        todaysPlan,
        setTodaysPlan,
        saved,
        setSaved
    }
    return (
        <div>
            <FitContext.Provider value={allHook}>{children}</FitContext.Provider>
        </div>
    );
};

export default FitProvider;