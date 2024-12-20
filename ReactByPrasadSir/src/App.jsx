import './App.css'
import Layout00 from './components/00_tasks/Layout00.jsx'
import Layout01 from './components/00_tasks/Layout01.jsx'
import Layout02 from './components/00_tasks/Layout02.jsx'
import JsxIntro from './components/01_jsxIntro/JsxIntro.jsx'
import ClassBasedCompIntro from './components/02_typesOfComponents/02_classBasedComp/ClassBasedCompIntro.jsx'
import HooksIntro from './components/03_hooks/HooksIntro.jsx'
import PropsEx1 from './components/04_props/examples/PropsEx1.jsx'
import PropsIntro from './components/04_props/PropsIntro.jsx'
import ConditionalRenderingIntro from './components/05_conditionalRendering/ConditionalRenderingIntro.jsx'
import ConditionalEx1 from './components/05_conditionalRendering/examples/ConditionalEx1.jsx'
import EventsIntro from './components/06_Events/EventsIntro.jsx'

function App() {
  
  return (
    <>
      {/* ============ Tasks ============ */}
            {/* <Layout00/> */}
            {/* <Layout01/> */}
            {/* <Layout02/> */}



      {/* ============ Components and its types ============ */}
            {/* <JsxIntro/> */}
            {/* <ClassBasedCompIntro/> */}


      {/* ============ hooks ============ */}
            {/* <HooksIntro/> */}

      {/* ============ props ============ */}
            {/* <PropsIntro/> */}
            {/* <PropsEx1/> */}

      {/* ============ Conditional Rendering ============ */}
                  {/* <ConditionalEx1/> */}
            {/* <ConditionalRenderingIntro/> */}

            {/* ========== Events=============== */}
            <EventsIntro/>
            
    </>
  )
}

export default App
