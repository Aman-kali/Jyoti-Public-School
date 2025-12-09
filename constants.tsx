import React from 'react';
import { NavItem } from './types';
import { BookOpen, Users, Lightbulb, Trophy, Palette, Mic, Music, Activity } from 'lucide-react';

export const SCHOOL_INFO = {
  name: "Jyoti Public School",
  address: "Station Road, Bikapur (Faizabad) – Ayodhya, Uttar Pradesh, India – 224204",
  phone: ["05270-267051", "+91-99199-19588"],
  email: "jpsfzd0@gmail.com",
  founded: 2012,
  founder: "Mr. Vijay Narayan Pandey",
  tagline: "Discover your future with us"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Academics', path: '/academics' },
  { label: 'Infrastructure', path: '/infrastructure' },
  { label: 'Fees', path: '/fees' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'Public Disclosure', path: '/disclosure' },
];

export const CO_CURRICULAR = [
  { name: "Dramatics", icon: <Users className="w-6 h-6" /> },
  { name: "Elocution", icon: <Mic className="w-6 h-6" /> },
  { name: "Debates", icon: <Users className="w-6 h-6" /> },
  { name: "Recitation & Quizzes", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Painting", icon: <Palette className="w-6 h-6" /> },
  { name: "Music", icon: <Music className="w-6 h-6" /> },
  { name: "Dance", icon: <Activity className="w-6 h-6" /> },
  { name: "Cricket", icon: <Activity className="w-6 h-6" /> },
];

export const IMAGES = {
  // PASTE YOUR LOGO URL HERE (e.g., "https://example.com/logo.png")
  // If left empty, the default Graduation Cap icon will be used.
  logo: "", 
  
  hero: "https://picsum.photos/id/1/1920/1080", // Student/Campus generic
  classroom: "https://picsum.photos/id/20/800/600",
  lab: "https://picsum.photos/id/180/800/600",
  library: "https://picsum.photos/id/24/800/600",
  sports: "https://picsum.photos/id/73/800/600",
  music: "https://picsum.photos/id/452/800/600",
  founder: "https://picsum.photos/id/64/400/400", // Placeholder portrait
};

// Update these URLs to point to your actual PDF files
export const DISCLOSURE_DOCUMENTS = [
  { title: "General Information", url: "/documents/general_info.pdf" },
  { title: "Documents & Information", url: "/documents/docs_info.pdf" },
  { title: "Result & Academics", url: "/documents/results.pdf" },
  { title: "Staff (Teaching)", url: "/documents/staff.pdf" },
  { title: "School Infrastructure", url: "/documents/infrastructure.pdf" },
  { title: "Fee Structure", url: "/documents/fees.pdf" },
  { title: "Annual Academic Calendar", url: "/documents/calendar.pdf" },
  { title: "School Management Committee (SMC)", url: "/documents/smc.pdf" },
  { title: "Parent Teacher Association (PTA)", url: "/documents/pta.pdf" },
  { title: "Last Three Year Result (Class X)", url: "/documents/class_x_results.pdf" },
];