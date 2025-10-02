import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import { Card } from "../ui/Card";
import { IconPhone } from "../../assets/icons/InterfaceIcons";
import { FaMeta, FaTwitter } from "react-icons/fa6";
import { CiBasketball } from "react-icons/ci";
import { InputGroup } from "../ui/InputGroup";
import { List } from "../ui/List";
import { SiMinutemailer } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa";



// Contact details
const CONTACT_DETAILS = [
  {
    id: "1",
    icon: <FaHeadphones size="34" className=" text-white" />,
    title: "Phone Number",
    desc: "+974534221",
  },
  {
    id: "2",
    icon: <SiMinutemailer size="34" className=" text-white" />,
    title: "Email Address",
    desc: "mail@yoursite.com",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 p-4 sm:p-10 lg:p-16">
      {/* Left Side */}
      <motion.div
        className="flex-1 p-4"
        initial="hidden"
        whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        <div>
          <Button
            variant="secondary"
            className="bg-gradient-to-r from-[#120020] to-[#3a0b55] text-lg px-10 text-white font-semibold rounded-3xl py-3"
          >
            Contact Us
          </Button>
          <motion.div
            className="mt-4"
            variants={fadeUp}
            custom={1}
          >
            <h2 className="text-2xl font-bold text-white">Get In Touch!</h2>
            <p className="text-gray-400 mt-2">
              In need of help? Together, let's approach it and make sure we
              succeed at every turn. How could I be of assistance?
            </p>
          </motion.div>
        </div>

        {/* Contact detail cards */}
        <List
          uniqueKey="id"
          data={CONTACT_DETAILS}
          className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-6"
          render={(item, index) => (
            <motion.div
              key={item.id}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
               viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 border border-[#3a0b55] w-full h-fit bg-violet-900/20 rounded-2xl"
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

              {/* Card */}
              <Card className="bg-[#090014] border border-[#3a0b55] p-8 pt-14 text-start h-full rounded-xl">
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          )}
        />

        {/* Divider */}
        <div className="border mt-10 border-gray-500/20 w-full md:block hidden"></div>

        {/* Social Media */}
        <motion.div
          className="flex mt-4 items-center justify-between"
          variants={fadeUp}
          custom={4}
        >
          <p className="font-medium text-white">Social Media :</p>
          <div className="flex gap-4 text-xl">
            {[FaMeta, FaTwitter, CiBasketball].map((Icon, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 w-10 h-10 bg-violet-400/20 hover:bg-violet-500 cursor-pointer transition-all duration-500 border-violet-500 border flex items-center justify-center rounded-full"
              >
                <Icon className="text-lg text-center text-white" />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side (Form) */}
      <motion.div
        className="flex-1 p-6 shadow-md border border-violet-600/20 rounded-lg"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
      >
        <div className="w-full bg-gray-900/40 p-4 rounded-md shadow-sm h-auto min-h-[30rem] md:min-w-[356px]">
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup
                label="First Name"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <InputGroup
                label="Last Name"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup
                label="Email Address"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <InputGroup
                label="Phone Number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-violet-400/20 border rounded-2xl shadow-md border-violet-500 p-3 text-white placeholder-gray-300"
              />
            </div>

            {/* Submit button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3a0b55] to-[#120020] text-white font-semibold py-3 rounded-2xl"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
