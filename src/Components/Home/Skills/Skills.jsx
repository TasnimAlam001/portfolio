
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import mongo from '../../../assets/mongoDB.png';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation';
import useProjects from '../../../hooks/useProjects';



const Skills = () => {
  useEffect(() => {
    Aos.init({})
  });

  const [projects] = useProjects();

  const html = projects.filter(project => project.usedTec.includes("HTML"))
  const react = projects.filter(project => project.usedTec.includes("React"))
  const express = projects.filter(project => project.usedTec.includes("ExpressJs"))
  const mongoDB = projects.filter(project => project.usedTec.includes("MongoDB"))

  const skillsData = [
    { title: 'HTML', icon: <FaHtml5 />, value: 80 , projectCount: html.length},
    { title: 'CSS', icon: <FaCss3Alt />, value: 80 , projectCount: projects.length},
    { title: 'MongoDB', icon: <img className="w-1/2 mx-auto" src={mongo} alt="" />, value: 75, projectCount: mongoDB.length},
    { title: 'Express', icon: 'ex', value: 60 , projectCount: express.length},
    { title: 'React', icon: <FaReact />, value: 75, projectCount: react.length},
    { title: 'NodeJs', icon: <FaNodeJs />, value: 60 , projectCount: express.length},
    { title: 'JavaScript', icon: <FaJsSquare />, value: 60 , projectCount: react.length},
    { title: 'Python', icon: <FaPython />, value: 50, projectCount: 0},
  ];

  return (
    <div id='skills' className="p-6 mt-10 lg:mt-20 lg:w-5/6 mx-auto">
      <h2 className="text-center  mb-10  text-5xl my-16 divider text-white">My Skills</h2>
      <div className='lg:w-2/3 mx-auto'>

        <div className='pb-4'>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              'My expertise includes HTML',
              1000,
              'My expertise includes CSS',
              1000,
              'My expertise includes Tailwind',
              1000,
              'My expertise includes React',
              1000,
              'My expertise includes Node.Js',
              1000,
              'My expertise includes Express.Js',
              1000,
              'My expertise includes MongoDB',
              1000,
              'My expertise includes Firebase',
              1000,
              'My expertise includes JWT',
              1000,
              'My expertise includes User Friendly Design',
              1000,
              'My expertise includes Time Management',
              500,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
          />
        </div>
        <div className='grid grid-cols-3 gap-4'>

          {skillsData.map((skill, index) => (
            <div key={index} >
              <div
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"

                className='hover:font-bold p-3 rounded-xl tooltip tooltip-top cursor-pointer text-white' data-tip={
                  `Skills: ${skill.title}, Progress: ${skill.value}%, Projects: ${skill.projectCount}`
                }>

                <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl " style={{ "--value": skill.value }}>{skill.icon}</div>
                <h2>{skill.title}</h2>
              </div>

            </div>



            // <div key={index} className="space-y-2">
            //   <div className="flex justify-between items-center">
            //     <span className="text-lg">{skill.title}</span>
            //     <span className="text-gray-500">{skill.value}%</span>
            //   </div>
            //   <div className="w-full bg-gray-200 h-2 rounded-full">
            //     <div
            //       className={`h-2 rounded-full w-${skill.value}`}
            //       style={{ width: `${skill.value}%` }}
            //     ></div>
            //   </div>
            //   <div className="flex justify-between items-center">
            //     {skill.icon}
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
