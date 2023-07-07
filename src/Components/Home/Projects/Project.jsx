


const Project = ({ project }) => {
    const { projectName, titleImg, about } = project;

    return (
        <div className="">

            <div className="card card-compact w-[550px] h-[600px] shadow-2xl bg-black text-white">
                <h2 className="card-title mx-auto text-center text-3xl font-semibold py-6">{projectName}</h2>
                <figure><img className="w-full" src={titleImg} alt="img" /></figure>
                <div className="card-body ">

                    <p className="text-2xl">{about}</p>
                    <p className="italic font-semibold"><span className="font-bold text-2xl">Technologies: </span>  React.js, React Router, Tailwind CSS, DaisyUI, NodeJS, ExpressJS,
                        MongoDB</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;