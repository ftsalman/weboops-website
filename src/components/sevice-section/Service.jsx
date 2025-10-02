import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import { Card } from "../ui/Card";
import {
  IconAddShopping,
  IconCode,
  IconFormate,
} from "../../assets/icons/InterfaceIcons";
import { List } from "../ui/List";

// Service Data
const SERVICE_DATA = [
  {
    id: "1",
    icon: <IconFormate size="40" />,
    head: "UI/UX Solution",
    desc: "Tailored ideas that solve challenges and bring your vision to life.",
  },
  {
    id: "2",
    icon: <IconCode size="40" />,
    head: "Web Development",
    desc: "Websites tailored to your brand, blending functionality with aesthetics.",
  },
  {
    id: "3",
    icon: <IconAddShopping size="40" />,
    head: "Product Design",
    desc: "Product designs that are innovative and practical to meet user needs.",
  },
];

// Motion Variants for cards
const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export const Service = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-16 space-y-12">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <Button
          variant="secondary"
          className="bg-gradient-to-r from-[#120020] to-[#3a0b55] text-lg px-10 text-white font-semibold rounded-3xl py-3"
        >
          Service
        </Button>

        <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight max-w-3xl">
          Unleash the Possibilities of <br /> Creative Innovation
        </h4>
      </motion.div>

      {/* Cards Section */}
      <List
        uniqueKey="id"
        data={SERVICE_DATA}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        render={(item) => (
          <motion.div
            key={item.id}
            className="relative p-6 border border-[#3a0b55] w-full h-fit bg-violet-900/20 rounded-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            {/* Icon Circle */}
            <div className="absolute -top-10">
              <Button
                variant="secondary"
                size="lg"
                className="w-20 h-20 rounded-full bg-[#090014] border-2 border-violet-500 flex items-center justify-center"
              >
                {item.icon}
              </Button>
            </div>

            {/* Card Content */}
            <Card className="bg-[#090014] border border-[#3a0b55] p-8 pt-14 text-start h-full rounded-xl">
              <h2 className="text-2xl font-semibold mb-3 text-white">
                {item.head}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {item.desc}
              </p>
            </Card>
          </motion.div>
        )}
      />

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="border mt-40 border-gray-500/20 w-full md:block hidden origin-left"
      />
    </div>
  );
};
