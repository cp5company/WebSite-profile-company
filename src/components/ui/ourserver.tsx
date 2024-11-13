"use client";

import { ContentDataTitle, OurServerData } from "../type/typdata";

// ServiceCard Component
const ServiceCard: React.FC<OurServerData> = ({ icon, title, description }) => (
  <div className="bg-card rounded-[var(--radius)] shadow-lg hover:shadow-xl p-8 transform hover:scale-105 transition-all duration-300 bg-transparent"
  style={{
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    opacity:'3.5'
  }}
  >
    <div className="w-16 h-16 mx-auto mb-6 text-primary">
      {icon} {/* Render icon directly */}
    </div>
    
    <h3 className="text-xl font-bold text-card-foreground text-center mb-4">
      {title}
    </h3>
    
    <p className="text-muted-foreground text-center">
      {description}
    </p>
  </div>
);
// ServicesSection Component
const ServicesSection: React.FC<{ ourserverlist: OurServerData[]; obouttitle: ContentDataTitle }> = ({ ourserverlist, obouttitle }) => (
  <div className=" mx-auto p-5  sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
       {obouttitle.title}
      </h2>
      <p className="text-xl text-muted-foreground">
       {obouttitle.body}
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {ourserverlist.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

export default ServicesSection;
