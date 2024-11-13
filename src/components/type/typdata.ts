import React, { ReactNode } from 'react';

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
  changelag: string; // Fixed typo from String to string
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
interface ItemAbout {
  src: string;
  title: string;
  content: string;
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
  aboutfirst: {
    title: string;
    body: string;
  };
  items: ItemAbout[];
  titleserver: {
    title: string;
    body: string;
  };
  ourserver: OurServerData[];
  titleourworks: {
    title: string;
    body: string;
  };
  ourworklist: Project[];
  testimonial: Testimonial;
  teammember: TeamMember[];
  connectus: Connect;
  ourteamcontent: {
    title: string;
    body: string;
  };
}

export type {
  NavData,
  Field,
  FormProps,
  FormValues,
  ItemAbout,
  OurServerData,
  Project,
  Testimonial,
  TeamMember,
  Connect,
  AllBodyData
};