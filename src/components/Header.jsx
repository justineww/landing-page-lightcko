import React, { useState, useEffect } from "react";
import logoLightCko from "../storage/picture/logo-lightcko.png"; // Pastikan path ini benar

const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Daftar Menu
  const menuItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Clients", href: "#clients", id: "clients" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About Us", href: "#aboutus", id: "aboutus" },
  ];

  // Efek untuk mendeteksi scroll window (untuk style header)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- FUNGSI SCROLL SMOOTH (BARU) ---
  const handleScrollTo = (e, id) => {
    e.preventDefault(); // Mencegah loncat instan (teleport) bawaan browser

    const element = document.getElementById(id);
    if (element) {
      // Offset: Tinggi header kira-kira 80px agar judul tidak ketutupan
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Animasi halus
      });

      setIsOpen(false); // Tutup menu mobile jika sedang terbuka
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* 1. BAGIAN KIRI: LOGO */}
          {/* Klik logo juga akan scroll halus ke Home */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logoLightCko}
              alt="Logo Light Cko"
              className="w-15 h-10 object-contain hover:opacity-80 transition-opacity"
            />
          </a>

          {/* 2. BAGIAN TENGAH: MENU (GLASS MORPH) */}
          <nav className="hidden md:block">
            <ul className="flex items-center bg-white/30 backdrop-blur-md border border-white/40 p-1.5 rounded-full shadow-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.id)} // Panggil fungsi smooth scroll
                    className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 block ${
                      activeSection === item.id
                        ? "bg-white text-blue-600 shadow-sm transform scale-105" // Aktif: Putih, Teks Biru, Sedikit membesar
                        : "text-gray-600 hover:bg-white/50 hover:text-blue-600" // Tidak Aktif
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. BAGIAN KANAN: TOMBOL CONTACT */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 px-5 py-2.5 rounded-full font-medium hover:bg-gray-900 hover:text-white hover:border-transparent transition-all duration-300 text-sm shadow-sm hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4" // Icon menyesuaikan warna teks parent
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Contact</span>
            </button>

            {/* Tombol Hamburger (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-md"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="p-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.id)} // Smooth scroll di mobile juga
                className={`block px-4 py-3 text-base font-medium rounded-xl text-center transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
