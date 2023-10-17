import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Social from "../../Navbar/Social";
import myImg from "/Tasnim_Alam.jpg"

import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import { TypeAnimation } from "react-type-animation";


const AboutMe = () => {
    useEffect(() => {
        Aos.init({})
    })

    const handleDownload = () => {
        // Logic to download the PDF resume goes here
        // Replace the URL with the actual URL of your PDF file
        const resumeUrl = 'Resume_Of_Tasnim_Alam.pdf';
        window.open(resumeUrl, '_blank');
    };


    return (

        <div id="aboutMe" >
            <div className="grid grid-cols-1 lg:grid-cols-4 h-full  ">
                <div className="mb-8">
                    <Navbar></Navbar>
                </div>

                <div className='w-5/6 md:w-3/4 flex items-center justify-center md:col-span-2 ml-4 p-4 border border-gray-800 rounded shadow-black relative'
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                >
                    <div className="">

                        <img
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className="w-[80px] lg:w-[100px] absolute top-0 right-0 -mt-2 -mr-2 rounded" src={myImg} alt="" />
                        <div id="about" className="pt-10 px-4 md:px-10 text-white">
                            <h2><TypeAnimation
                                    sequence={[
                                        'Hello',
                                        500,
                                        
                                        'Hello, I Am',
                                        500,
                                        'Hello,',
                                        500,
                                        'Hello',
                                        500,
                                       
                                    ]}
                                    
                                    repeat={Infinity}
                                /> <br /> <span className='font-bold text-2xl md:text-3xl'>
                                Tasnim Alam


                                </span> </h2>
                            <h4 className='text-2xl font-semibold py-3'>WEB DEVELOPER</h4>
                            <p>I am a Web Developer. My expertise includes  HTML, CSS, React.js, Node.js, Express.js and MongoDB. I excel in Adaptability, Teamwork, and Team Leadership and have excellent Communication abilities.</p>
                            <div className="mt-5  space-y-2">

                                <p className=" flex "><span className="text-2xl pr-3"><FaPhoneAlt></FaPhoneAlt> </span> <span className="">+880 1762786760</span> </p>
                                <p className=" flex "><span className="text-2xl pr-3"><FaEnvelope></FaEnvelope> </span> <a href="mailto:tasnimalma.001@gmail.com">tasnimalma.001@gmail.com</a> </p>
                                <p className=" flex "><span className="text-2xl pr-3"><FaHome></FaHome></span> Dhaka, Bangladesh</p>
                            </div>


                        </div>


                        <button onClick={handleDownload} className="btn btn-outline mt-8 w-full">Download Resume</button>
                    </div>


                </div>
                <div className="md:ms-24 lg:ms-60">

                    <Social></Social>
                </div>
            </div>





        </div >
    );
};

export default AboutMe;