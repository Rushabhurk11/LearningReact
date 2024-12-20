// 3. Right-Click Trap
// Create a "Right-Click Me" button.
// On a right-click, display an alert that says:
// "Ha! You thought you could outsmart React?"import React from 'react';

const EventT3 = () => {
    const handleRightClick = (e) => {
        alert("Ha! You thought you could outsmart React?")
    }
    return (
        <div>
            <button
            onContextMenu={handleRightClick}
            className="bg-slate-600 px-6 "

            
            >
                Right-Click Me
            </button>
            
        </div>
    );
}

export default EventT3;
