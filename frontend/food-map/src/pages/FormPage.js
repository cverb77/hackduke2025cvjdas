/* eslint-disable no-unused-vars */
import Nav from '../components/Nav';
import AddPoints from '../components/AddPoints';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function FormPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [invalidForm, setInvalidForm] = useState(false);

    const [placementMode, setPlacementMode] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        food: "",
        description: "",
        email: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const [points, setPoints] = useState([]);

        useEffect(() => {
            fetch('https://hackduke2025cvjdas.onrender.com/points')
            .then((res) => res.json())
            .then((data) => setPoints(data));
        }, []);

        const handleNewPoint = (newPoint) => {
            fetch('https://hackduke2025cvjdas.onrender.com/points', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPoint),
            }).then(() => {
            setPoints([...points, newPoint]);
            });
        };
    
      const handleSubmit = () => {
        if (formData.title === "" || formData.food === "" || !(lat && lon)) {
            setInvalidForm(true)
        } else {
            handleNewPoint({ lat, lon, title: formData.title, food_category: formData.food, description: formData.description, email: formData.email })
            navigate("/thankyou");
        }
      };

  return (
    <div>
        <div
            className="relative h-[100vh] w-screen"
        >

        <Nav className="" />
        
        <div className="rounded-full h-[110vw] w-[110vw] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className='text-white text-[4.5vw] font-semibold text-shadow-2 mt-[22vh] text-center z-[50] relative'>
            Placeholder Text
        </h1>

        <div className="flex justify-center items-center h-full z-10 relative mt-[2vh] flex-col gap-5 px-[15vw] text-[1vw]">
        <div
            className="bg-[#1d1d1d] rounded-[2vw] shadow-lg w-full p-[6vh] mt-[89vh]"
        >
        <div className="mb-4">
          <label htmlFor="title" className="block text-white mb-2 text-[1.5vw]">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className={`w-full p-3 rounded-md text-white bg-[#1d1d1d] border-2 ${invalidForm ? "border-red-500" : "border-white"} focus:border-[#8cb638] outline-none`}
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="food" className="block text-white mb-2 text-[1.5vw]">What Food?</label>
          <input
            type="text"
            id="food"
            name="food"
            className={`w-full p-3 rounded-md text-white bg-[#1d1d1d] border-2 ${invalidForm ? "border-red-500" : "border-white"} focus:border-[#8cb638] outline-none`}
            value={formData.food}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-white mb-2 text-[1.5vw]">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full p-3 rounded-md text-white  bg-[#1d1d1d] border-2 border-white focus:border-[#8cb638] outline-none"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2 text-[1.5vw]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-md text-white bg-[#1d1d1d] border-2 border-white focus:border-[#8cb638] outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
                
                <h1 className="block text-white text-[1.5vw] mt-[3vh] -mb-[2vh]">Location</h1>
                <div className='flex items-center gap-[3vh]'>
                    <button
                        className="w-[15vw] h-[7vh] mt-[4vh] bg-[#8cb638] flex justify-center self-center items-center rounded-xl text-white text-[1vw] font-semibold hover:underline"
                        onClick={() => {
                            setPlacementMode(!placementMode)
                        }}
                    >
                        {placementMode ? "I'd like to keep scrolling" : "I'm ready to place my point!"}
                    </button>
                    <h1 className="block text-white text-[1vw] mt-[3vh] -mb-[2vh]">Instructions: Find your point on the map. Once ready, click the button to the left to select your location.</h1>
                </div>
                
                
                <div
                    className={`w-full overflow-clip h-[65vh] mt-[5vh] ${placementMode ? "cursor-default" : ""}`}
                >
                    <AddPoints className="h-full" points={points} lat={lat} lon={lon} setLat={setLat} setLon={setLon} invalidForm={invalidForm} placementMode={placementMode} setPlacementMode={setPlacementMode}/>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <p className={`text-xl text-red-600 mt-[3vh] -mb-[3vh] ${invalidForm ? "visible" : "hidden"}`}>Please complete the missing fields.</p>
                    <button
                        className="w-[15vw] h-[7vh] mt-[4vh] bg-[#8cb638] flex justify-center self-center items-center rounded-xl text-white text-[1vw] font-semibold hover:underline"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
            
        </div>
        
        <div className='h-[100vh]'></div>
        </div>
    </div>
  );
}

export default FormPage;

