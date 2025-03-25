import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // or use any other icon package you prefer

export default function Nav() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
    setMenuOpen(false); // close mobile menu on route change
  }, [location]);

  const links = [
    { label: "FORAGING MAP", path: "/" },
    { label: "OUR MISSION", path: "/mission" },
    { label: "ABOUT US", path: "/about" },
    { label: "JOIN THE EFFORT", path: "/contribute" }
  ];

  return (
    <nav className="w-screen fixed top-0 z-[9999] bg-[#1d1d1d]">
      {/* Desktop Nav */}
      <ul className="hidden md:flex h-[10vh] pl-[15vw] gap-[1vw] text-white font-semibold font-blinker text-[1vw] items-center scale-[calc(100vw/1920)]">
        {links.map(({ label, path }) => (
          <li
            key={label}
            className={`relative cursor-pointer pb-[0.5vh] transition-all duration-300 w-[8vw] text-center flex items-center justify-center hover:underline ${label === "JOIN THE EFFORT" ? "text-[#a1d140]" : ""}`}
          >
            <Link
              to={path}
              className="w-full h-full flex items-center justify-center"
              onClick={() => setActive(path)}
            >
              {label}
              {active === path && (
                <div className="absolute left-0 bottom-[-3.1vh] w-[8vw] h-[0.75vh] bg-[#8cb638]"></div>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div className="flex md:hidden items-center justify-between px-6 py-4 h-[10vh] text-white font-blinker text-[5vw] relative z-50">
        <span className="font-semibold">FREE FORAGING</span>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden bg-[#1d1d1d] px-6 pb-4 gap-4 text-white text-[4.5vw] font-semibold font-blinker transition-all duration-300 z-40 relative">
          {links.map(({ label, path }) => (
            <li key={label} className={`py-2 border-b border-gray-700 ${label === "JOIN THE EFFORT" ? "text-[#a1d140]" : ""}`}>
              <Link to={path} onClick={() => setActive(path)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
