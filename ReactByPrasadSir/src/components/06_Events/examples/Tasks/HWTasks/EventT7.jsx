// 7. Follow the Dot
// Create a small dot that follows the mouse pointer (onMouseMove).
// Bonus: Add a sarcastic message, like: “Wow, such skills! The dot is impressed.”

import React, { useState } from "react";

function FollowTheDot() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setDotPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="h-screen bg-gray-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dot */}
      <div
        className="absolute bg-red-500 rounded-full w-4 h-4 "
        style={{
          top: dotPosition.y,
          left: dotPosition.x,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Message */}
      <div className="absolute bottom-10 left-1/3 right-1/3 text-center">
        <p className="text-gray-700 text-lg font-semibold">
          Wow, such skills! The dot is impressed.
        </p>
      </div>
    </div>
  );
}

export default FollowTheDot;
