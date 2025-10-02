import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.footer
      className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] border-t border-violet-500/50 text-gray-500 bg-[#090014]"
      initial="hidden"
      whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]"
        variants={footerVariants}
        custom={0}
      >
        {/* Logo */}
        <a href="https://weboops.com" className="text-white font-bold text-lg">
          Weboops
        </a>

        {/* Product Links */}
        <motion.div variants={footerVariants} custom={1}>
          <p className="text-slate-100 font-semibold">Product</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Affiliate
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Resources Links */}
        <motion.div variants={footerVariants} custom={2}>
          <p className="text-slate-100 font-semibold">Resources</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Company
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Community
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Careers
                <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                  We’re hiring!
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                About
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Legal Links */}
        <motion.div variants={footerVariants} custom={3}>
          <p className="text-slate-100 font-semibold">Legal</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-indigo-600 transition">
                Terms
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end mt-10"
        variants={footerVariants}
        custom={4}
      >
        <p className="max-w-60">
          Making every customer feel valued—no matter the size of your audience.
        </p>
        <p className="mt-2 text-white text-sm">
          © 2025 <a href="https://weboops.com">Weboops</a>
        </p>
      </motion.div>
    </motion.footer>
  );
};
