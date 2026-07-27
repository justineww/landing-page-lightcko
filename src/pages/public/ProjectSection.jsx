import React, { useState, useEffect } from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

import slide1 from "../../storage/picture/slide1.jpeg";
import slide2 from "../../storage/picture/slide2.jpeg";
import slide3 from "../../storage/picture/slide3.jpeg";
import slide4 from "../../storage/picture/slide4.jpeg";

// --- DATA SLIDES (phone mockup) ---
const slides = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 },
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

export default function ProjectSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- AUTO SLIDE EFFECT ---
  // Section ini hanya di-mount setelah loading selesai (dikontrol dari
  // LandingPages.jsx), jadi tidak perlu lagi guard isLoading di sini.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
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
                      {project.gallery.slice(0, 3).map((img, idx2) => (
                        <div
                          key={idx2}
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

      {/* === MODAL / POP-UP GALLERY === */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-fadeIn">
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
