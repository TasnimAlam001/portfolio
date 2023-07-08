import { Link } from "react-router-dom";


const Project = ({ project }) => {
    const { projectName, titleImg, about, description, liveLink, ClintCode, ServerCode } = project;





    return (
        <div className="">


            <div className="card card-compact md:w-[550px]  shadow-2xl bg-black text-white">
                <h2 className="card-title mx-auto text-center text-3xl font-semibold py-6">{projectName}</h2>
                <figure><img className="w-full" src={titleImg} alt="img" /></figure>
                <div className="card-body ">

                    <p className="text-2xl">{about}</p>
                    <p className="italic font-semibold"><span className="font-bold text-2xl">Technologies: </span>  React.js, React Router, Tailwind CSS, DaisyUI, NodeJS, ExpressJS,
                        MongoDB</p>
                    <div>
                        <span className="text-2xl font-bold ">Description</span>
                        {
                            description.map(data => <>
                                <ol className="list-disc ps-3">
                                    <li>{data}</li>
                                </ol>
                            </>)
                        }

                    </div>


                    <div className="card-actions justify-center pt-4">
                        <Link to={liveLink} target="_blank"><button className="btn btn-outline text-white">Live Site</button> </Link>
                        <Link to={ClintCode} target="_blank"><button className="btn btn-outline text-white">Clint Site Code</button> </Link>
                        <Link to={ServerCode} target="_blank"><button className="btn btn-outline text-white">Server Site Code</button> </Link>
                        
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Project;