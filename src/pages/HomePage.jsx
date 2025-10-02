import React from "react";
import { Hero } from "../components/hero-section/Hero";
import { About } from "../components/about-section/About";
import { Service } from "../components/sevice-section/Service";
import Portfolio from "../components/portfolio-section/Portfolio";
import { TrustedBrand } from "../components/trusted-brand/TrustedBrand";
import { Frequently } from "../components/frequently-section/Frequently";
import { Contact } from "../components/contact-section/Contact";
import { Footer } from "../components/footer/Footer";

export const HomePage = () => {
  return (

    <>
   <div className="h-full">
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="trusted"><TrustedBrand /></div>
      <div id="faq"><Frequently /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
    </>
  );
};
