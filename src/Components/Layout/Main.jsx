import AboutMe from "../Home/AboutMe";
import MyProjects from "../Home/Projects/MyProjects";
import Skills from "../Home/Skills";
import Navbar from "../Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            
        </div>
    );
};

export default Main;