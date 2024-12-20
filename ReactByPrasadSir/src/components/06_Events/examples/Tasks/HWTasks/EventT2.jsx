// 2. Hover to Grow
// Create a "Magic Plant" component.
// When a user hovers over the plant image, it grows by increasing its size.
// On hover out, it shrinks back.



// import React from 'react';

// const EventT2 = () => {
//     return (
//         <div>
//             <img src="plum.png" alt="plant" />
//         </div>
//     );
// }

// export default EventT2;
import React, { useState } from 'react';
import plumImage from './assets/plum.png'; // Import the image correctly

const EventT2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex justify-center items-center w-96 h-96 border-2 border-gray-300 rounded-lg bg-gray-50 overflow-hidden"
      onMouseEnter={() => 
        setIsHovered(true)

      }
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={plumImage}
        alt="Magic Plant"
        className={`w-36 h-36 transform transition-transform duration-300 ${
          isHovered ? 'scale-150' : ''
        }`}
      />
    </div>
  );
};

export default EventT2;


