import React, { useState, useEffect } from "react";
import GradientText from "../../design/header/GradientText";
import GooeyNav from "../../design/header/GooeyNav";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const items = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Choose Us", href: "#chooseus" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`transition-all duration-300 px-4 md:px-9 py-4 md:py-6 flex items-center justify-between fixed top-0 z-50 w-full
    ${scrolled ? "bg-blue-50 shadow-md text-black" : "bg-transparent text-white"}`}
    >

      <div className="flex items-center space-x-3 md:space-x-4">
        <img src={logo} alt="NIRMANiiX Logo" className="w-10 h-10 md:w-12 md:h-12" />
        <GradientText
          colors={["#1E3A8A", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"]}
          animationSpeed={3}
          showBorder={false}
          className="text-2xl md:text-4xl font-bold"
        >
          EVENTIFY
        </GradientText>
      </div>

      <div className="hidden md:block">
        <GooeyNav
          items={items}
          scrolled={scrolled}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-blue-100 shadow-md flex flex-col items-center py-4 md:hidden transition-all duration-300">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-full text-center py-2 px-4 text-blue-900 font-medium hover:bg-blue-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
