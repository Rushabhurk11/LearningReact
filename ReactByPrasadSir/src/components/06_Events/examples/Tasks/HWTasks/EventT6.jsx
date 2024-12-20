// 6. Window Resize Monitor
// Display a live banner that says:
// "Window size: Width X Height".
// Update the banner dynamically using the onResize event.

// ================================================================================

// import React from 'react'

// const EventT6 = () => {
//   return (
//     <div >
//         <h1
//             className='top-0 left-0 z-[1] bg-black text-white p-10 font-semibold fixed'
            

//         >Window Resize Monitor</h1>
//         <p 
//             className='top-0 left-0 z-[1] text-white p-10'
//         >
//             {window.innerWidth} X {window.innerHeight}

//         </p>


//     </div>
//   )
// }

// export default EventT6

// ==========================================================================
// Using useEffect Hook


// import React, { useState, useEffect } from "react";

// function WindowResizeMonitor() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="px-6 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg">
//         Window size: {windowSize.width} X {windowSize.height}
//       </div>
//     </div>
//   );
// }

// export default WindowResizeMonitor;



// =========================================================================


import React, { useState } from "react";

const WindowResizeMonitor=()=> {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  
  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="px-6 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg">
        Window size: {windowSize.width} X {windowSize.height}
      </div>
    </div>
  );
}

export default WindowResizeMonitor;








  
