import React from 'react'
import "./singleproduct.css"
import { NavLink } from 'react-router-dom';

export  function Singelproduct(probs) {
  // const {filrerdata,setFilterdata}=useState([])
debugger
  return (
    <div className="Singelproduct">
      {probs.mobileData.map((item) => (<div>
      
      <NavLink to={`/dynamicroute/${item.id}/?probdata=${JSON.stringify(item)}`}>
      <img key={item.id} src={item.image} alt="img not found" />
      </NavLink>
       
        <p>{item.model || item.title}</p>
        </div>
      ))}
    </div>
  );
}

