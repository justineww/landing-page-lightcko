import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

import HomeSection from "./HomeSection";
import AboutUsSection from "./AboutUsSection";
import ProjectSection from "./ProjectSection";
import ClientSection from "./ClientSection";
import ServiceSection from "./ServiceSection";

// --- STYLE ANIMASI CUSTOM ---
// Dipakai lintas section (Home pakai cloudFloat & subtleRocking,
// Client pakai scrollLeft/scrollRight), jadi tetap ditaruh 1 tempat di master.
const customStyles = `
  /* --- Animasi Awan Hero --- */
  @keyframes cloudFloat {
    0%, 100% { 
      transform: translateY(0) rotate(var(--tw-rotate)); 
      opacity: 1; 
    }
    40%, 50% { 
      transform: translateY(-25px) rotate(var(--tw-rotate)); 
      opacity: 0; 
    }
  }
  
  .animate-cloud {
    animation-name: cloudFloat;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  /* --- Animasi Scroll Marquee --- */
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .animate-scroll-left {
    animation: scrollLeft 60s linear infinite;
  }
  
  .animate-scroll-right {
    animation: scrollRight 60s linear infinite;
  }
  
  /* Animasi Rotasi Halus (Rocking) */
  @keyframes subtleRocking {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
  }

  .animate-rocking {
    animation: subtleRocking 6s ease-in-out infinite;
    transform-origin: center center;
  }
`;

// --- COMPONENT: SKELETON LOADER UI ---
// Hanya dipakai di sini (initial loading), jadi tetap di master file.
const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-white p-6 pt-24 space-y-12 animate-pulse overflow-hidden">
      <div className="w-full h-[50vh] bg-gray-200 rounded-3xl mb-8 flex flex-col items-center justify-center p-10 relative">
        <div className="absolute bottom-10 left-10 w-48 h-12 bg-gray-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-56 h-12 bg-gray-300 rounded-full opacity-50"></div>
        <div className="h-16 w-3/4 bg-gray-300 rounded-xl mb-6"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded-lg mb-2"></div>
        <div className="h-6 w-1/3 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="h-20 w-32 bg-gray-200 rounded-lg"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 mt-12">
        <div className="w-full xl:w-1/4 h-[500px] bg-gray-200 rounded-[3rem]"></div>
        <div className="w-full xl:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function LandingPages() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // --- SIMULASI LOADING ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // --- LOGIKA SCROLL (menentukan section aktif untuk Header) ---
  // Tetap di master karena butuh mengecek id dari semua section sekaligus.
  useEffect(() => {
    if (isLoading) return;
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      if (isBottom) {
        setActiveSection("services");
        return;
      }

      const scrollPosition = window.scrollY + 300;
      const sections = [
        { id: "home", headerId: "home" },
        { id: "features-section", headerId: "home" },
        { id: "projects", headerId: "projects" },
        { id: "clients", headerId: "clients" },
        { id: "services", headerId: "services" },
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.headerId);
          }
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      <style>{customStyles}</style>

      <Header activeSection={activeSection} />

      <HomeSection />
      <AboutUsSection />
      <ProjectSection />
      <ClientSection />
      <ServiceSection />
    </div>
  );
}
