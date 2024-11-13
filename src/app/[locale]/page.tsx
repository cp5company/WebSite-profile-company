import { useTranslations } from "next-intl";
import AllContent from "./allcontent";
import { Code2, Database, Settings2, Smartphone } from "lucide-react";
import { AllBodyData, Connect, ItemAbout, OurServerData, Project, TeamMember, Testimonial } from "@/components/type/typdata";
const Home: React.FC = () => {
  const t = useTranslations("Index");
  const head = useTranslations("header");
  const about = useTranslations("itemsabout");
  const ourserver = useTranslations("ourserver");
  const ourworks = useTranslations("ourwork");
  const Testimonialtranstion = useTranslations("Testimonial");
  const teamslisttransition = useTranslations("ourteam");
  const conncettranstion = useTranslations("connect");
  const itemsabout: ItemAbout[] = [
    {
      src: "/wtb-icon1.svg",
      title: about("quality.title"), // استخدم t بدلاً من useTranslations
      content: about("quality.content"),
    },
    {
      src: "/wtb-icon2.svg",
      title: about("integrity.title"), // استخدم t بدلاً من useTranslations
      content: about("integrity.content"),
    },

    {
      src: "/wtb-icon4.svg",
      title: about("teamwork.title"), // استخدم t بدلاً من useTranslations
      content: about("teamwork.content"),
    },
    {
      src: "/wtb-icon4.svg",
      title: about("teamwork.title"), // استخدم t بدلاً من useTranslations
      content: about("teamwork.content"),
    },
    
  ];
  const ourserverlist: OurServerData[] = [
    {
      icon: <Settings2 className="w-full h-full" />, // Use JSX here
      title: ourserver("SystemsDevelopment.title"),
      description: ourserver("SystemsDevelopment.content"),
    },
    {
      icon: <Code2 className="w-full h-full" />,
      title: ourserver("WM.title"),
      description: ourserver("WM.content"),
    },
    {
      icon: <Database className="w-full h-full" />,
      title: ourserver("DataIntegration.title"),
      description: ourserver("DataIntegration.content"),
    },
    {
      icon: <Smartphone className="w-full h-full" />, // Use JSX here
      title: ourserver("smartapphome.title"),
      description: ourserver("smartapphome.content"),
    },
    
  ];
  //============================================ourworklist

  const ourworklist: Project[] = [
    {
      id: 1,
      number: "01",
      title: ourworks("Zajil.title"),
      description: ourworks("Zajil.content"),
      link: "zajil-express",
      image: "ourWork-juffalitrucks.webp",
      tags: ["Web", "UI/UX", "SEO", "Testing", "Consultancy"],
    },
    {
      id: 2,
      number: "02",
      title: ourworks("Saudi.title"),
      description: ourworks("Saudi.content"),
      link: "saudi-banks",
      image: "ourWork-saudibanks.webp",
      tags: ["Web", "UI/UX", "SEO", "Testing", "Consultancy"],
    },
    {
      id: 3,
      number: "03",
      title: ourworks("Meena.title"),
      description: ourworks("Meena.content"),
      link: "meena-health",
      image: "ourWork-meena-health.webp",
      tags: ["Web", "UI/UX", "SEO", "Testing", "Consultancy"],
    },
    {
      id: 4,
      number: "04",
      title: ourworks("Bunyan.title"),
      description: ourworks("Bunyan.content"),
      link: "bunyan",
      image: "bunyan.jpg",
      tags: ["Web", "UI/UX", "SEO", "Testing", "Consultancy"],
    },
    {
      id: 5,
      number: "05",
      title: ourworks("KAUST.title"),
      description: ourworks("KAUST.content"),
      link: "kaust-sust",
      image: "kaust_sust.jpg",
      tags: ["Web", "UI/UX", "SEO", "Testing", "Consultancy"],
    },

    // Add other projects as needed
  ];
  const teamlist: TeamMember[] = [
    {
      image: "/abdulfattah.jpeg",
      name: teamslisttransition("1.name"),
      title: teamslisttransition("1.title"),
      description: teamslisttransition("1.description"),
      linkend:
        "https://www.linkedin.com/in/abdulfattah-qasem-437725240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      image: "/ribal.png",
      name: teamslisttransition("2.name"),
      title: teamslisttransition("2.title"),
      description: teamslisttransition("2.description"),
      linkend:
        "https://www.linkedin.com/in/abdullah-omar-43a7b821a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      image: "/ribal.png",
      name: teamslisttransition("3.name"),
      title: teamslisttransition("3.title"),
      description: teamslisttransition("3.description"),
      linkend:
        "https://www.linkedin.com/in/sakhr-wahib-ali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      image: "/ribal.png",
      name: teamslisttransition("4.name"),
      title: teamslisttransition("4.title"),
      description: teamslisttransition("4.description"),
      linkend: "#",
    },
    
  ];

  //===========================================endlist
  // Create header data using the translations
  const headerData= {
    title: head("title"),
    body: head("body"),
  };
  const aboutfirst = {
    title: about("firstcontent.title"),
    body: about("firstcontent.content"),
  };
  const titleserver = {
    title: ourserver("firstcontent.title"),
    body: ourserver("firstcontent.content"),
  };
  const ourteamcontern = {
    title: teamslisttransition("conttitle.title"),
    body: teamslisttransition("conttitle.body"),
  };
  const titleourwork = {
    title: ourworks("firstcontent.title"),
    body: ourworks("firstcontent.content"),
  };
  const testimonial: Testimonial = {
    title: Testimonialtranstion("title"),
    subtitle: Testimonialtranstion("subtitle"),
    body: Testimonialtranstion("body"),
  };
  const connectInfo: Connect = {
    title: conncettranstion("title"),
    name: conncettranstion("name"),
    email: conncettranstion("email"),
    description: conncettranstion("description"),
  };
  // Create body data using the header data and items
  const bodyAllData: AllBodyData = {
    aboutfirst: aboutfirst,
    items: itemsabout, // Include items in the body data
    titleserver: titleserver,
    ourserver: ourserverlist,
    titleourworks: titleourwork,
    ourworklist: ourworklist,
    testimonial: testimonial,
    teammember: teamlist,
    connectus: connectInfo,
    ourteamcontent:ourteamcontern
  };

  return (
    <main className="min-h-screen w-screen bg-background flex justify-center text-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full">
        <AllContent headerdata={bodyAllData} />
      </div>
    </div>
  </main>
  
  );
};

export default Home;
