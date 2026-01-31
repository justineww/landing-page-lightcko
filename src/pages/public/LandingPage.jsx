import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";

// --- IMPORT GAMBAR ASET LAIN ---
import cloudBg from "../../storage/picture/AWAN.png";
import slide1 from "../../storage/picture/slide1.jpeg";
import slide2 from "../../storage/picture/slide2.jpeg";
import slide3 from "../../storage/picture/slide3.jpeg";
import slide4 from "../../storage/picture/slide4.jpeg";
import mapIndo from "../../storage/picture/indo-map.png";

import titleImage from "../../storage/picture/title.png";
import titleImage1 from "../../storage/picture/title1.png";
import titleImage2 from "../../storage/picture/title2.png";
import titleImage3 from "../../storage/picture/title3.png";

// --- IMPORT GAMBAR LOGO ---
import aromaitalia from "../../storage/logo/aromaitalia.png";
import artico from "../../storage/logo/artico.png";
import bagong from "../../storage/logo/bagong.png";
import bey from "../../storage/logo/bey.png";
import bhumi from "../../storage/logo/bhumi.png";
import casa from "../../storage/logo/casa.png";
import garrya from "../../storage/logo/garrya.png";
import golden from "../../storage/logo/golden.png";
import hanbytte from "../../storage/logo/hanbytte.png";
import hvman from "../../storage/logo/hvman.png";
import king from "../../storage/logo/king.png";
import kolona from "../../storage/logo/kolona.png";
import kulla from "../../storage/logo/kulla.png";
import kunena from "../../storage/logo/kunena.png";
import larizo from "../../storage/logo/larizo.png";
import magal from "../../storage/logo/magal.png";
import egg from "../../storage/logo/egg.png";
import memorial from "../../storage/logo/memorial.png";
import park from "../../storage/logo/park.png";
import clemen from "../../storage/logo/clemen.png";
import prima from "../../storage/logo/prima.png";
import regality from "../../storage/logo/regality.png";
import shabujin from "../../storage/logo/shabujin.png";
import shagi from "../../storage/logo/shagi.png";
import tekiyo from "../../storage/logo/tekiyo.png";
import tj from "../../storage/logo/tj.png";
import volta from "../../storage/logo/volta.png";
import yobugo from "../../storage/logo/yobugo.png";
import igi from "../../storage/logo/igi.png";
import makanya from "../../storage/logo/makanya.png";

// --- IMPORT BUBBLE ICONS ---
import icon1 from "../../storage/icon/icon1.png";
import icon2 from "../../storage/icon/icon2.png";
import icon3 from "../../storage/icon/icon3.png";
import icon4 from "../../storage/icon/icon4.png";
import icon5 from "../../storage/icon/icon5.png";
import icon6 from "../../storage/icon/icon6.png";
import icon7 from "../../storage/icon/icon7.png";
import icon8 from "../../storage/icon/icon8.png";
import icon9 from "../../storage/icon/icon9.png";

