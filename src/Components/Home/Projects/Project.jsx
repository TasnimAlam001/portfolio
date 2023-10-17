import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Project = ({ project }) => {
    const { _id, projectName, titleImg, usedTec } = project;

    useEffect(() => {
        Aos.init({})
    })

    return (
        <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="1000"


        >
            <div className="card card-compact  bg-neutral  text-white shadow-xl shadow-white">
                <h2 className="card-title mx-auto text-center text-3xl font-semibold py-6">{projectName}</h2>
                <figure><img className="w-full" src={titleImg} alt="img" /></figure>
                <div className="card-body ">
                    <p className="italic font-semibold"><span className="font-bold text-2xl">Technologies: </span>{usedTec.join(" | ")}</p>

                    <div className="card-actions justify-end mt-5">
                        <Link to={`/projectDetails/${_id}`}><button className="btn">Details <FaArrowRight></FaArrowRight></button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Project;