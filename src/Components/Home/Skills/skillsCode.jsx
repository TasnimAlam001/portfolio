// import { useState, useEffect } from 'react';
// import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
// import mongo from '../../assets/mongoDB.png';

// const Skills = () => {
//   const childDivs = [
//     { title: 'HTML', icon: <FaHtml5 />, value: 80 },
//     { title: 'CSS', icon: <FaCss3Alt />, value: 90 },
//     { title: 'JavaScript', icon: <FaJsSquare />, value: 70 },
//     { title: 'Python', icon: <FaPython />, value: 50 },
//     { title: 'MongoDB', icon: <img className="w-1/2 mx-auto" src={mongo} alt="" />, value: 75 },
//     { title: 'Express', icon: 'ex', value: 60 },
//     { title: 'React', icon: <FaReact />, value: 75 },
//     { title: 'NodeJs', icon: <FaNodeJs />, value: 60 },
//   ];

//   const [positions, setPositions] = useState([]);

//   const getRandomPosition = (positions) => {
//     const maxWidth = 80;
//     const maxHeight = 100;
//     let left, top;
//     let isOverlapping = false;

//     do {
//       left = Math.random() * (maxWidth - 20); // Adjust 20 for padding
//       top = Math.random() * (maxHeight - 20); // Adjust 20 for padding

//       isOverlapping = positions.some((position) => {
//         const distance = Math.sqrt(Math.pow(position.left - left, 2) + Math.pow(position.top - top, 2));
//         return distance < 20; // Adjust this value for minimum spacing
//       });
//     } while (isOverlapping);

//     return { left, top };
//   };

//   useEffect(() => {
//     const newPositions = [];
//     for (let i = 0; i < childDivs.length; i++) {
//       newPositions.push(getRandomPosition(newPositions));
//     }
//     setPositions(newPositions);
//   }, []);

//   return (
//     <div id="skills" className="text-white">
//       <div className="md:w-3/4 mx-auto mt-32 md:p-10">
//         <h1 className="font-bold text-5xl text-white pb-20">About My Skills...</h1>
//         <div className="parent w-2/3 mx-auto relative" style={{ minHeight: '500px' }}>
//           {childDivs.map((child, index) => (
//             <div
//               key={index}
//               className="child absolute"
//               style={{
//                 left: `${positions[index]?.left}%`,
//                 top: `${positions[index]?.top}%`,
//               }}
//             >
//               <div className="radial-progress bg-black text-primary-content border-4 border-black text-4xl" style={{ "--value": child.value }}>
//                 {child.icon}
//               </div>
//               <h2>{child.title}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
