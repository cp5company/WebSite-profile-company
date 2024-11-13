import Image from "next/image";
import { ItemAbout } from "../type/typdata";

const ThreeContent: React.FC<{ itemslist: ItemAbout[] }> = ({ itemslist }) => {
  return (
    <div className=" mx-auto px-4 p-5 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {itemslist.map((item, index) => (
        <div
          key={index}
          className="bg-card  rounded-[var(--radius)] shadow-lg hover:shadow-xl p-8 transform hover:scale-105 transition-all duration-300 bg-transparent"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            opacity:'3.5'
          }}
        >
          <div className="relative w-16 h-16 mx-auto mb-6">
            <Image
              src={item.src}
              alt={item.title}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h3 className="text-xl font-bold text-card-foreground text-center mb-4">
            {item.title}
          </h3>

          <p className="text-muted-foreground text-center">{item.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ThreeContent;
