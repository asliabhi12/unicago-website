"use client";
import React from "react";
import Link from 'next/link'


const UniLogo = ({ children, redirect }: { children: React.ReactNode; [key: string]: any }) => {
  return (
    <div className=" md:block fixed hidden bottom-10 right-2 max-w-xl mx-auto z-50">
        <nav
      className="relative rounded-full border-2 border-white dark:bg-[#D9D9D9] dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-8 px-8 py-4 "
    >
      <Link href={redirect}>
        {children}
        </Link>
      
    </nav> 
    </div>
  )
}

export default UniLogo