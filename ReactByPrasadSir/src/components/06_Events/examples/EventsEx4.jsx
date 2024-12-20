// import React from "react";
// import { useState } from "react";

// const EventsEx4 = () => {
//   const [state, setState] = useState({ username: "", });
//   const HandleChange = (e) => {
//     setState({ username: e.target.value });
//     console.log(state);
//   };
//   return (
//     <div>
//       <form action="">
//         <br />

//         <input
//           type="text"
//           name="username"
//           className="bg-slate-700 text-cyan-50"
//           onChange={HandleChange}
//         />
//         <br />
//         <br />

//         <button className="bg-teal-900 border-2 px-3">Submit</button>
//       </form>

//     </div>
//   );
// };

// export default EventsEx4;

// =========================================================================
// * Event Handling with Multiple Input Fields

// import React from 'react'
// import { useState } from "react";

// const EventsEx4=()=>{
//   const [state, setState] = useState({ username: "", password: "" });
//   const HandleChange = (e) => {
//     setState({ ...state,[e.target.name]: e.target.value });
//     console.log(state);

//   }
//   return (
//     <div className="p-5">

//         <form action="">

//         <input
//         placeholder="username"
//           type="text"
//           name="username"
//           value={state.username}
//           className="bg-slate-700 text-cyan-50"
//           onChange={HandleChange}
//         />
//         <br />
//         <br />
//         <input
//         placeholder="password"
//           type="text"
//           name="password"
//           value={state.password}
//           className="bg-slate-700 text-cyan-50"
//           onChange={HandleChange}
//         />
//         <br />
//         <br />
//         <button className="bg-teal-900 border-2 px-3">Submit</button>
//        </form>
//        <br />
//         <hr />

//         <p>Username: {state.username}</p>
//         <p>Password: {state.password}</p>

//     </div>
//   )
// }

// export default EventsEx4

// ==================================================================================================

// 20 Dec 2024
// Today we worked on submit Button


import { useState } from "react";

const EventsEx4 = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  
  const HandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
    
   
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setUsers([{...users,state}])
    console.log(users);
      
    };
  return (
    <div className="p-5">
      <form action="">
        <input
          placeholder="username"
          type="text"
          name="username"
          value={state.username}
          className="bg-slate-700 text-cyan-50"
          onChange={HandleChange}
        />
        <br />
        <br />
        <input
          placeholder="password"
          type="text"
          name="password"
          value={state.password}
          className="bg-slate-700 text-cyan-50"
          onChange={HandleChange}
        />
        <br />
        <br />
        <button
          onClick={HandleSubmit}
          className="bg-teal-900 border-2 px-3"
        >
          Submit
        </button>
      </form>
      <br />
      <hr />

      <p>Username: {state.username}</p>
      <p>Password: {state.password}</p>
    </div>
  );
};

export default EventsEx4;
