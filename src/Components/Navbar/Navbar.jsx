import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import icon1 from "../../assets/img/icons8-resume-100.png"
import icon2 from "../../assets/img/skills-icon.svg"
import iconPro from "../../assets/img/projects.png"


const Navbar = () => {
    return (
        <div className=" flex">
            <div className=" fixed z-10 ">
                <ul className="gap-6 font-semibold p-2  rounded-3xl px-6 text-3xl">
                    <li className="hover:font-bold p-3 rounded-xl " >

                        <div className="tooltip tooltip-right" data-tip="About Me">

                            <Link to="/"><FaUserAlt></FaUserAlt></Link>
                        </div>


                    </li>
                    <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right" data-tip="My Skills"><Link> <img src={icon2} alt="" /> </Link> </li> <br />

                    <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right" data-tip="My Projects"><Link> <img src={iconPro} alt="" /> </Link> </li> <br />

                    <li className="hover:font-bold p-3 rounded-xl w-[58px] tooltip tooltip-right" data-tip="Resume"><Link><img src={icon1} alt="" /> </Link> </li>
                    
                </ul>


            </div>


        </div>
    );
};

export default Navbar;