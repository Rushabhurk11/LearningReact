import React from 'react';
import { useState } from 'react';

const EventsEx3 = () => {
    let [userInput, setUserInput] = useState(" ");
    return (
        <div>
            <form action="">
                <input 
                    onChange={(e)=>{
                    setUserInput(e.target.value);
                    console.log(userInput);
                    

                }}
                type="text" 
                className='border-[1px]' />
                <button className='bg-slate-600'>Click</button>
            </form>
            <p>{userInput}</p>

            
        </div>
    );
}

export default EventsEx3;



