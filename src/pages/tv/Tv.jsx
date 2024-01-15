
import React from 'react';
import {tvData} from "../../data/tv";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Tv() {
  return (
    <>
    <Navbar/>
    <div className="Speakers">
    <Singelproduct mobileData={tvData}/>
    </div>
    </>
  );
}
