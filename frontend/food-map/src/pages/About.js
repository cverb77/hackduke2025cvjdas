/* eslint-disable no-unused-vars */
import Map from '../components/Map';
import Nav from '../components/Nav';

function App() {
  return (
    <div>
        <div className="relative h-screen w-screen">
        <Nav className="" />
        
        <div className="rounded-full h-[110vw] w-[110vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className='text-white text-[4.5vw] font-semibold text-shadow-2 mt-[22vh] text-center z-10 relative'>
            About Page Text
        </h1>
        <h2 className='text-white text-[2vw] text-shadow-2 text-center z-10 relative'>
            About Page Text
        </h2>
        
        
        <div className='w-full px-[15vw] z-10 relative mt-[15vh]'>
            <div className="bg-[#1d1d1d] w-full h-[60vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3.5vw]">
            <h1 className='text-white text-[2.5vw]'>Contribute</h1>
            <h3 className='text-white text-[1vw] leading-[1.5vw]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, tortor nec bibendum luctus, elit mi suscipit tortor, a ultrices justo ipsum ac augueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, tortor nec bibendum luctus, elit mi suscipit tortor, a ultrices justo ipsum ac augueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, tortor nec bibendum luctus, elit mi suscipit tortor, a ultrices justo ipsum ac augueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, tortor nec bibendum luctus, elit mi suscipit tortor, a ultrices justo ipsum ac augueLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, tortor nec bibendum luctus, elit mi suscipit tortor, a ultrices justo ipsum ac augue...
            </h3>
            <button className="w-[15vw] h-[7vh] mt-[4vh] bg-[#8cb638] flex justify-center self-center items-center rounded-xl text-white text-[1vw] font-semibold">
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
