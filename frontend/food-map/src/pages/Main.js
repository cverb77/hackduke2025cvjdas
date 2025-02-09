/* eslint-disable no-unused-vars */
import Map from '../components/Map';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
    const navigate = useNavigate();
    const [locationCount, setLocationCount] = useState(0);
    const [tableRows, setTableRows] = useState(() => {
        // Get the initial value from localStorage or default to 0
        return parseInt(localStorage.getItem("numRows")) || 0;
    });

    useEffect(() => {
        // Fetch the current count from the backend
        fetch('https://hackduke2025cvjdas.onrender.com/points')  // Replace with your backend URL
            .then((res) => res.json())
            .then((data) => {
                const currentCount = data.length;
                setLocationCount(currentCount);

                // Update only if the count has changed
                if (currentCount !== tableRows) {
                    setTableRows(currentCount);
                    localStorage.setItem("numRows", currentCount);
                }
            })
            .catch((err) => console.error('Error fetching points:', err));
    }, [tableRows]);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Fetch points and count them
        fetch('https://hackduke2025cvjdas.onrender.com/points')
            .then((res) => res.json())
            .then((data) => {
                setLocationCount(data.length);  // Set the number of foraging locations
            })
            .catch((err) => console.error('Error fetching points:', err));
    }, []);

    

  return (
    <div>
        <div className="relative h-screen w-screen">
        <Nav className="" />
       
        <div className="rounded-full h-[110vw] w-[110vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>


        <h1 className='text-white text-[4.5vw] font-semibold text-shadow-2 mt-[22vh] text-center z-10 relative'>
            Free, Fresh, Forageable Food
        </h1>
        <h2 className='text-white text-[2vw] text-shadow-2 text-center z-10 relative'>
            Click, drag, and zoom to explore different foraging locations in your area.
        </h2>
       
        <div className='w-full px-[15vw] z-10 relative'>
            <div className="bg-[#1d1d1d] w-full h-[10vh] mt-[7vh] rounded-tl-[2vw] rounded-tr-[2vw] flex">
            {[`${tableRows - 1} Foraging Locations`, "6500+ Food Deserts", "47M Americans Suffering from Food Insecurity", "4.7B Pounds of Food Rescued from Landfills"].map((stat, index) => (
                <div key={index} className="flex-1 border-r-2 p-[2vw] leading-[1.2] text-center border-gray-500 flex justify-center text-white text-[1.25vw] font-semibold font-blinker last:border-r-0">
                <p className='self-center'>{stat}</p>
                </div>
            ))}
            </div>
        </div>
       
        <div className="flex justify-center items-center h-full z-10 relative mt-[-17.5vh]">
            <div className="w-full px-[15vw] overflow-clip h-[65vh]">
            <Map className="h-full" />
            </div>
        </div>
       
        <div className='w-full px-[15vw] z-10 relative mt-[-15vh]'>
            <div className="bg-[#1d1d1d] w-full h-[45vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3.5vw]">
            <h1 className='text-white text-[2.5vw]'>Contribute</h1>
            <h3 className='text-white text-[1vw] leading-[1.5vw]'>
            If you are aware of any forageable food, please click the button below to add to our database! Whether you are a sustainable leader reporting your community orchard or a good samaritan reporting a strawberry patch on the side of the road, the data you are providing will help connect free, healthy food with those in need.
            </h3>
            <button
                className="w-[15vw] h-[7vh] mt-[4vh] bg-[#8cb638] flex justify-center self-center items-center rounded-xl text-white text-[1vw] font-semibold hover:underline"
                onClick={() => {
                    navigate("/contribute");
                }}
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