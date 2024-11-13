"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const LogoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const logos = [
    [
      {
        src: "client-img4.svg",
        alt: "Haala Energy",
        className: "w-32",
      },
      {
        src: "client-img7.svg",
        alt: "ACE",
        className: "w-32",
      },
      {
        src: "client-img16.svg",
        alt: "Blooming",
        className: "w-32",
      },
      {
        src: "client-img21.svg",
        alt: "York",
        className: "w-32",
      },
    ],
    [
      {
        src: "client-img4.svg",
        alt: "Haala Energy",
        className: "w-32",
      },
      {
        src: "client-img7.svg",
        alt: "ACE",
        className: "w-32",
      },
      {
        src: "client-img16.svg",
        alt: "Blooming",
        className: "w-32",
      },
      {
        src: "client-img21.svg",
        alt: "York",
        className: "w-32",
      },
    ],
  ];

  // Auto-scroll every 5 seconds
  // Improved auto-scroll with smooth direction changes
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlide === logos.length - 1) {
        setDirection(-1);
      } else if (currentSlide === 0) {
        setDirection(1);
      }

      setCurrentSlide((prev) => {
        if (direction === 1) {
          return prev === logos.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? logos.length - 1 : prev - 1;
        }
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, direction, logos.length]);

  return (
    <div className="relative w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform bg-g duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {logos.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex min-w-full justify-between items-center gap-8"
              >
                {group.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center  justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={128}
                      className={`${logo.className} object-contain filter brightness-100`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {logos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-4" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
