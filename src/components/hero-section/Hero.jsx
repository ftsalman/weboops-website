import React, { useState, useEffect } from "react";
import Button from "../ui/button/Button";
import { IconCookie } from "../../assets/icons/InterfaceIcons";
import { motion } from "framer-motion";
import Orb from "../orb/Orb";

export const Hero = () => {
  const fullText = " Website";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const speed = 300;

  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) setIsDeleting(true);
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, index, isDeleting]);

  // ✅ Load Spline script once
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.72/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[600px] md:h-[700px] lg:h-screen relative overflow-hidden">
      {/* Background Spline scene (✅ removed logo) */}
      {/* <spline-viewer
        url="https://prod.spline.design/lzxpze0igg0gCqG3/scene.splinecode"
        logo="false"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        Fallback image
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAt..."
          alt="Spline preview"
          style={{ width: "100%", height: "100%" }}
        />
      </spline-viewer> */}
      <Orb>

      {/* Overlay content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center h-full space-y-6 px-4 text-center z-10 relative"
      >
        {/* Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button
            variant="secondary"
            size="md"
            className="flex items-center whitespace-nowrap justify-center gap-2 text-white border border-gray-500 bg-gray-50/10 rounded-2xl px-6 py-2"
          >
            <IconCookie />
            Creative Agency
          </Button>
        </motion.div>

        {/* Typing Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-2 max-w-2xl"
        >
          <h1 className="text-3xl md:text-6xl tracking-wide leading-tight font-bold mb-4 text-white">
            Empowering Business Through
            {displayText}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            We transform ideas into impactful designs and strategies.
            Specializing in branding, web design, and digital marketing.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex  sm:flex-row items-center gap-3"
        >
          <Button
            variant="secondary"
            size="md"
            className="px-8 py-2 whitespace-nowrap rounded-full w-full sm:w-auto text-black bg-white backdrop-blur-md border border-gray-500"
          >
            Get Started
          </Button>
          <Button
            variant="secondary"
            size="md"
            className="px-8 py-2 whitespace-nowrap rounded-full text-white bg-gray-50/10 backdrop-blur-md border border-gray-500"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
      </Orb>
    </div>
  );
};
