import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 200, y: 220 });

  const handleHover = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const boxWidth = 192; // Width of the box (w-48 -> 48 * 4 px)
    const boxHeight = 48; // Height of the box (h-12 -> 12 * 4 px)

    // Ensure box stays within viewport boundaries
    const newX = Math.random() * (viewportWidth - boxWidth);
    const newY = Math.random() * (viewportHeight - boxHeight);

    setPosition({ x: newY, y: newX });
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center overflow-hidden">
      <div
        className="bg-gradient-to-r from-pink-500 to-red-500 h-12 w-48 absolute flex justify-center items-center text-white font-bold rounded-full shadow-xl cursor-pointer transform hover:scale-110 transition-all duration-500 ease-in-out animate-pulse sm:h-10 sm:w-40 md:h-12 md:w-48 lg:h-14 lg:w-56"
        style={{ top: `${position.x}px`, left: `${position.y}px` }}
        onMouseEnter={handleHover}
      >
        <span className="text-lg md:text-xl lg:text-2xl font-cursive">Click Me</span>
      </div>
    </div>
  );
}

export default App;
