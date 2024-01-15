
import React from 'react';
import {womanData} from "../../data/woman";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Womanwear() {
  return (
    <>
    <Navbar/>
    <div className="Womanwear">
    <Singelproduct mobileData={womanData}/>
    </div>
    </>
  );
}
