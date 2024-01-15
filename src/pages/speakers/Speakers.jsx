
import React from 'react';
import {speakerData} from "../../data/speaker";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Speakers() {
  return (
    <>
    <Navbar/>
    <div className="Speakers">
    <Singelproduct mobileData={speakerData}/>
    </div>
    </>
  );
}
