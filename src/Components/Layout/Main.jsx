import Footer from "../Footer/Footer";
import AboutMe from "../Home/AboutMe/AboutMe";
import Comment from "../Home/Comment/Comment";
import Education from "../Home/Education/Education";
import MyProjects from "../Home/Projects/MyProjects";
import Skills from "../Home/Skills/Skills";

import "./Main.css"



const Main = () => {
    return (
        <div className="myPhoto bg-black bg-fixed pt-32">
            
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Education></Education>
            <Comment></Comment>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;