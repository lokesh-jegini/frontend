import React from 'react';
import "./dynamicroute.css";
import { useParams, useLocation, json } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { mobileData } from "../../data/mobiles";

export function Dynamicroute() {
  const { id } = useParams();
  const serachdata = useLocation();
  const queryparam=new URLSearchParams(serachdata.search)
  const finadata=queryparam.get("probdata")
  console.log(finadata)
  const reslts=JSON.parse(finadata)
 
  console.log(reslts)

//   const foundItem = mobileData.find((item) => item.id == id);
  

  return (
    <>
      <Navbar />
      <div className='dynamicroute'>
        {reslts ? (
          <div>
            <img alt="img not found" src={reslts.image} />
            <p>{reslts.model}</p>
          </div>
        ) : (
          <p>Item not found</p>
        )}
      </div>
    </>
  );
}
