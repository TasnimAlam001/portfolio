import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="flex justify-center  mt-5">
            <div className="fixed z-10">
                <ul className="flex gap-4 bg-yellow-400 font-semibold p-3 rounded-3xl px-6">
                    <li><Link> About Me</Link></li>
                    <li><Link>Skills</Link> </li>
                    <li><Link>Projects</Link> </li>
                    <li><Link>Resume</Link> </li>
                </ul>


            </div>


        </div>
    );
};

export default Navbar;