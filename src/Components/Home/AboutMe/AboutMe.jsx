import Navbar from "../../Navbar/Navbar";
import Social from "../../Navbar/Social";


const AboutMe = () => {
    return (


        <div className=' '>

            <div className="grid grid-cols-4 h-full">
                <div className="">

                    <Navbar></Navbar>
                </div>

                <div className='w-3/4 flex items-center justify-center m-auto col-span-2 p-10 rounded-xl bg-white shadow-2xl opacity-80'>
                    <div>
                        <h2>HELLO, I AM <br /> <span className='font-bold text-6xl'>Tasnim Alam</span> </h2>
                        <h4 className='text-2xl font-semibold py-3'>WEB DEVELOPER</h4>
                        <p>I am a Web Developer. My expertise includes  JavaScript, React.js, Node.js, HTML and CSS. I excel in adaptability, teamwork, and team leadership and have excellent communication abilities.</p>
                    </div>

                </div>
                <div className="ml-44">

                    <Social></Social>
                </div>
            </div>





        </div>
    );
};

export default AboutMe;