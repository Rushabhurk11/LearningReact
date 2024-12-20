import EventsEx1 from "./examples/EventsEx1"
import EventsEx2 from "./examples/EventsEx2"
import EventsEx3 from "./examples/EventsEx3"
import EventsEx4 from "./examples/EventsEx4"
import EventTask1 from "./examples/Tasks/EventTask1"
import EventTask2 from "./examples/Tasks/EventTask2"
import EventT1 from "./examples/Tasks/HWTasks/EventT1"
import EventT2 from "./examples/Tasks/HWTasks/EventT2"
import EventT3 from "./examples/Tasks/HWTasks/EventT3"
import SpyGlass from "./examples/Tasks/HWTasks/EventT4"
import EventT5 from "./examples/Tasks/HWTasks/EventT5"
import WindowResizeMonitor from "./examples/Tasks/HWTasks/EventT6"
import EventT6 from "./examples/Tasks/HWTasks/EventT6"
import FollowTheDot from "./examples/Tasks/HWTasks/EventT7"

const EventsIntro=()=>{
    return(
        <div>
            {/* ============= Examples ============ */}
            {/* <EventsEx1/> */}
            {/* <EventsEx2/> */}
            {/* <EventsEx3/> */}
            <EventsEx4/>

            {/* ========= Class Tasks =========== */}
            {/* <EventTask1/> */}
            {/* <EventTask2/> */}

            {/* ============== Tasks ============ */}
            {/* <EventT1/> */}
            {/* <EventT2/> */}
            {/* <EventT3/> */}
            {/* <SpyGlass/> */}
            {/* <EventT5/> */}
            {/* <EventT6/> */}
            {/* <WindowResizeMonitor/> */}
            {/* <FollowTheDot/> */}
        </div>
    )
}
export default EventsIntro