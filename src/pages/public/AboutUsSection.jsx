import React from "react";
import RevealOnScroll from "../../components/RevealOnScroll";

// Catatan: di file lama section ini id-nya "features-section" (bagian angka
// 2017 / 99+ Brand / tombol "Lihat lebih dekat"). Saya masukkan ke
// AboutUsSection.jsx karena isinya memang tentang profil/pencapaian perusahaan.
// Kalau ternyata kamu punya konten "About Us" lain yang belum ada di kode ini,
// tinggal tambahkan di file ini juga.
export default function AboutUsSection() {
  const scrollToContent = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
  );
}
