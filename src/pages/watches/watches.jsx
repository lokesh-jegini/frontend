
import React from 'react';
import {watchData} from "../../data/watch";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function watches() {
  return (
    <>
    <Navbar/>
    <div className="watches">
    <Singelproduct mobileData={watchData}/>
    </div>
    </>
  );
}
