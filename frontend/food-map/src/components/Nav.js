import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav className="w-screen h-[10vh] flex justify-start fixed top-0 z-[9999] bg-[#1d1d1d] flex-col scale-[calc(100vw/1920)]">
      <ul className="pl-[15vw] flex gap-[1vw] text-white font-semibold font-blinker text-[1vw] h-full opacity-100 items-center">
        {[
          { label: "SCARCITY MAP", path: "/" },
          { label: "OUR MISSION", path: "/mission" },
          { label: "ABOUT US", path: "/about" },
          { label: "JOIN THE EFFORT", path: "/contribute" }
        ].map(({ label, path }) => (
          <li
            key={label}
            className={`relative cursor-pointer pb-[0.5vh] transition-all duration-300 w-[8vw] text-center flex items-center justify-center hover:underline ${label === "JOIN THE EFFORT" ? "text-[#a1d140]" : ""}`}
          >
            <Link
              to={path}
              className="w-full h-full flex items-center justify-center"
              onClick={() => setActive(path)} // Update active state when clicking
            >
              {label}
              {active === path && (
                <div className="absolute left-0 bottom-[-3.1vh] w-[8vw] h-[0.75vh] bg-[#8cb638]"></div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
