import React from "react";
import Image from "next/image";
import Link from "next/link"; // تأكد من استيراد Link من Next.js
import "../../app/[locale]/globals.css";
import { TeamMember } from "../type/typdata";

const TeamMembers: React.FC<TeamMember> = ({
  image,
  name,
  title,
  description,
  linkend,
}) => {
  return (
    <Link href={linkend}>
      {" "}
      {/* ضع رابط صحيح هنا */}
      <div className="bg-card bg-opacity-10 lg:w-[20rem]   h-[26rem] rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-transparent"
       style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        opacity:"3.5"
      }}>
        <div className="w-36 h-36 mb-4 rounded-full flex justify-center items-center border-2 border-red-500">
  <div className="w-32 h-32 rounded-full overflow-hidden flex justify-center items-center">
  <Image
      src={image} 
      alt={name} 
      width={128} // Set the width (in pixels)
      height={128} 
      className="w-full h-full object-cover"
    />
  </div>
</div>

        <h1 className="text-xl font-bold dark:text-white">{name}</h1>
        <h2 className="text-md font-medium dark:text-gray-300">{title}</h2>
        <p className="mt-2 text-sm dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

// استخدام Grid لتكرار العناصر

const TeamGrid: React.FC<{ teammember: TeamMember[] }> = ({ teammember }) => {
  return (
    <div className=" mx-auto p-5  sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 ">
      {teammember.map((member, index) => (
        <TeamMembers
          key={index}
          image={member.image}
          name={member.name}
          title={member.title}
          description={member.description}
          linkend={member.linkend}
        />
      ))}
    </div>
    </div>
  );
};

export default TeamGrid;
