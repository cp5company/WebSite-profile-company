"use client";

import { useEffect } from "react";
import HeadPage from "./head/page";
import WhoAreWe from "@/components/ui/whoarewe";
import ThreeContent from "@/components/ui/thecontent";
import ServicesSection from "@/components/ui/ourserver";
import OurWork from "@/components/ui/ourworks";
import Testimonial from "@/components/ui/Testimonials";
import TeamGrid from "@/components/ui/teammember";
import Carousel from "@/components/ui/curser";
import ContactForm from "./fromemail/temform";
import Testimonialconferm from "@/components/ui/Testimonials";
import { AllBodyData } from "@/components/type/typdata";

const AllContent: React.FC<{ headerdata: AllBodyData }> = ({ headerdata }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-items");
        } else {
          entry.target.classList.remove("show-items");
        }
      });
    });

    const scrollElements = document.querySelectorAll(
      ".scroll-right, .scroll-left, .scroll-bottom"
    );
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 space-y-36">
      <section className="relative  w-screen scroll-left mt-48">
      <HeadPage  />
      </section>
      <section id="about" className="relative  w-screen scroll-left">
        <WhoAreWe  />
      </section>
      <section className="py-16 w-screen  scroll-bottom">
        <ThreeContent itemslist={headerdata.items} />
      </section>
      <section id="Ourserver" className="py-16  w-screen scroll-left">
        <ServicesSection
          ourserverlist={headerdata.ourserver}
          
        />
      </section>
      <section id="OurWork" className="py-16 w-screen  scroll-right">
        <OurWork
          
          projectlist={headerdata.ourworklist}
        />
      </section>
      <section id="Testimonials" className="py-16 w-screen scroll-bottom">
        <Testimonialconferm testcontent={headerdata.testimonial} />
      </section>
      <section id="ourteam" className="py-16 w-screen scroll-left">
        <div className="p-2 space-y-2">
          <h1 className="text-center font-bold text-5xl">ocjljldj</h1>
          <p className="text-center">dldjldjdflk</p>
        </div>
        <TeamGrid teammember={headerdata.teammember} />
      </section>
      <section id="Trusted" className="py-16 scroll-bottom">
        <Carousel />
      </section>
      <section
        id="contact"
        className="py-16 flex justify-center scroll-bottom"
      >
        <div className="w-screen scroll-bottom"> {/* Adjusted width for responsiveness */}
          <ContactForm conncetinf={headerdata.connectus} />
        </div>
      </section>
    </div>
  );
};

export default AllContent;
