import React from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

import slide3 from "../../storage/picture/slide3.jpeg";

export default function ServiceSection() {
  return (
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
  );
}
