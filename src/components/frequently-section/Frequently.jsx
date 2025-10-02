import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/button/Button";
import { List } from "../ui/List";
import { FaChevronRight } from "react-icons/fa6";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What services does your branding agency offer?",
    answer:
      "We provide a full range of branding services, including brand strategy, visual identity design, logo creation, brand messaging, packaging design, and digital presence development.",
  },
  {
    id: 2,
    question: "What is the typical process for creating a brand identity?",
    answer:
      "Our process involves discovery sessions, competitor analysis, visual exploration, and iterative design phases to ensure your brand identity resonates with your audience.",
  },
  {
    id: 3,
    question: "How long does it take to develop a brand identity?",
    answer:
      "Depending on the scope, it typically takes 4–8 weeks from discovery to final delivery.",
  },
  {
    id: 4,
    question: "Do you offer rebranding services for established businesses?",
    answer:
      "Yes, we specialize in rebranding projects, helping established businesses refresh or completely reinvent their brand identity.",
  },
];

// Variants for fade-in on scroll
const faqVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Frequently = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-16 w-full max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Side - Fixed width for better alignment */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full lg:w-2/5 flex flex-col items-center lg:items-start"
        >
          <Button
            variant="secondary"
            className="bg-gradient-to-r from-[#120020] to-[#3a0b55] text-base sm:text-lg lg:text-xl px-6 sm:px-10 py-3 text-white font-semibold rounded-3xl mb-6"
          >
            Frequently Asked Questions
          </Button>

          <div className="w-full max-w-xs border p-2 border-violet-500/50 rounded-xl shadow-md lg:max-w-md">
            <img 
              src="/images/web_Gif.gif" 
              alt="FAQ illustration" 
              className="w-full h-[25rem] rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right Side - Fixed width for better alignment */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug">
              Guide For Your Questions
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
              Discover a curated collection of our finest work that define our
              approach. Each project tells a story of thoughtful design and
              impactful solutions, crafted to inspire and resonate.
            </p>
          </motion.div>

          {/* Accordion List */}
          <List
            data={faqData}
            uniqueKey="id"
            className="flex flex-col space-y-4"
            render={(item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
                variants={faqVariants}
              >
                <AccordionItem item={item} defaultOpen={index === 0} />
              </motion.div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

// AccordionItem with framer-motion expand
const AccordionItem = ({ item, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-700 py-4">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-left text-base sm:text-lg font-semibold focus:outline-none hover:text-purple-300 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="pr-4">{item?.question}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronRight className="w-5 h-5 text-purple-400" />
        </motion.span>
      </button>

      {/* AnimatePresence for smooth expand/collapse */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            className="overflow-hidden mt-3 text-gray-300"
          >
            <p className="text-sm sm:text-base leading-relaxed pb-2">
              {item?.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};