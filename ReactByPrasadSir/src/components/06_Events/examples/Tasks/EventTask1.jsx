// create button named as think before you click
// after click button get disable
// and show message under the button 


const EventTask1=()=>{
    let handleClick=(e)=>{
        console.log(e);
        e.target.disabled=true
        e.target.style.background="red"
        e.target.textContent="Warning..!! Now Button is Disabled"
        e.target.style.color="white"

        
    }
    return(
        <div className="flex justify-center items-center h-[100vh]">
            
            <button 
        
            onClick={handleClick}
                className="bg-black text-white px-5">
                    Think Before You Click...!!
                </button>
        </div>
    )
}
export default EventTask1;