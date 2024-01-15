
import React from 'react';
import {booksData} from "../../data/books";

import {Singelproduct} from "../../components/single-product/Singelproduct"
import Navbar from "../../components/navbar/Navbar"
export default function Books() {
  return (
    <>
    <Navbar/>
    <div className="Books">
    <Singelproduct mobileData={booksData}/>
    </div>
    </>
  );
}
