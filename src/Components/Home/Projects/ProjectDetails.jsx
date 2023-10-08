import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useProjects from "../../../hooks/useProjects";
import { FaArrowLeft } from "react-icons/fa";
import ImageWithOverlay from "../../Shared/ImageWithOverlay";




const ProjectDetails = () => {

    const { id } = useParams();
    const [projects, loading] = useProjects();
    if (loading) {
        return <p>Loading...</p>
    }

    //Find project with id
    const project = projects.find(data => data._id == id);

    const { titleImg, projectName, img, about, description, liveLink, ClintCode, usedTec, ServerCode, ClintCodeImg, ServerCodeImg } = project;



    //Go Back to Previous Page...
    const goBack = () => {
        window.history.back();
    };



    const specialtyColors = [
        'bg-blue-500',
        'bg-green-500',
        'bg-red-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-teal-500',
        'bg-orange-500',
        'bg-cyan-500',
        'bg-amber-500',
        'bg-lime-500',
        'bg-emerald-500',
        'bg-gray-500',
        'bg-fuchsia-500',
        'bg-rose-500',
        'bg-violet-500',
        'bg-sky-500',
        'bg-magenta-500',
    ];

    const handleFromSubmit =event =>{
        event.preventDefault();

    }


    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div>
                <button onClick={goBack} className="btn fixed btn-active btn-accent text-white m-2 btn-sm font-bold"><FaArrowLeft></FaArrowLeft> Go Back</button>
            </div>

            {/* Header */}
            <header className="bg-gray-800 py-7 text-white text-center">
                <h1 className="text-3xl font-bold">{projectName}</h1>
                <p>{about}</p>
            </header>


            {/* Main Content */}
            <main className="container mx-auto mt-8 p-4">
                <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Images</h2>
                    <div className="my-8 md:w-2/3 mx-auto">
                        <Carousel autoPlay={true} interval={1500} infiniteLoop>
                            {
                                img.map(i => <div><img src={i} /></div>)
                            }

                        </Carousel>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>

                    <ul className="list-disc ml-6">
                        {description.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>

                </div>

                <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                    <ul className="list-disc ml-6">
                        {/* {usedTec.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))} */}
                        {usedTec.map((specialty, index) => (
                            <span
                                key={index}
                                className={`${specialtyColors[index % specialtyColors.length]
                                    } text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                            >
                                {specialty}
                            </span>
                        ))}
                    </ul>
                </div>



                <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Links</h2>
                    <div className="flex w-5/6 mx-auto gap-4">
                        <ImageWithOverlay photoUrl={titleImg} link={liveLink} title="Live Site"></ImageWithOverlay>

                        <ImageWithOverlay photoUrl={ClintCodeImg} link={ClintCode} title="Client Side Code"></ImageWithOverlay>

                        <ImageWithOverlay photoUrl={ServerCodeImg} link={ServerCode} title="Server Side Code"></ImageWithOverlay>

                    </div>
                </div>

                {/* Leave a Comment Form */}
                <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-4">
                    <h2 className="text-xl font-semibold mb-4">Leave a Valuable Suggestion !</h2>
                    <form className="w-1/2 ml-5" onSubmit={handleFromSubmit}>
                        <div className=" ">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-white font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"


                                    className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="comment" className="text-white font-medium">Comment</label>
                                <textarea
                                    id="comment"
                                    name="comment"

                                    className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg font-medium"
                        >
                            Comment
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetails;