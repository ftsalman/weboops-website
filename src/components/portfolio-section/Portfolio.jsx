import React from "react";
import Button from "../ui/button/Button";
import { AnimatedCard } from "../ui/AnimatedCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-16 space-y-12 overflow-hidden ">
      {/* Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 sm:gap-10 text-center"
        >
          <Button
            variant="secondary"
            className="bg-gradient-to-r from-[#120020] to-[#3a0b55] text-lg px-10 text-white font-semibold rounded-3xl py-3"
          >
            Portfolio
          </Button>

          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-white">
              Showcase of Our Design
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Discover a curated collection of our finest work that defines our
              approach. Each project tells a story of thoughtful design and
              impactful solutions, crafted to inspire and resonate.
            </p>
          </div>
        </motion.div>

        {/* Responsive Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 place-items-center w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-10 lg:gap-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AnimatedCard
                head="Atom"
                desc="Web Development"
                bgImg="https://i.pinimg.com/1200x/91/63/1d/91631df71373830ccf68ef022c24edc2.jpg"
                img="https://i.pinimg.com/1200x/d7/89/39/d7893923eb163f08af690a11a3cd7454.jpg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <AnimatedCard
                head="Atom"
                desc="Web Development"
                bgImg="https://i.pinimg.com/1200x/70/3c/43/703c4340446d7a139a42fa4d25925b26.jpg"
                img="https://i.pinimg.com/1200x/29/0b/34/290b343af190f93cb3efaae4f12be83e.jpg"
              />
            </motion.div>
          </div>

          {/* Right Column with stagger effect */}
          <div className="flex flex-col gap-10 lg:gap-20 lg:mt-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
               viewport={{ once: false, amount: 0.2 }}
            >
              <AnimatedCard
                head="Atom"
                desc="Web Development"
                bgImg="https://i.pinimg.com/1200x/57/fe/54/57fe54d3c411721e093b40fe035ba020.jpg"
                img="https://i.pinimg.com/1200x/56/17/9c/56179c3b0a03cf8d5feb7ec2486b051f.jpg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <AnimatedCard
                head="Atom"
                desc="Web Development"
                bgImg="https://i.pinimg.com/736x/80/a4/d2/80a4d2eb93a0a56299b55a7ca992e88a.jpg"
                img="/images/GIF.gif"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
