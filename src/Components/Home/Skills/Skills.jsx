
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import mongo from '../../../assets/mongoDB.png';

const skillsData = [
  { title: 'HTML', icon: <FaHtml5 />, value: 80 },
  { title: 'CSS', icon: <FaCss3Alt />, value: 90 },
  { title: 'JavaScript', icon: <FaJsSquare />, value: 70 },
  { title: 'Python', icon: <FaPython />, value: 50 },
  { title: 'MongoDB', icon: <img className="w-1/2 mx-auto" src={mongo} alt="" />, value: 75 },
  { title: 'Express', icon: 'ex', value: 60 },
  { title: 'React', icon: <FaReact />, value: 75 },
  { title: 'NodeJs', icon: <FaNodeJs />, value: 60 },
];

const Skills = () => {
  return (
    <div className="p-6 mt-32 w-5/6 mx-auto">
      <h2 className="text-center  mb-32  text-5xl my-16 divider text-white">My Skills</h2>
      <div className='w-2/3 mx-auto'>

        <div className='grid grid-cols-3 gap-8'>

          {skillsData.map((skill, index) => (
            <div key={index} >
              <div className='hover:font-bold p-3 rounded-xl tooltip tooltip-top cursor-pointer text-white' data-tip={
                `Skills: ${skill.title}, Progress: ${skill.value}%, Projects: 3`
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
