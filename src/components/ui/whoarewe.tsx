import React from "react";
import { ContentDataTitle } from "../type/typdata";
// تعريف مكون WhoAreWe
const WhoAreWe: React.FC<{ aboutfirst: ContentDataTitle }> = ({
  aboutfirst,
}) => {
  return (
    <div className="max-w-4xl p-4 mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-8">
        {aboutfirst.title}
      </h2>

      <p className="text-lg font-serif text-muted-foreground text-primary leading-relaxed">
        {aboutfirst.body}
      </p>
    </div>
  );
};

export default WhoAreWe;