const clientLogos = [
  // Atas 13
  { name: "Clemen", logo: clemen, customSize: "w-20 md:w-32" },
  { name: "Bagong", logo: bagong, customSize: "w-20 md:w-48 " },
  { name: "Garrya", logo: garrya, customSize: "w-20 md:w-48" },
  { name: "King", logo: king, customSize: "w-20 md:w-40" },
  { name: "Kolona", logo: kolona, customSize: "w-20 md:w-40" },
  { name: "HVMAN", logo: hvman, customSize: "w-20 md:w-40" },
  { name: "Hanbytte", logo: hanbytte, customSize: "w-20 md:w-40" },
  { name: "Larizo", logo: larizo, customSize: "w-20 md:w-32" },
  { name: "Regality", logo: regality, customSize: "w-20 md:w-36" },
  { name: "ShabuJin", logo: shabujin, customSize: "w-20 md:w-48" },
  { name: "TJ", logo: tj, customSize: "w-20 md:w-40" },
  { name: "Shagi", logo: shagi, customSize: "w-20 md:w-40" },
  { name: "Magal", logo: magal, customSize: "w-20 md:w-48" },
  { name: "IGI", logo: igi, customSize: "w-20 md:w-48" },
  { name: "MakanYa", logo: makanya, customSize: "w-20 md:w-24" },

  // Bawah 15
  { name: "Aroma Italia", logo: aromaitalia, customSize: "w-20 md:w-26" },
  { name: "Artico", logo: artico, customSize: "w-20 md:w-48" },
  { name: "Bey", logo: bey, customSize: "w-20 md:w-32" },
  { name: "Bhumi", logo: bhumi, customSize: "w-20 md:w-48" },
  { name: "Casa", logo: casa, customSize: "w-20 md:w-48" },
  { name: "Egg", logo: egg, customSize: "w-20 md:w-40" },
  { name: "Golden", logo: golden, customSize: "w-20 md:w-48" },
  { name: "Kulla", logo: kulla, customSize: "w-20 md:w-40" },
  { name: "Tekiyo", logo: tekiyo, customSize: "w-16 md:w-28" },
  { name: "Kunena", logo: kunena, customSize: "w-20 md:w-32" },
  { name: "Memorial", logo: memorial, customSize: "w-20 md:w-40" },
  { name: "Park", logo: park, customSize: "w-20 md:w-40" },
  { name: "Prima", logo: prima, customSize: "w-20 md:w-64" },
  { name: "Volta", logo: volta, customSize: "w-20 md:w-40" },
  { name: "Yobugo", logo: yobugo, customSize: "w-20 md:w-40" },
];

const firstRowLogos = clientLogos.slice(0, 15);
const secondRowLogos = clientLogos.slice(15, 30);

// --- STYLE ANIMASI CUSTOM ---
const customStyles = `
  /* --- Animasi Awan Hero (Lama) --- */
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

  /* --- Animasi Scroll Marquee (Lama) --- */
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
    0% { transform: rotate(0deg); }   /* Posisi awal lurus */
    25% { transform: rotate(2deg); }  /* Miring ke kanan 2 derajat */
    75% { transform: rotate(-2deg); } /* Miring ke kiri 2 derajat */
    100% { transform: rotate(0deg); } /* Balik lurus */
  }

  .animate-rocking {
    /* Durasi 6 detik agar gerakannya sangat halus dan pelan */
    animation: subtleRocking 6s ease-in-out infinite;
    /* Penting: Titik pusat putaran di tengah-tengah gambar */
    transform-origin: center center;
  }
`;

