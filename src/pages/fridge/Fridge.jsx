
import React from 'react';
import {fridgeData} from "../../data/fridge";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Computer() {
  return (
    <>
    <Navbar/>
    <div className="Books">
    <Singelproduct mobileData={fridgeData}/>
    </div>
    </>
  );
}
