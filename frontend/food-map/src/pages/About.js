/* eslint-disable no-unused-vars */
import Map from '../components/Map';
import Nav from '../components/Nav';

function About() {

      
  return (
    <div>
        <div className="relative h-screen w-screen">
        <Nav className="" />
        
        <div className="rounded-full h-[110vw] w-[110vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className='text-white text-[4.5vw] font-semibold text-shadow-2 mt-[22vh] text-center z-10 relative'>
            About Us
        </h1>
        <h2 className='text-white text-[2vw] text-shadow-2 text-center z-10 relative'>
            Jack Dupuy, Aaron Squire, and Chris Verbaro
        </h2>
        
        
        <div className='w-full px-[15vw] z-10 relative mt-[5vh]'>
            <div className="bg-[#1d1d1d] w-full h-[35vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3vw] -mb-[5vh]">
                <h1 className='text-white text-[2.5vw]'>Hack Duke</h1>
                <h3 className='text-white text-[1vw] leading-[1.5vw]'>
                    Jack, Aaron, and Chris created this project in under 24 hours at the HackDuke 2025 competition. We want to give a big thank you to the sponsors and organizers of the hackathon, Duke University, and caffeine for the opportunity to meet a bunch of great people and complete this project. We also want to shout out Sanfoka Community Orchard for all the work they do to provide forageable food to communities in need and for serving as inspiration for this idea.
                </h3>
            </div>
        </div>

        <div className='w-full px-[15vw] z-10 relative mt-[5vh] flex gap-[2vw]'>
            <div className="bg-[#1d1d1d] w-full h-[90vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3.5vw]">
                <img
                    src={"/jack.jpg"}
                    alt="team member"
                    className="w-[12vw] h-[22vh] object-cover rounded-md flex "
                />
                <h1 className='text-white text-[2vw]'>Jack Dupuy</h1>
                <h3 className='text-white text-[1vw] leading-[1.5vw]'>
                    Hi, my name is Jack and I'm a senior at the University of Richmond double majoring in Computer Science and Geography. I love problem solving and I love the environment, and I look forward to finding even more creative ways to leverage my passions and work towards a more sustainable future. If you have any questions about our site or ideas for other exciting projects, you can reach me at breadbaker7723@gmail.com!
                </h3>
            </div>
            <div
                className="bg-[#1d1d1d] w-full h-[90vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3.5vw]"
            >
                <img
                    src={"/aaron.png"}
                    alt="team member"
                    className="w-[12vw] h-[22vh] object-cover rounded-md flex"
                />
                <h1 className='text-white text-[2vw]'>Aaron Squire</h1>
                <h3 className='text-white text-[1vw] leading-[1.5vw]'>
                    Hi I'm Aaron! I'm a senior at the University of Richmond studying computer science with an emphasis on web development. I am mainly responsible for the front-end of this project. I want to use my skills for social good, so if you're a community organization or a non-profit, feel free to reach out at squireaa1@gmail.com!
                </h3>
            </div>
            <div className="bg-[#1d1d1d] w-full h-[90vh] mt-[5vh] rounded-[2vw] flex flex-col gap-[2vh] p-[3.5vw]">
                <img
                    src={"/chris.jpeg"}
                    alt="team member"
                    className="w-[12vw] h-[22vh] object-cover rounded-md flex "
                />
                <h1 className='text-white text-[2vw]'>Chris Verbaro</h1>
                <h3 className='text-white text-[1vw] leading-[1.5vw]'>
                    Hey y'all! My name is Chris Verbaro and I am a senior at the University of Richmond (Roll 'ders!) studying Computer Science (with interst in Networks and Cybersecurity), Mathematics, and Japanese. During HackDuke2025, I was in charge of deployment, gitflow, and all things admin. It has been a blast working on my first 24-hour hackathon. My email is chrisverbaro5@gmail.com, feel free to come say hi!
                </h3>
            </div>
        </div>
        
        <div className='h-[10vh]'></div>
        </div>
    </div>
  );
}

export default About;
