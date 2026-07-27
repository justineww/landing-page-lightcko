import React from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

import mapIndo from "../../storage/picture/indo-map.png";

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

// --- DATA HOTSPOTS ---
const mapHotspots = [
  { id: 1, name: "Jakarta HQ", top: "63%", left: "32%", clients: "150+" },
  { id: 2, name: "Medan", top: "42%", left: "18%", clients: "40+" },
  { id: 3, name: "Bali", top: "65%", left: "65%", clients: "85+" },
  { id: 4, name: "Balikpapan", top: "45%", left: "40%", clients: "30+" },
  { id: 5, name: "Makassar", top: "57%", left: "52%", clients: "25+" },
  { id: 6, name: "Papua", top: "50%", left: "88%", clients: "10+" },
];

export default function ClientSection() {
  return (
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
                {[
                  ...firstRowLogos,
                  ...firstRowLogos,
                  ...firstRowLogos,
                  ...firstRowLogos,
                ].map((client, idx) => (
                  <div
                    key={idx}
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
  );
}
