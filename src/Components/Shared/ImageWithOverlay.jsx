import { useState } from 'react';

const ImageWithOverlay = ({ photoUrl, link , title}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative group rounded-xl h-64 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={photoUrl}
          alt="Image"
          className="w-full h-full transition-transform transform group-hover:scale-105"
        />
        
      </a>
      

      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg">
            {title}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
