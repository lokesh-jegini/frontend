
import React from 'react';
import {furnitureData} from "../../data/furniture";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Furniture() {
  return (
    <>
    <Navbar/>
    <div className="Furniture">
    <Singelproduct mobileData={furnitureData}/>
    </div>
    </>
  );
}
