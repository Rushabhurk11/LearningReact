
// import React from "react";

// const EventTask2=()=>{
//     let handleMouseEnter=(e)=>{
//         e.target.style.background="rgb(192,162,192)"

//     }
//     let handleMouseLeave=(e)=>{
//         e.target.style.background="rgb(132,82,132)"

//     }

//     return(
//        <div>
//         <div 
//         onMouseEnter={handleMouseEnter} 
//         onMouseLeave={handleMouseLeave}
//         id="EventTask2"></div>
       

//        </div>
//     )
// }
// export default EventTask2;


import React from "react";

const EventTask2 = () => {
    const handleMouseEnter = (e) => {
        console.log(e);
        
        e.target.style.background = "rgb(192,162,192)";
        // e.target.style.borderRadius="50px"
        
    };

    const handleMouseLeave = (e) => {
        setTimeout(() => {
            e.target.style.background = "rgb(132,82,132)";
        }, 100);
        
        
        ;
    };


    // Define how many times you want to repeat the div
    const numberOfDivs = 13000; // Change this number to repeat more or fewer times

    return (
        <div className="flex flex-wrap bg-[rgb(132,82,132)]">
            {Array.from({ length: numberOfDivs }, (_, index) => (
                <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    id='EventTask2' // Unique ID for each div
                    
                    
                ></div>
            ))}
        </div>
    );
};

export default EventTask2;