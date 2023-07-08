import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
    return (
        <div className="flex">
            <div className=" md:fixed z-10 ">
                <ul className="gap-3 md:gap-6 font-semibold p-2 rounded-3xl px-8 text-4xl flex md:flex-col items-center mx-auto">
                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Linkedin">
                            <Link to="https://www.linkedin.com/in/tasnimalam001/" target="_blank"><FaLinkedin></FaLinkedin></Link>
                      
                    </li> 
                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Github"><Link to="https://github.com/TasnimAlam001" target="_blank"> <FaGithubSquare></FaGithubSquare> </Link> </li> 

                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="WhatsApp"><Link to="https://wa.me/8801762786760" target="_blank"> <FaWhatsappSquare></FaWhatsappSquare> </Link> </li> 

                    

                    <li className=" p-3 rounded-xl tooltip tooltip-left" data-tip="Facebook"><Link to="https://www.facebook.com/prince.ta.94/" target="_blank"> <FaFacebookSquare></FaFacebookSquare> </Link> </li>

                </ul>


            </div>


        </div>
    );
};

export default Social;