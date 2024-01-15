
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
