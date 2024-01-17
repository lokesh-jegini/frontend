import React from 'react';
import {mobileData} from "../../data/mobiles";
import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
import  "./mobiles.css"
export default function Mobiles() {
  const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    sum : function() {
          add=5+6;
          console.log(add)
    }
  };
  console.log(person.firstName)
  // console.log(const lokiname=person.fullName())
  // console.log(const lokisum=person.sum())
const lokiname=person.fullName()
const lokisum=person.sum()
  console.log(lokiname)
  console.log(lokisum)




if(lokisum) {
    debugger
    alert("hello world")
}


// if the reunt keyword consit cosole varible  it  will hold the final value.
//     the value is any data type.
// function defniton consit retun vs no retun keyword

  return (
    <>
     <Navbar/>
   
    <div className="mobiles">
     
    <Singelproduct mobileData={mobileData}/>
    </div>
    </>
  );
}
