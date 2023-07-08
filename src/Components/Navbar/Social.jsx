import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
    return (
        <div className="flex">
            <div className=" fixed z-10 ">
                <ul className="gap-6 font-semibold p-2  rounded-3xl px-6 text-4xl">
                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Linkedin">
                            <Link to="https://www.linkedin.com/in/tasnimalam001/" target="_blank"><FaLinkedin></FaLinkedin></Link>
                      
                    </li> <br />
                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Github"><Link to="https://github.com/TasnimAlam001" target="_blank"> <FaGithubSquare></FaGithubSquare> </Link> </li> <br />

                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="WhatsApp"><Link to="https://wa.me/8801762786760" target="_blank"> <FaWhatsappSquare></FaWhatsappSquare> </Link> </li> <br />

                    

                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Facebook"><Link to="https://www.facebook.com/prince.ta.94/" target="_blank"> <FaFacebookSquare></FaFacebookSquare> </Link> </li><br />

                </ul>


            </div>


        </div>
    );
};

export default Social;