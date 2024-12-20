const EventsEx1=()=>{
    let demo=(name)=>{
            console.log("Hello",name);
            
    
         }
    return(
        // <div className="bg-slate-500 text-cyan-300 w-56">
            
        //     EventsEx1
        // </div>
        <div>
            
           <button 
           onClick={()=>demo("Prasad")} 
           className="bg-slate-300 px-4">
            
            Click me</button>
        </div>
    )
}
export default EventsEx1