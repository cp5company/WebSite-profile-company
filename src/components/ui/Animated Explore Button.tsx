// ExploreButton Component
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ExploreButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="group bg-gray-300 relative flex flex-col items-center transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-primary-foreground text-lg font-semibold mb-2">
        EXPLORE
      </span>

      <div className="relative">
        <div
          className={`
                  w-12 h-12 rounded-full border-2 border-primary-foreground flex items-center justify-center
                  transition-transform duration-300
                  ${isHovered ? "transform translate-y-2" : ""}
              `}
        >
          <ChevronDown
            className={`
                          w-6 h-6 text-primary-foreground transition-transform duration-300
                          ${isHovered ? "transform translate-y-1" : ""}
                      `}
          />
        </div>
      </div>
    </button>
  );
};

export default ExploreButton;
