import React from "react";
import { Card } from "./Card";
import { cn } from "../../utils/utils";

export const AnimatedCard = ({ head, desc, bgImg, img, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square cursor-pointer rounded-xl border border-gray-400/50 overflow-hidden shadow-lg">
        
        {/* Text Section */}
        <div className="z-10 absolute top-6 left-6 transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white drop-shadow">
            {head}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-gray-200">
            {desc}
          </p>
        </div>

        {/* Background Image */}
        <img
          src={bgImg}
          alt={`${head} background`}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700 ease-in-out
            group-hover:scale-110 group-hover:blur-sm
          "
        />

        {/* Overlay Card */}
        <Card
          className="
            absolute p-1 border hover:border-violet-600 bg-transparent border-gray-300/50
            opacity-0 group-hover:opacity-100
            transform translate-y-1/4
            transition-all duration-700 ease-in-out
            group-hover:translate-y-1/6
            z-10 inset-x-8 top-14
          "
        >
          <img
            src={img}
            alt={`${head} detail`}
            className="w-full h-full object-cover rounded-sm transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </Card>
      </div>
    </div>
  );
};
