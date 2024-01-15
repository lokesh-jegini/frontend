import React from 'react';
import {mobileData} from "../../data/mobiles";
import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
import  "./mobiles.css"
export default function Mobiles() {
  return (
    <>
     <Navbar/>
   
    <div className="mobiles">
     
    <Singelproduct mobileData={mobileData}/>
    </div>
    </>
  );
}
