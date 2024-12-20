const EventsEx2=()=>{
    // let demo=(e)=>{
    //     console.log("Hello");
        

    // }


    return(
        <div>
            {/* <button onClick={demo} */}

            <button onClick={(e)=>{
                console.log("Button clicked");
                console.log(e);
                e.target.textContent="You clicked Button....!!!"
                e.target.style.backgroundColor="pink"
            }}
            className="bg-slate-500 px-4 rounded-md text-pretty">Click Me!!!</button>
           
        </div>
    )
}
export default EventsEx2