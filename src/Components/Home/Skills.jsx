import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import mongo from '../../assets/mongoDB.png'
import c from '../../assets/C_Programming_Language.svg.png'


const Skills = () => {
    return (
        <div className="bg-white opacity-90">

            <div  className="w-3/4 mx-auto mt-32 p-10">

                <h1 className="font-bold text-5xl">About My Skills</h1>
                <p className="py-8">To Work For A Reputable Company Or Client Where I Can Use My Technical Skills To Achieve The Objective And Improve Performance. I want to apply my creativity, skills, and dedication to the organization`s or a client`s development.</p>


                <div className="">

                    <div>

                        <div className="grid grid-cols-3 gap-3 text-center">

                            <div>

                                <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl " style={{ "--value": 80 }}><FaHtml5></FaHtml5></div>
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

                                <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 75 }}>
                                    <FaReact></FaReact> </div>
                                <h2>React</h2>
                            </div>

                            <div>

                                <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 60 }}>
                                    <FaNodeJs></FaNodeJs> </div>
                                <h2>NodeJs</h2>
                            </div>



                            <div>

                                <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 60 }}>
                                    ex </div>
                                <h2>Express</h2>
                            </div>

                            <div>

                                <div className="radial-progress bg-black text-primary-content border-4 border-black " style={{ "--value": 75 }}>
                                    <img className="w-1/2 mx-auto" src={mongo} alt="" /> </div>
                                <h2>MongoDB</h2>
                            </div>




                            <div>


                                <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": 50 }}>
                                    <FaPython></FaPython> </div>
                                <h2>Python</h2>
                            </div>

                            <div>

                                <div className="radial-progress bg-black text-primary-content border-4 border-black " style={{ "--value": 45 }}>
                                    <img className="w-1/2 mx-auto" src={c} alt="" /> </div>
                                <h2>C Programming Language</h2>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>


            </div>



        </div>
    );
};

export default Skills;