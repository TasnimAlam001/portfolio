import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="flex justify-center rounded-lg  mt-5">
            <div className=" z-10">
                <ul className="flex gap-4 font-semibold p-2 shadow-2xl rounded-3xl px-6">
                    <li className="hover:font-bold p-3 rounded-xl"><Link> About Me</Link></li>
                    <li className="hover:font-bold p-3 rounded-xl"><Link>Skills</Link> </li>
                    <li className="hover:font-bold p-3 rounded-xl"><Link>Projects</Link> </li>
                    <li className="hover:font-bold p-3 rounded-xl"><Link>Resume</Link> </li>
                </ul>


            </div>


        </div>
    );
};

export default Navbar;