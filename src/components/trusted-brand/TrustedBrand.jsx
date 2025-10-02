import React from "react";

  const companiesLogo = [
    { name: "Framer", logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg" },
    { name: "Huawei", logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg" },
    { name: "Instagram", logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg" },
    { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg" },
    { name: "Walmart", logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg" }
  ];

export const TrustedBrand = () => {
  return (
    <>
     <div className="p-6 sm:p-10 lg:p-16 bg-[#23084567] space-y-12">


      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#23084567] to-transparent" />

        {/* Marquee */}
        <div className="flex marquee-inner will-change-transform min-w-[200%]">
          {[...companiesLogo, ...companiesLogo].map((company, index) => (
            <img
              key={index}
              className="mx-11 h-10 object-contain"
              src={company.logo}
              alt={company.name}
              draggable={false}
            />
          ))}
        </div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#23084567] to-transparent" />
      </div>

           </div>
    </>
  );
};
