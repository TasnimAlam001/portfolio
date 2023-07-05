import  { useEffect, useRef } from 'react';

const CircleProgressBar = ({ percentage }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const radius = progressBarRef.current.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    progressBarRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    progressBarRef.current.style.strokeDashoffset = offset;
  }, [percentage]);

  return (
    <svg className="w-20 h-20">
      <circle
        className="text-gray-300 dark:text-gray-700"
        cx="50%"
        cy="50%"
        r="45%"
        stroke="currentColor"
        strokeWidth="10"
        fill="transparent"
      />
      <circle
        ref={progressBarRef}
        className="text-blue-500"
        cx="50%"
        cy="50%"
        r="45%"
        stroke="currentColor"
        strokeWidth="10"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CircleProgressBar;