// --- COMPONENT: SCROLL REVEAL ANIMATION ---
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- COMPONENT: SKELETON LOADER UI ---
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

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // --- DATA SLIDES ---
  const slides = [
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 3, image: slide3 },
    { id: 4, image: slide4 },
  ];

  // --- DATA OVAL SHAPES (HERO - UPDATED TO ICONS) ---
  const heroShapes = [
    {
      name: "Website",
      image: icon1,
      // Awal: 4deg -> Hover: -4deg | Posisi tetap sama, padding diganti width
      className:
        "bottom-[35%] left-[10%] md:left-[22%] rotate-[4deg] hover:rotate-[-4deg] w-64 md:w-40",
    },
    {
      name: "Visual Design",
      image: icon2,
      // Awal: -4deg -> Hover: 4deg
      className:
        "bottom-[52%] left-[17%] md:left-[13%] rotate-[-4deg] hover:rotate-[4deg] hidden md:block w-24 md:w-52",
    },
    {
      name: "Influencer",
      image: icon3,
      // Awal: -4deg -> Hover: 4deg
      className:
        "bottom-[15%] left-[28%] md:left-[10%] rotate-[-4deg] hover:rotate-[4deg] w-24 md:w-48",
    },
    {
      name: "Branding",
      image: icon4,
      // Awal: 5deg -> Hover: -5deg
      className:
        "bottom-[50%] right-[20%] md:right-[15%] rotate-[5deg] hover:rotate-[-5deg] w-24 md:w-64",
    },
    {
      name: "Visual Branding",
      image: icon5,
      // Awal: -5deg -> Hover: 5deg
      className:
        "bottom-[28%] right-[2%] md:right-[5%] rotate-[-5deg] hover:rotate-[5deg] w-24 md:w-40",
    },
    {
      name: "Content Strategy",
      image: icon6,
      // Awal: 8deg -> Hover: -8deg
      className:
        "bottom-[63%] right-[8%] md:right-[3%] rotate-[8deg] hover:rotate-[-8deg] hidden md:block w-24 md:w-48",
    },
    {
      name: "Campaign",
      image: icon7,
      // Awal: 5deg -> Hover: -5deg
      className:
        "bottom-[8%] right-[24%] md:right-[16%] rotate-[5deg] hover:rotate-[-5deg] w-24 md:w-52",
    },
    {
      name: "Promotion",
      image: icon8,
      // Awal: -10deg -> Hover: 10deg
      className:
        "bottom-[65%] left-[0%] md:left-[3%] rotate-[-10deg] hover:rotate-[10deg] hidden md:block w-24 md:w-48",
    },
    // --- ITEM BARU (ICON 9) ---
    {
      name: "Media Social",
      image: icon9,
      // Posisi baru di atas kanan agar tidak menumpuk
      className:
        "bottom-[33%] left-[2%] rotate-[6deg] hover:rotate-[-6deg] w-24 md:w-64",
    },
  ];

  // --- DATA HOTSPOTS ---
  const mapHotspots = [
    { id: 1, name: "Jakarta HQ", top: "63%", left: "32%", clients: "150+" },
    { id: 2, name: "Medan", top: "42%", left: "18%", clients: "40+" },
    { id: 3, name: "Bali", top: "65%", left: "65%", clients: "85+" },
    { id: 4, name: "Balikpapan", top: "45%", left: "40%", clients: "30+" },
    { id: 5, name: "Makassar", top: "57%", left: "52%", clients: "25+" },
    { id: 6, name: "Papua", top: "50%", left: "88%", clients: "10+" },
  ];

  // --- DATA PROJECTS ---
  const projectData = [
    {
      id: 1,
      title: "Food and bevarage",
      category: "Social Media Management",
      gallery: [slide1, slide2, slide3, slide4, slide1],
    },
    {
      id: 2,
      title: "Fashion & jewelry",
      category: "Social Media Management",
      gallery: [slide2, slide3, slide4, slide1, slide2],
    },
    {
      id: 3,
      title: "Education",
      category: "Social Media Management",
      gallery: [slide3, slide4, slide1, slide2, slide3],
    },
    {
      id: 4,
      title: "Health",
      category: "Social Media Management",
      gallery: [slide4, slide1, slide2, slide3, slide4],
    },
    {
      id: 5,
      title: "Retail",
      category: "Social Media Management",
      gallery: [slide1, slide3, slide2, slide4],
    },
    {
      id: 6,
      title: "Service",
      category: "Social Media Management",
      gallery: [slide2, slide4, slide1, slide3],
    },
    {
      id: 7,
      title: "KOL Campaign",
      category: "KOL Management",
      gallery: [slide3, slide1, slide4, slide2],
    },
    {
      id: 8,
      title: "Visual Graphic",
      category: "Editing",
      gallery: [slide4, slide2, slide3, slide1],
    },
  ];

  // --- SIMULASI LOADING ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // --- AUTO SLIDE EFFECT ---
  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isLoading]);

  // --- LOGIKA SCROLL ---
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

  const scrollToContent = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      <style>{customStyles}</style>

      <Header activeSection={activeSection} />

      {/* --- HERO SECTION --- */}
      <RevealOnScroll>
        <div
          id="home"
          className="relative w-full h-[70vh] bg-cover bg-[center_top_20%] bg-no-repeat flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundImage: `url(${cloudBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white z-20 pointer-events-none"></div>

          {/* OVAL SHAPES (SEKARANG JADI ICON GAMBAR) */}
          {heroShapes.map((shape, idx) => {
            const duration = 5 + (idx % 5);
            const delay = idx * 0.2;
            return (
              <img
                key={idx}
                src={shape.image}
                alt={shape.name}
                // Class diubah: absolute, object-contain, animate-cloud, dan posisi dari shape.className
                className={`absolute object-contain animate-cloud hover:scale-110 transition-all duration-300 cursor-pointer z-10 ${shape.className}`}
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}

          <div className="relative z-30 text-center px-4 mt-8 md:mt-24">
            {/* --- 1. DIV PEMBUNGKUS BARU KHUSUS GAMBAR --- */}
            {/* 'flex-col' menumpuk ke bawah, 'items-center' menengahkan */}
            <div className="flex flex-col items-center justify-center mb-6 mt-16">
              <img
                src={titleImage1}
                alt="Build Better Brands"
                // Hapus mx-auto & margin aneh-aneh. Tambahkan 'block'
                className="block w-[80%] md:w-[550px] h-auto object-contain drop-shadow-sm -mb-[60px]"
              />

              <div className="w-[80%] md:w-[250px] mx-auto -mb-[60px] translate-x-[-20px]">
                <div className="animate-rocking origin-center w-full">
                  <img
                    src={titleImage2}
                    alt="Build Better Brands"
                    className="block w-full h-auto object-contain drop-shadow-sm transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>

              <img
                src={titleImage3}
                alt="Build Better Brands"
                className="block w-[80%] md:w-[450px] h-auto object-contain drop-shadow-sm"
              />
            </div>
            {/* --- 2. BAGIAN TEKS (Tetap di luar div gambar) --- */}
            <p className="text-gray-600 text-lg font-Francy md:text-xl mb-1 max-w-2xl mx-auto tracking-wider">
              Partner strategis untuk mengembangkan brand Anda
            </p>
            <p className="text-gray-600 font-Francy md:text-xl -mt-1 mb-10 max-w-2xl mx-auto tracking-wider">
              melalui social media management, creative campaign, dan digital
              strategy.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* --- FEATURES SECTION --- */}
      <div id="features-section" className="pt-16 pb-20 bg-white">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-48 text-center md:text-left items-start">
            <RevealOnScroll delay={100}>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-0">
                  <h2 className="text-7xl font-coolvetica bg-gradient-to-r from-[#0072ce] via-[#00a89c] to-[#00c87a] bg-clip-text text-transparent tracking-wider">
                    2017
                  </h2>
                  <p className="text-2xl font-coolvetica text-gray-800 leading-none text-left">
                    8 Tahun <br /> pengalaman
                  </p>
                </div>
                <p className="text-gray-600 text-sm font-Francy mx-auto md:mx-0 max-w-xs tracking-wider">
                  kami hadir dan bersama melayani berbagai macam kebutuhan brand
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-0">
                  <h2 className="text-7xl font-coolvetica bg-gradient-to-r from-[#0072ce] via-[#00a89c] to-[#00c87a] bg-clip-text text-transparent">
                    99+
                  </h2>
                  <p className="text-2xl font-coolvetica text-gray-800 leading-none text-left">
                    Brand yang <br /> sudah bekerja sama
                  </p>
                </div>
                <p className="text-gray-600 text-sm font-Francy mx-auto md:mx-0 max-w-xs tracking-wider">
                  berbagai majam jenis brand dan bidang mulai dari produk hingga
                  jasa baik umkm maupun corporate
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h2 className="text-3xl font-coolvetica text-gray-800 leading-none mr-5">
                    Lihat lebih dekat
                  </h2>
                  <button
                    onClick={scrollToContent}
                    className="focus:outline-none translate-y-4 flex-shrink-0 bg-gradient-to-r from-[#0072ce] via-[#00a89c] to-[#00c87a] hover:opacity-90 text-white w-12 h-12 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
                    aria-label="Scroll Down"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                </div>
                <h2 className="text-3xl font-coolvetica text-gray-800 mb-3 -mt-3 leading-none">
                  karya kami
                </h2>
                <p className="text-gray-600 font-Francy text-sm max-w-xs tracking-wider mx-auto md:mx-0">
                  berbagai majam jenis brand dan bidang mulai dari produk hingga
                  jasa baik umkm maupun corporate
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* --- PROJECTS SECTION --- */}
      <div id="projects" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-16">
            <RevealOnScroll className="w-full xl:w-auto flex justify-center xl:sticky xl:top-24 flex-shrink-0 z-20">
              <div className="relative w-[320px] h-[680px] bg-gray-900 rounded-[3.5rem] border-[8px] border-gray-800 shadow-2xl rotate-6 ring-1 ring-gray-900/50 transform transition-transform duration-500 hover:rotate-0">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 pointer-events-none"></div>
                <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-black rounded-[3rem] overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide) => (
                      <div
                        key={slide.id}
                        className="w-full h-full flex-shrink-0 relative"
                      >
                        <img
                          src={slide.image}
                          alt="Slide"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                          index === currentSlide
                            ? "bg-white w-6"
                            : "bg-white/60 w-1.5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <div className="w-full flex-grow">
              <RevealOnScroll>
                <div className="mb-10">
                  <h2 className="text-4xl font-bold font-coolvetica text-gray-800 mb-3 tracking-wider">
                    Our Projects
                  </h2>
                  <p className="text-gray-500 text-xl font-Francy tracking-wider">
                    Explore what our students have created.
                  </p>
                </div>
              </RevealOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {projectData.map((project, idx) => (
                  <RevealOnScroll key={project.id} delay={idx * 50}>
                    <div className="group bg-white p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col gap-2 h-full">
                      <div className="grid grid-cols-3 gap-1.5">
                        {project.gallery.slice(0, 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-100 h-20 rounded-lg overflow-hidden"
                          >
                            <img
                              src={img}
                              alt="mini-preview"
                              className="w-full h-full object-cover opacity-80"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-800 h-24 rounded-xl w-full flex items-center justify-center overflow-hidden relative">
                        <img
                          src={project.gallery[3] || project.gallery[0]}
                          alt="main-preview"
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="bg-black/50 hover:bg-black/80 text-white text-xs font-medium border border-white/50 px-4 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            View More
                          </button>
                        </div>
                      </div>
                      <div className="px-1 pb-1">
                        <h4 className="font-bold text-gray-800 text-sm truncate">
                          {project.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CLIENTS & MAP SECTION (UPDATED DENGAN LOGO MARQUEE) --- */}
      <div
        id="clients"
        className="py-20 bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="container mx-auto px-6 text-center">
          <RevealOnScroll>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-coolvetica text-gray-900 mb-4">
                Trusted Across Indonesia
              </h2>
              <p className="text-gray-500 max-w-2xl text-xl font-Francy mx-auto tracking-wider">
                Kami telah bekerjasama dengan berbagai partner di seluruh
                nusantara.
              </p>
            </div>
          </RevealOnScroll>

          {/* Map Indonesia */}
          <RevealOnScroll delay={200}>
            <div className="relative w-full max-w-8xl mx-auto -mt-40 mb-0 select-none">
              <img
                src={mapIndo}
                alt="Peta Indonesia"
                className="w-full h-auto object-contain filter drop-shadow-lg opacity-90"
              />
              {mapHotspots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute group z-10"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <span className="flex h-4 w-4 relative cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a89c] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00c87a] border-2 border-white shadow-md"></span>
                  </span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-max hidden group-hover:block animate-fadeIn z-20">
                    <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-4 shadow-xl relative">
                      <p className="font-bold text-sm mb-0.5">{spot.name}</p>
                      <p className="text-[#00c87a] font-medium">
                        {spot.clients} Clients
                      </p>
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* LOGO MARQUEE (RUNNING LOGOS) */}
          <RevealOnScroll delay={300}>
            <div className="space-y-[-50px] -mt-48">
              {/* Baris 1: Kiri ke Kanan */}
              <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll-right gap-16 md:gap-24 items-center">
                  {/* Kita duplikasi array logo 4x agar loop seamless */}
                  {[
                    ...firstRowLogos,
                    ...firstRowLogos,
                    ...firstRowLogos,
                    ...firstRowLogos,
                  ].map((client, idx) => (
                    <div
                      key={idx}
                      // 👇 LOGIKA RESIZE ADA DI SINI
                      // Jika client.customSize ada, pakai itu. Jika tidak, pakai default.
                      className={`flex-shrink-0 ${
                        client.customSize || "w-32 md:w-32"
                      }`}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Baris 2: Kanan ke Kiri */}
              <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll-left gap-16 md:gap-24 items-center">
                  {[
                    ...secondRowLogos,
                    ...secondRowLogos,
                    ...secondRowLogos,
                    ...secondRowLogos,
                  ].map((client, idx) => (
                    <div
                      key={idx}
                      // 👇 LOGIKA RESIZE JUGA DI SINI
                      className={`flex-shrink-0 ${
                        client.customSize || "w-32 md:w-32"
                      }`}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <div id="services" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-coolvetica text-gray-900 mb-4">
                Our Premium Services
              </h2>
              <p className="text-gray-500 text-lg font-Francy max-w-2xl mx-auto tracking-wider">
                Solusi digital lengkap yang disusun seperti puzzle sempurna
                untuk bisnis Anda.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[140px] gap-4">
            <RevealOnScroll className="md:col-span-2 md:row-span-2" delay={0}>
              <div className="h-full bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group border border-gray-100 flex flex-col justify-between cursor-pointer">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Social Media Mgt.
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Pengelolaan akun A-Z: Content planning, desain visual,
                    copywriting, hingga admin posting.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-1" delay={100}>
              <div className="h-full bg-gray-900 rounded-[2rem] p-5 flex flex-col justify-center items-start shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white cursor-pointer group">
                <div className="mb-2 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Web Dev</h3>
                <p className="text-gray-400 text-xs">
                  Landing page & Company Profile.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-1" delay={150}>
              <div className="h-full bg-white rounded-[2rem] flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer group">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                  300%
                </span>
                <p className="text-gray-600 font-medium mt-1 text-center text-xs">
                  Traffic Growth
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-2" delay={200}>
              <div className="h-full bg-gradient-to-br from-[#00c87a] to-[#00a89c] rounded-[2rem] p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-white relative overflow-hidden group cursor-pointer">
                <div>
                  <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    Video Prod. <br /> & Reels
                  </h3>
                </div>
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/90 text-xs">
                    Video vertikal viral kualitas sinematik.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-1" delay={250}>
              <div className="h-full bg-white rounded-[2rem] p-5 flex flex-col justify-center border border-gray-100 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">SEO Audit</h3>
                <p className="text-[10px] text-gray-500">Ranking #1 Google</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-2 md:row-span-1" delay={300}>
              <div className="h-full bg-white rounded-[2rem] p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer">
                <div className="w-12 h-12 flex-shrink-0 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Ads Optimization
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Meta Ads & TikTok Ads dengan target audiens presisi.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-1" delay={350}>
              <div className="h-full bg-red-50 rounded-[2rem] p-5 flex flex-col justify-center border border-red-100 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-800 text-sm">
                    Live Stream
                  </h3>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-[10px] text-gray-500">
                  Host & Setup profesional untuk Shopee/TikTok.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-2 md:row-span-1" delay={400}>
              <div className="h-full bg-gray-100 rounded-[2rem] p-5 relative overflow-hidden flex items-center shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <img
                  src={slide3}
                  alt="bg"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Photography</h3>
                    <p className="text-xs text-gray-600">
                      Product & Model Catalog
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-2" delay={450}>
              <div className="h-full bg-purple-50 rounded-[2rem] p-5 flex flex-col items-center text-center justify-center border border-purple-100 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Branding</h3>
                <p className="text-xs text-gray-500 mt-2">
                  Logo, Identity & Brand Guideline.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 md:row-span-1" delay={500}>
              <div className="h-full bg-white rounded-[2rem] p-5 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer group">
                <div className="mb-1 text-red-500 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 text-sm">
                  KOL Management
                </h4>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* === MODAL / POP-UP GALLERY === */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-fadeIn">
            {/* Header Modal */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {selectedProject.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Content Masonry */}
            <div className="p-6 overflow-y-auto">
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {selectedProject.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid rounded-xl overflow-hidden bg-gray-100 group relative"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-2">Project Detail</h4>
                <p className="text-gray-600 leading-relaxed">
                  Ini adalah detail lengkap untuk project{" "}
                  <strong>{selectedProject.title}</strong>.
                </p>
              </div>
            </div>
            {/* Footer Modal */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
