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
            Our Mission:
        </h1>
        <h2 className='text-white text-[2vw] text-shadow-2 text-center z-10 relative'>
            Healthy Food for All
        </h2>
       
        <div className='w-full px-[15vw] z-10 relative mt-[5vh]'>
            <div className="bg-[#1d1d1d] w-full h-[45vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3.5vw]">
            <h1 className='text-white text-[2.5vw]'>A Call to Action:</h1>
            <h3 className='text-white text-[1vw] leading-[1.5vw]'>
            Here at FreeForaging.co, we believe that all humans have the right to a healthy diet. Our resilient planet provides more than enough resources to make that dream a reality, evidenced by the 133 billion pounds of food wasted every year in the United States alone. However, due to a combination of inefficiency, overconsumption, and resource mismanagement, over 47 million Americans (roughly 1 in 7) experienced food insecurity in 2023. One way to combat this frustrating reality is to provide fresh, free, healthy food to communities in need, for example those living in "food deserts" devoid of grocery stores and other healthy food options.
            There are many amazing people fighting back against these injustices, and we aim to highlight and support their work with our forageable food database.
            </h3>
            </div>
        </div>
       
        <div className='h-[10vh]'></div>
        </div>
    </div>
  );
}


export default App;