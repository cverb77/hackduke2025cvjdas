import { useState } from "react";

export default function Nav() {
  // Set the default active tab to the first item in the array
  const [active, setActive] = useState("SCARCITY MAP"); 

  return (
    <nav className="w-full h-32 flex justify-center fixed top-0 z-[9999] bg-[#1d1d1d] flex-col">
        <ul className="px-10 ml-72 flex gap-8 text-white font-semibold font-blinker text-2xl h-full opacity-100">
            {["SCARCITY MAP", "OUR MISSION", "ABOUT US", "JOIN THE EFFORT"].map((item) => (
            <li
                key={item}
                className={`relative cursor-pointer pb-1 transition-all duration-300 w-[12rem] text-center flex items-center justify-center hover:underline ${item === "JOIN THE EFFORT" ? "text-[#a1d140]" : ""}`}
                onClick={() => setActive(item)}
            >
                {item}
                {active === item && (
                <div className="absolute left-0 bottom-0 w-[12rem] h-3 bg-[#8cb638]"></div> // Highlight active tab
                )}
            </li>
            ))}
        </ul>
    </nav>
  );
}
