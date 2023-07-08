import { FaUserAlt } from "react-icons/fa";
import icon1 from "../../assets/img/icons8-resume-100.png"
import icon2 from "../../assets/img/skills-icon.svg"
import iconPro from "../../assets/img/projects.png"
import { Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className=" flex">
            <div className=" fixed z-10 ">
                <ul className="gap-6 font-semibold p-2  rounded-3xl px-6 text-3xl">
                    <li className="hover:font-bold p-3 rounded-xl tooltip tooltip-right" data-tip="About Me">
                            <Link to="aboutMe" spy={true} smooth={true} offset={-50} duration={500}><FaUserAlt></FaUserAlt></Link>
                    </li> <br />
                    <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right" data-tip="My Skills"><Link  to="skills" spy={true} smooth={true} offset={-50} duration={500}> <img src={icon2} alt="" /> </Link> </li> <br />

                    <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right" data-tip="My Projects"><Link to="project" spy={true} smooth={true} offset={50} duration={500}> <img src={iconPro} alt="" /> </Link> </li> <br />

                    <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right" data-tip="Resume"><Link to="https://drive.google.com/file/d/135Wm0NttsHuavqJkoVJadnlUYcs6TChC/view" target="_blank"><img src={icon1} alt="" /> </Link> </li>
                    
                </ul>


            </div>


        </div>
    );
};

export default Navbar;