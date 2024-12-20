// 4. Mouse Move Tracker
// Build a "Spy Glass" component.
// Track the mouse's position (onMouseMove) and display its X, Y coordinates live.
// Bonus: Add a "You’re being watched" banner for fun.


import React, { useState } from 'react';

const SpyGlass = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="h-screen bg-gray-100 flex flex-col justify-center items-center relative"
      onMouseMove={handleMouseMove}
    >
      {/* Banner */}
      <div className="absolute top-4 text-red-500 text-lg font-bold animate-pulse">
        You’re being watched 👀
      </div>

      {/* Mouse Coordinates */}
      <div className="text-2xl font-mono bg-white p-4 rounded shadow">
        X: {mousePosition.x}, Y: {mousePosition.y}
      </div>
    </div>
  );
};

export default SpyGlass;
