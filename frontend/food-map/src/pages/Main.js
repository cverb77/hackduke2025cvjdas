/* eslint-disable no-unused-vars */
import Map from '../components/Map';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [locationCount, setLocationCount] = useState(0);
  const [tableRows, setTableRows] = useState(() => {
    return parseInt(localStorage.getItem("numRows")) || 0;
  });

  useEffect(() => {
    fetch('https://hackduke2025cvjdas.onrender.com/points')
      .then((res) => res.json())
      .then((data) => {
        const currentCount = data.length;
        setLocationCount(currentCount);
        if (currentCount !== tableRows) {
          setTableRows(currentCount);
          localStorage.setItem("numRows", currentCount);
        }
      })
      .catch((err) => console.error('Error fetching points:', err));
  }, [tableRows]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://hackduke2025cvjdas.onrender.com/points')
      .then((res) => res.json())
      .then((data) => {
        setLocationCount(data.length);
      })
      .catch((err) => console.error('Error fetching points:', err));
  }, []);

  return (
    <div>
      <div className="relative h-screen w-screen">
        <Nav className="" />

        <div className="rounded-full h-[110vw] w-[110vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className='text-white text-[8vw] md:text-[4.5vw] font-semibold text-shadow-2 mt-[12vh] md:mt-[22vh] text-center z-10 relative px-10'>
          Free, Fresh, Forageable Food
        </h1>
        <h2 className='text-white text-[4vw] md:text-[2vw] text-shadow-2 text-center z-10 relative px-[5vw]'>
          Click, drag, and zoom to explore different foraging locations in your area.
        </h2>

        {/* Stats Box */}
        <div className='w-full px-[5vw] md:px-[15vw] z-10 relative'>
          <div className="bg-[#1d1d1d] w-full mt-[4vh] rounded-tl-[5vw] md:rounded-tl-[2vw] rounded-tr-[5vw] md:rounded-tr-[2vw] flex flex-col md:flex-row">
            {[
              `${tableRows} Foraging Locations`,
              "6500+ Food Deserts",
              "47M Americans Suffering from Food Insecurity",
              "4.7B Pounds of Food Rescued from Landfills"
            ].map((stat, index) => (
              <div
                key={index}
                className="border-b-2 md:border-b-0 md:border-r-2 border-gray-500 last:border-b-0 last:md:border-r-0 p-[4vw] md:p-[2vw] text-center text-white text-[4vw] md:text-[1.25vw] font-semibold font-blinker"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="flex justify-center items-center h-full z-10 relative mt-[-30vh] md:mt-[-17.5vh]">
          <div className="w-full px-[5vw] md:px-[15vw] overflow-clip h-[40vh] md:h-[65vh]">
            <Map className="h-full" />
          </div>
        </div>

        {/* Contribute Box */}
        <div className='w-full px-[5vw] md:px-[15vw] z-10 relative mt-[-30vh] md:mt-[-15vh]'>
          <div className="bg-[#1d1d1d] w-full mt-[5vh] rounded-[5vw] md:rounded-[2vw] flex flex-col gap-[2vh] p-[6vw] md:p-[3.5vw]">
            <h1 className='text-white text-[5vw] md:text-[2.5vw]'>Contribute</h1>
            <h3 className='text-white text-[3.5vw] md:text-[1vw] leading-[5vw] md:leading-[1.5vw]'>
              If you are aware of any forageable food, please click the button below to add to our database! Whether you are a sustainable leader reporting your community orchard or a good samaritan reporting a strawberry patch on the side of the road, the data you are providing will help connect free, healthy food with those in need.
            </h3>
            <button
              className="w-full md:w-[15vw] h-[7vh] mt-[4vh] bg-[#8cb638] flex justify-center items-center rounded-xl text-white text-[4vw] md:text-[1vw] font-semibold hover:underline"
              onClick={() => navigate("/contribute")}
            >
              Help Make a Difference
            </button>
          </div>
        </div>

        <div className='h-[10vh]'></div>
      </div>
    </div>
  );
}

export default App;
