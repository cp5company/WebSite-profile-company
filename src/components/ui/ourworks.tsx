import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../type/typdata';
 interface data{
  title: string;
  body: string;
};
import Image from 'next/image';
const WorkShowcase: React.FC<{ titlework: data; projectlist: Project[] }> = ({ titlework, projectlist }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = projectlist.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className=" mx-auto p-4  sm:px-6 lg:px-8">
    <div className="relative h-[46rem] text-black dark:text-white overflow-hidden">
      {/* Header */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{titlework.title}</h1>
        <p className="text-gray-400 text-gray-900 dark:text-gray-200 text-sm md:text-base">{titlework.body}</p>
      </div>

      {/* Navigation Counter */}
      <div className="absolute top-24 md:top-12  left-4 md:left-32 z-10 flex items-center space-x-2">
        <button
          onClick={prevSlide}
          className="w-8 h-8 md:w-12 md:h-12 bg-gray-400 hover:bg-black rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 hover:text-gray-300" />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 md:w-12 md:h-12 bg-gray-400 hover:bg-black rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 hover:text-gray-300" />
        </button>
        <div className="ml-2 md:ml-4 text-base md:text-lg">
          <span>{(currentSlide + 1).toString().padStart(2, '0')}</span>
          <span className="text-gray-500 mx-1">/</span>
          <span className="text-gray-500">{totalSlides.toString().padStart(2, '0')}</span>
        </div>
      </div>

      <div className="relative h-72 pt-32 md:pt-40">
        {projectlist.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 h-full">
              {/* Left Content */}
              <div className="col-span-1 md:col-span-6 p-4 md:p-12 flex items-center order-2 md:order-1">
                <div className="relative w-full max-w-xl mx-auto">
                  <div className="space-y-4 md:space-y-6 relative">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h3>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">{project.description}</p>
                    <p className="text-sm md:text-base text-gray-500">{project.link}</p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 md:px-4 py-1 bg-gray-800 text-gray-100 rounded-full text-xs md:text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="col-span-1 md:col-span-6 relative order-1 md:order-2 h-48 md:h-full">
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                  <Image
                 src={`/${project.image}`}  // Ensure this path starts with '/'
                 alt={project.title}
                 width={500} // Replace with the actual width of the image
                 height={300} // Replace with the actual height of the image
                 className="w-full h-full md:h-auto object-contain md:object-cover rounded-lg"
                 loading="lazy"
               />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WorkShowcase;
