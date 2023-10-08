import { useEffect, useState } from "react";


const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjects(data);
                setLoading(false);
            })
    }, [])
    return [projects,loading];
};

export default useProjects;