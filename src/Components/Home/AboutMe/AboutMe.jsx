import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Social from "../../Navbar/Social";


const AboutMe = () => {

    const handleDownload = () => {
        // Logic to download the PDF resume goes here
        // Replace the URL with the actual URL of your PDF file
        const resumeUrl = 'Resume_Of_Tasnim_Alam.pdf';
        window.open(resumeUrl, '_blank');
    };


    return (

        <div id="aboutMe" >

            <div className="grid grid-cols-1 lg:grid-cols-4 h-full  ">
                <div className="">

                    <Navbar></Navbar>
                </div>

                <div className='w-5/6 md:w-3/4 flex items-center justify-center md:col-span-2'>
                    <div >
                        <div className="pt-10 px-4 md:px-10 text-white">
                            <h2>HELLO, I AM <br /> <span className='font-bold text-3xl md:text-6xl'>Tasnim Alam</span> </h2>
                            <h4 className='text-2xl font-semibold py-3'>WEB DEVELOPER</h4>
                            <p>I am a Web Developer. My expertise includes  JavaScript, React.js, Node.js, HTML and CSS. I excel in adaptability, teamwork, and team leadership and have excellent communication abilities.</p>
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





        </div>
    );
};

export default AboutMe;