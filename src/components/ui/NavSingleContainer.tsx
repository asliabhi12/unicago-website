"use client";
import React from "react";


const UniLogo = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="fixed bottom-10 right-2 max-w-xl mx-auto z-50">
        <nav
      className="relative rounded-full border-2 border-white dark:bg-[#D9D9D9] dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-8 px-8 py-4 "
    >
      {children}
    </nav>
    </div>
  )
}

export default UniLogo