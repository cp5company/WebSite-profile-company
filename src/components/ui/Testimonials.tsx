import React from "react";
import { Testimonial } from "../type/typdata";
import Image from "next/image";
const Testimonialconferm: React.FC<{ testcontent: Testimonial }> = ({
  testcontent,
}) => {
  return (
    <div className=" mx-auto p-5  sm:px-6 lg:px-8">
    <div className="testimonial-sec p1-6">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="sm:w-2/3 sm:pl-6 sm:text-left">
          <div className="testimonial-info text-start">
            <h4 className="text-3xl font-semibold text-gray-800 text-primary leading-tight">
              {testcontent.title}
            </h4>
            <p className="font-medium text-gray-900 text-lg text-primary leading-normal mt-7">
              {testcontent.subtitle}
            </p>
            <p className="text-gray-500 dark:text-gray-200 text-sm md:text-base leading-relaxed mt-4">
              {testcontent.body}
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-4 sm:mb-0 sm:w-1/3">
          <div className="testimonial-fig">
            <span></span>
            <Image
  className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-lg"
  src="/ribal.png" // Ensure the image is located in the public folder
  alt={testcontent.title}
  width={128} // Set the width (in pixels)
  height={128} // Set the height (in pixels)
/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonialconferm;
