import React from 'react';
import {acData} from "../../data/ac";
import  "./ac.css"

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Mobiles() {
  return (
    <>
    <Navbar/>
    <div className="ac">
    <Singelproduct mobileData={acData}/>
    </div>
    </>
  );
}

// import React from 'react';
// import {acData} from "../../data/ac";
// import  "./ac.css"

// import {Singelproduct} from "../../components/single-product/Singelproduct"
// import Navbar from "../../components/navbar/Navbar"
// export default function Mobiles() {

//   let data = "jegini lokesh";

// function sum() {
//   data = "null";
// }

// if (data == "null") {
//   alert("value updated");
// } else {
//   alert("value not updated");
// }
// console.log(data)
//   return (
//     <>
//     <Navbar/>
//     <button onClick={sum}>click</button>
//     <div className="ac">
//     <Singelproduct mobileData={acData}/>
//     </div>
//     </>
//   );
// }

// states
// import React, { useState } from 'react';
// import { acData } from "../../data/ac";
// import "./ac.css";
// import { Singelproduct } from "../../components/single-product/Singelproduct";
// import Navbar from "../../components/navbar/Navbar";

// export default function Mobiles() {
//   // Using useState to manage the 'data' state
//   const [data, setData] = useState("jegini lokesh");

//   // Function to update 'data'
//   const sum = () => {
//     setData("null");
//     debugger;
//   };

//   // Alert based on the updated 'data'
//   if (data === "null") {
//     alert("value updated");
//   } else {
//     alert("value not updated");
//   }

//   // Log the 'data'
//   console.log(data);
//   const details = () => {
//     if(data="null") {
//       alert("value updatedjjjjjjjjjjjjjjjj");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Button to trigger the 'sum' function */}
//       <button onClick={sum}>click</button>
//       <div className="ac">
//         {/* Passing the updated 'data' to the component */}
//         <Singelproduct mobileData={acData} updatedData={data} />
//       </div>
//     </>
//   );
// }
// // can i use call the state variable to the other page
// // in React, state variables are typically scoped to the component where they are declared. If you need to share state between components that are not directly related in the component hierarchy, you have several options: