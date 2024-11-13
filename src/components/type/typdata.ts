import { ReactNode } from 'react';

// Navigation Related
interface NavData {
  about: string;
  Ourserver: string;
  OurWork: string;
  Testimonials: string;
  tem: string;
  Trust: string;
  connect: string;
  lang: string;
  ar: string;
  en: string;
  changelag: string;
  light: string;
  dark: string;
  system: string;
}

// Form Related
interface Field {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

interface FormProps {
  fields: Field[];
  onSubmit: (formValues: Record<string, string>) => void;
}

interface FormValues {
  email: string;
  password: string;
}

// Content Related
// interface ContentDataTitle {
//   title: string;
//   body: string;
// }


interface ItemAbout {
  src: string;
  title: string;
  content: string;
}
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
interface OurServerData {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

interface Testimonial {
  title: string;
  subtitle: string;
  body: string;
}

interface TeamMember {
  image: string;
  name: string;
  title: string;
  description: string;
  linkend: string;
}

interface Connect {
  title: string;
  name: string;
  email: string;
  description: string;
}

// Main Data Structure
interface AllBodyData {
  // header: ContentDataTitle;
  // aboutfirst: ContentDataTitle;
  items: ItemAbout[];
  // titleserver: ContentDataTitle;
  ourserver: OurServerData[];
  // titleourworks: ContentDataTitle;
  ourworklist: Project[];
  testimonial: Testimonial;
  teammember: TeamMember[];
  connectus: Connect;
  // ourteamcontent: ContentDataTitle;
}

export type {
  NavData,
  Field,
  FormProps,
  FormValues,
  // ContentDataTitle,
  ItemAbout,
  OurServerData,
  Project,
  Testimonial,
  TeamMember,
  Connect,
  AllBodyData
};