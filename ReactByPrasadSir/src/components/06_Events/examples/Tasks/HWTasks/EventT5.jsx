// 5. Button That Runs Away
// Create a button that moves to a random position when hovered over (onMouseEnter).
// Bonus: Add a label: "Catch me if you can!"

import React from 'react'

const EventT5 = () => {
    let Handle=() => {
        const x = Math.floor(Math.random() * 1080) + 100
        const y = Math.floor(Math.random() * 500) + 100
        document.querySelector('button').style.left = `${x}px`
        document.querySelector('button').style.top = `${y}px`
        }
    
  return (
    <div className='bg-slate-400'>
        <button 
        className='bg-indigo-800 border-4 border-b-indigo-950  px-4 absolute'
        onMouseEnter={Handle}
            >
                Catch me if you can!
            </button>

    </div>
  )
}
export default EventT5
