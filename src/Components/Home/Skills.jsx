import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import mongo from '../../assets/mongoDB.png'
// import c from '../../assets/C_Programming_Language.svg.png'


const Skills = () => {
    return (
        <div id="skills" className="">

            <div className="md:w-3/4 mx-auto mt-32 md:p-10">

                <h1 className="font-bold text-5xl text-white pb-20">About My Skills...</h1>
                {/* <p className="py-8">To Work For A Reputable Company Or Client Where I Can Use My Technical Skills To Achieve The Objective And Improve Performance. I want to apply my creativity, skills, and dedication to the organization`s or a client`s development.</p> */}


                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="card w-96 bg-neutral text-neutral-content shadow-xl shadow-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-white mb-10 text-3xl font-bold">Basic Skills</h2>

                            <div className="card-actions grid grid-cols-2 gap-10 text-center justify-end text-white">
                                <div>

                                    <div className="radial-progress bg-black text-primary-content border-4 border-black  text-4xl " style={{ "--value": 80 }}><FaHtml5></FaHtml5></div>
                                    <h2>HTML</h2>
                                </div>

                                <div>
                                    <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 90 }}>
                                        <FaCss3Alt></FaCss3Alt> </div>
                                    <h2>CSS</h2>
                                </div>

                                <div>
                                    <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 70 }}>
                                        <FaJsSquare></FaJsSquare> </div>
                                    <h2>JavaScript</h2>
                                </div>


                                <div>
                                    <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 50 }}>
                                        <FaPython></FaPython> </div>
                                    <h2>Python</h2>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-neutral text-neutral-content shadow-xl shadow-white ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-white mb-10 text-3xl font-bold">MERN Stack Skills</h2>

                            <div className="card-actions grid grid-cols-2 gap-10 text-center justify-end text-white">
                                <div>

                                    <div className="radial-progress bg-black text-primary-content border-4 border-black " style={{ "--value": 75 }}>
                                        <img className="w-1/2 mx-auto" src={mongo} alt="" /> </div>
                                    <h2>MongoDB</h2>
                                </div>


                                <div>

                                    <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 60 }}>
                                        ex </div>
                                    <h2>Express</h2>
                                </div>

                                <div>

                                    <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 75 }}>
                                        <FaReact></FaReact> </div>
                                    <h2>React</h2>
                                </div>


                                <div>

                                    <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 60 }}>
                                        <FaNodeJs></FaNodeJs> </div>
                                    <h2>NodeJs</h2>
                                </div>



                            </div>
                        </div>
                    </div>

                
                  
                </div>


            </div>



        </div>
    );
};

export default Skills;