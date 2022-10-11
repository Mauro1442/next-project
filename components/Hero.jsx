import React from "react";
import Link from "next/link";


export default function Hero({heading, message}) {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/*overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="p-5 z-[2] ml-[-30%] mt-[-10rem] ">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl w-60">{message}</p>
        <button


         className="px-8 py-2 border border-black">        <Link href="/contact">Contact</Link></button>
      </div>
    </div>
  );
}
