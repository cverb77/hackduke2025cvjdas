/* eslint-disable no-unused-vars */
import Map from '../components/Map';
import Nav from '../components/Nav';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="relative h-screen w-screen">
        <Nav className="" />

        <div className="rounded-full h-[110vw] w-[110vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className='text-white text-[8vw] md:text-[4.5vw] font-semibold text-shadow-2 mt-[12vh] md:mt-[22vh] text-center z-10 relative'>
          Thanks for your contribution!
        </h1>

        <h2 className='text-white text-[4vw] md:text-[2vw] text-shadow-2 text-center z-10 relative px-10 pt-10'>
          We appreciate you helping make food more accessible.
        </h2>

        <div className='flex justify-center px-[6vw] md:px-0'>
          <button
            className="w-full md:w-[15vw] h-[7vh] mt-[4vh] bg-[#8cb638] flex justify-center items-center rounded-xl text-white text-[4vw] md:text-[1vw] font-semibold hover:underline z-10"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>

        <div className='h-[10vh]'></div>
      </div>
    </div>
  );
}

export default App;
