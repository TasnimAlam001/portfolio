import { useEffect, useState } from "react";
import Project from "./Project";


const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div id="project" className=" bg-white opacity-90 mt-32 py-10">
            <h2 className="text-center text-5xl my-16">My Projects</h2>

            
            <div className="w-5/6 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 ">
                {
                    projects.map(p => <Project
                        key={p.id}
                        project={p}

                    ></Project>)
                }

            </div>


        </div>
    );
};

export default MyProjects;