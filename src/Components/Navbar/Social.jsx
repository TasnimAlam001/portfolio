import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
    return (
        <div className=" flex">
            <div className=" fixed z-10 ">
                <ul className="gap-6 font-semibold p-2  rounded-3xl px-6 text-3xl">
                    <li className=" p-3 rounded-xl " >

                        <div className="tooltip tooltip-left" data-tip="Linkedin">

                            <Link to="/"><FaLinkedin></FaLinkedin></Link>
                        </div>

                    </li>
                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Github"><Link> <FaGithubSquare></FaGithubSquare> </Link> </li> <br />

                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="WhatsApp"><Link> <FaWhatsappSquare></FaWhatsappSquare> </Link> </li> <br />

                    

                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Facebook"><Link> <FaFacebookSquare></FaFacebookSquare> </Link> </li><br />

                </ul>


            </div>


        </div>
    );
};

export default Social;