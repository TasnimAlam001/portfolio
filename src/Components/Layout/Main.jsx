import AboutMe from "../Home/AboutMe/AboutMe";
import MyProjects from "../Home/Projects/MyProjects";
import Skills from "../Home/Skills";
import "./Main.css"



const Main = () => {
    return (
        <div className="myPhoto bg-fixed pt-40">
            
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            
        </div>
    );
};

export default Main;