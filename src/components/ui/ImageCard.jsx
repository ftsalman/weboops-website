// import React from "react";
// import { CardContainer } from "./CardContainer";

// export const ImageCard = ({ title, subtitle, image }) => {
//   return (
//     <CardContainer className="group relative overflow-hidden rounded-3xl shadow-xl max-w-md cursor-pointer">
//       {/* Default background image */}
//       <div
//         className="h-64 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//         style={{
//           backgroundImage:
//             'url("https://i.pinimg.com/1200x/ee/25/5c/ee255cacfa6f21ca1049b81bbe8a2cef.jpg")',
//         }}
//       >
//         {/* Default text */}
//         <div className="absolute top-6 left-6 text-white">
//           <h2 className="text-2xl font-bold">Stream</h2>
//           <p className="text-lg">UI/UX Design</p>
//         </div>
//       </div>

//       {/* Hover state (slides from top + centered text) */}
//       <div className="absolute inset-0 opacity-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//         {/* Hover background image */}
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Centered hover text */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <p className="text-lg">{subtitle}</p>
//         </div>

//         {/* Glowing border */}
//         <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500 transition-all duration-500" />
//       </div>
//     </CardContainer>
//   );
// };

import React from "react";
import { CardContainer } from "./CardContainer";
import { Card } from "./Card";

export const ImageCard = ({image,title,subtitle}) => {
  return (
    <>
<div className="relative group w-[30rem] h-[22rem] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 p-6">
  {/* Title + subtitle */}
  <div className="z-10 relative">
    <h2 className="text-3xl font-bold text-white">{title}</h2>
    <p className="text-lg text-white/80">{subtitle}</p>
  </div>

  {/* Center image wrapper */}
  <div className="absolute inset-0 flex justify-center items-center">
    {/* Background image blurred on hover */}
    <div
      className="absolute inset-0 bg-center bg-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105 rounded-2xl"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/72/60/95/7260950c90c74e81d0206b3476a0a6c7.jpg')`,
      }}
    />

    {/* Dark overlay on hover */}
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

    {/* Foreground preview stays sharp */}
    <img
      src={image}
      alt={title}
      className="relative z-10 w-[85%] h-auto top-9 rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105"
    />
  </div>


 
</div>

    </>
  );
};
