"use client";
import React from "react";
import "./VideoBackground.css";

const UniHome = () => {
  return (
    <div className="hero relative min-h-[100vh] min-w-[100vw] overflow-hidden">
      <div>
        <video autoPlay muted playsInline className="video-bg">
          <source src="./Uni-home-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute left-10">
        <h1 className="text-white z-1 text-3xl md:text-6xl  mx-auto py-10 md:py-10">
          Unicago Sense(1)
        </h1>
        <div className="max-w-[40vw]">
          <span className="text-xl md:text-2xl">
            Smartphones haven't changed for a long time, let's change it once
            and for all.
          </span>
        </div>
      </div>
      {/* Other content can be added on top of the video */}
    </div>
  );
};

export default UniHome;
