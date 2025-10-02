import React from "react";
import Button from "../ui/button/Button";
import { IconArrowRight } from "../../assets/icons/InterfaceIcons";
import { CardContainer } from "../ui/CardContainer";
import { Card } from "../ui/Card";
import { FaPaperPlane } from "react-icons/fa6";
import { LiaSearchengin } from "react-icons/lia";
import { List } from "../ui/List";
import { motion } from "framer-motion";

const CARD_DATA = [
  {
    id: "1",
    icon: <FaPaperPlane className="text-2xl" />,
    title: "Creative Solution",
    project: "399",
    desc: "Project Completed",
  },
  {
    id: "2",
    icon: <LiaSearchengin className="text-3xl" />,
    title: "Marketing Strategy",
    project: "275",
    desc: "Brand Launched",
  },
];

export const About = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-10 lg:px-20 bg-[#0b0015]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Section Label */}
          <Button
            variant="secondary"
            className="mb-6 px-8 py-2 rounded-full 
                       bg-gradient-to-r from-[#120020] to-[#3a0b55] 
                       text-white font-medium shadow-md"
          >
            About Us
          </Button>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-snug mb-6">
            Innovating with Strategy in Mind
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
            Innovating with strategy in mind, we combine creative vision with
            thoughtful planning to deliver solutions that resonate and drive
            results. Every idea we craft is rooted in purpose, ensuring our work
            not only stands out but also aligns with your goals.
          </p>

          {/* Learn More Button */}
          <Button
            variant="secondary"
            className="flex items-center gap-2 px-8 py-4 text-white text-lg 
                       border border-gray-500 rounded-full 
                       hover:bg-gradient-to-r hover:from-[#3a0b55] hover:to-[#120020] 
                       hover:scale-105 transition-all duration-500"
          >
            Learn More
            <IconArrowRight size="20" />
          </Button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Image */}
          <CardContainer className=" bg-transparent">
            <motion.img
              src="/images/web_Gif.gif"
              alt="About"
              className="rounded-xl border  border-violet-600 w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </CardContainer>

          {/* Cards */}
          <List
            data={CARD_DATA}
            uniqueKey="id"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            render={(item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CardContainer
                  className="p-6 rounded-xl border border-gray-300 shadow-lg 
                             bg-gradient-to-b from-[#1a002d] to-[#120020] text-white"
                >
                  {/* Icon Circle */}
                  <div
                    className="w-12 h-12 flex items-center justify-center 
                               rounded-full border border-violet-500 bg-white/10 mb-4"
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>

                  {/* Project Card */}
                  <Card
                    className="bg-[#090014] border-4 border-violet-950/40 shadow-md 
                               hover:scale-105 transition-all duration-300 p-4 text-start"
                  >
                    <h3 className="text-3xl font-bold">{item.project}</h3>
                    <p className="text-sm font-semibold text-white">
                      {item.desc}
                    </p>
                  </Card>
                </CardContainer>
              </motion.div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};
