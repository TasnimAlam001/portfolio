import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Project = ({ project }) => {
    const { _id, projectName, titleImg, usedTec } = project;

    return (
        <div>
            <div className="card card-compact  bg-neutral  text-white shadow-xl shadow-white">
                <h2 className="card-title mx-auto text-center text-3xl font-semibold py-6">{projectName}</h2>
                <figure><img className="w-full" src={titleImg} alt="img" /></figure>
                <div className="card-body ">
                    <p className="italic font-semibold"><span className="font-bold text-2xl">Technologies: </span>{usedTec.join(" | ")}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/projectDetails/${_id}`}><button className="btn">Details <FaArrowRight></FaArrowRight></button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Project;