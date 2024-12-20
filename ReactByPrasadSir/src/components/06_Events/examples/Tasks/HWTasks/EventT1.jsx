// 1. Double Click to Reveal Secret
// Create a component that hides a secret message.
// On a double-click event (onDoubleClick), reveal the message: “Shh! I’m a React developer undercover!”

const EventT1=()=>{
    let handelDclick=(e)=>{
        e.target.textContent="Shh! I’m a React developer undercover!"
            
            
    
         }
    return(
       <div>
            
           <button 
           onDoubleClick={handelDclick}
           className="bg-slate-300 px-4">
            
            Double Click me</button>
        </div>
    )
}
export default EventT1