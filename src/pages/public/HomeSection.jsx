import React from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

// --- IMPORT GAMBAR HERO ---
import cloudBg from "../../storage/picture/AWAN.png";
import titleImage1 from "../../storage/picture/title1.png";
import titleImage2 from "../../storage/picture/title2.png";
import titleImage3 from "../../storage/picture/title3.png";

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

// --- DATA OVAL SHAPES (HERO) ---
const heroShapes = [
  {
    name: "Website",
    image: icon1,
    className:
      "bottom-[35%] left-[10%] md:left-[22%] rotate-[4deg] hover:rotate-[-4deg] w-64 md:w-40",
  },
  {
    name: "Visual Design",
    image: icon2,
    className:
      "bottom-[52%] left-[17%] md:left-[13%] rotate-[-4deg] hover:rotate-[4deg] hidden md:block w-24 md:w-52",
  },
  {
    name: "Influencer",
    image: icon3,
    className:
      "bottom-[15%] left-[28%] md:left-[10%] rotate-[-4deg] hover:rotate-[4deg] w-24 md:w-48",
  },
  {
    name: "Branding",
    image: icon4,
    className:
      "bottom-[50%] right-[20%] md:right-[15%] rotate-[5deg] hover:rotate-[-5deg] w-24 md:w-64",
  },
  {
    name: "Visual Branding",
    image: icon5,
    className:
      "bottom-[28%] right-[2%] md:right-[5%] rotate-[-5deg] hover:rotate-[5deg] w-24 md:w-40",
  },
  {
    name: "Content Strategy",
    image: icon6,
    className:
      "bottom-[63%] right-[8%] md:right-[3%] rotate-[8deg] hover:rotate-[-8deg] hidden md:block w-24 md:w-48",
  },
  {
    name: "Campaign",
    image: icon7,
    className:
      "bottom-[8%] right-[24%] md:right-[16%] rotate-[5deg] hover:rotate-[-5deg] w-24 md:w-52",
  },
  {
    name: "Promotion",
    image: icon8,
    className:
      "bottom-[65%] left-[0%] md:left-[3%] rotate-[-10deg] hover:rotate-[10deg] hidden md:block w-24 md:w-48",
  },
  {
    name: "Media Social",
    image: icon9,
    className:
      "bottom-[33%] left-[2%] rotate-[6deg] hover:rotate-[-6deg] w-24 md:w-64",
  },
];

export default function HomeSection() {
  return (
    <RevealOnScroll>
      <div
        id="home"
        className="relative w-full h-[70vh] bg-cover bg-[center_top_20%] bg-no-repeat flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${cloudBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white z-20 pointer-events-none"></div>

        {/* OVAL SHAPES (ICON GAMBAR) */}
        {heroShapes.map((shape, idx) => {
          const duration = 5 + (idx % 5);
          const delay = idx * 0.2;
          return (
            <img
              key={idx}
              src={shape.image}
              alt={shape.name}
              className={`absolute object-contain animate-cloud hover:scale-110 transition-all duration-300 cursor-pointer z-10 ${shape.className}`}
              style={{
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        <div className="relative z-30 text-center px-4 mt-8 md:mt-24">
          <div className="flex flex-col items-center justify-center mb-6 mt-16">
            <img
              src={titleImage1}
              alt="Build Better Brands"
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
  );
}
