import Image from "next/image";
import React from "react";
import LIbraryCard from "../component/LIbraryCard";

    const getLibrary = async() =>{
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await res.json()
        return data;
    }


const LibraryPage = async() => {
    const library = await getLibrary()
    // console.log(library)
  return (
    <div className="container mx-auto text-center md:text-start">
      <div className="mb-8">
        <h1 className="font-bold  text-2xl">THE LIBRARY</h1>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {
            library.map(work=><LIbraryCard key={work.id} work={work} ></LIbraryCard>)
        }
      </div>
    </div>
      
   
  );
};

export default LibraryPage;
