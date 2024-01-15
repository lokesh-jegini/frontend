
import React from 'react';
import {kitchenData} from "../../data/kitchen";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Kitchen() {
  return (
    <>
    <Navbar/>
    <div className="Kitchen">
    <Singelproduct mobileData={kitchenData}/>
    </div>
    </>
  );
}
