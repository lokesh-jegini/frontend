
import React from 'react';
import {menData} from "../../data/men";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Meanswear() {
  return (
    <>
    <Navbar/>
    <div className="Meanswear">
    <Singelproduct mobileData={menData}/>
    </div>
    </>
  );
}
