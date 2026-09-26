import Image from 'next/image';
import React from 'react';
import musle from '@/app/asset/banner.png'

const Bannar = () => {
    return (
    <div className='container mx-auto mb-15'> 
        <div className='flex justify-between p-14 bg-[#15171D] rounded-2xl border border-[#222630]'>
            <div>
                <h3 className='text-[#C2F800] mb-5'>WORKOUT LIBRARY</h3>
                <h1 className='text-6xl mb-5 font-extrabold  font-oswald'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
                <p className='text-[#9CA3AF] mb-5'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                <button className="btn bg-[#C2F800] text-black font-bold ">BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={musle} alt='banner'></Image>
            </div>
        </div>
    </div>       
    );
};

export default Bannar;