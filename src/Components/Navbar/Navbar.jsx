import {  FaUserAlt } from "react-icons/fa";
import icon1 from "../../assets/img/download.png"
import icon2 from "../../assets/img/skills.jpg"
import iconPro from "../../assets/img/projects.png"
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div >


                <div className=" flex">
                    <div className=" md:fixed z-10 ">
                        <ul className="gap-3 md:gap-6 font-semibold p-2 rounded-3xl px-8 text-4xl flex md:flex-col items-center mx-auto">
                            <li className="hover:font-bold p-3 rounded-xl tooltip tooltip-right cursor-pointer text-white" data-tip="About Me">
                                <Link to="aboutMe" spy={true} smooth={true} offset={-50} duration={500}><FaUserAlt></FaUserAlt></Link>
                            </li> 

                            <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right cursor-pointer text-white" data-tip="My Skills"><Link to="skills" spy={true} smooth={true} offset={-50} duration={500}> <img src={icon2} alt="" /> </Link> </li> 
                            

                            <li className="hover:font-bold text-white p-3 rounded-xl w-[58px] tooltip tooltip-right cursor-pointer" data-tip="My Projects"><Link to="project" spy={true} smooth={true} offset={50} duration={500}> <img src={iconPro} alt="" /> </Link> </li> 

                            <li className="hover:font-bold p-3 text-white rounded-xl w-[58px] tooltip tooltip-right cursor-pointer" data-tip="Resume"><a href="https://drive.google.com/file/d/135Wm0NttsHuavqJkoVJadnlUYcs6TChC/view" target="_blank" rel="noreferrer"><img src={icon1} alt="" /> </a> </li>

                        </ul>


                    </div>


                </div>

                
            
        </div>
    );
};

export default Navbar;