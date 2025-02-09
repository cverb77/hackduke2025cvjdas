/* eslint-disable no-unused-vars */
import Nav from '../components/Nav';
import AddPoints from '../components/AddPoints';

function App() {
  return (
    <div>
        <div className="relative h-screen w-screen">
        <Nav className="" />
        
        <div className="rounded-full h-[80vw] w-[80vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className='text-white text-[4.5vw] font-semibold text-shadow-2 mt-[22vh] text-center z-10 relative'>
            Placeholder Text 2
        </h1>
        <h2 className='text-white text-[2vw] text-shadow-2 text-center z-10 relative'>
            Sub-placeholder Text 2
        </h2>
        
        <div className='w-full px-[15vw] z-10 relative'>
            <div className="bg-[#1d1d1d] w-full h-[10vh] mt-[7vh] rounded-tl-[2vw] rounded-tr-[4vw] flex">
            {["STAT 1", "STAT 2", "STAT 3", "STAT 4"].map((stat, index) => (
                <div key={index} className="flex-1 border-r-2 border-gray-500 flex justify-center text-white text-[1.5vw] font-semibold font-blinker last:border-r-0">
                <p className='self-center'>{stat}</p>
                </div>
            ))}
            </div>
        </div>
        
        <div className="flex justify-center items-center h-full z-10 relative mt-[-17.5vh]">
            <div className="w-full px-[15vw] overflow-clip h-[65vh]">
                <AddPoints className="h-full" />
            </div>
        </div>
        
        <div className='w-full px-[15vw] z-10 relative mt-[-15vh]'>
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
