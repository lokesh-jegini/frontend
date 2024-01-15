import React from 'react'
import "./singleproduct.css"
export  function Singelproduct(probs) {

  return (
    <div className="Singelproduct">
      {probs.mobileData.map((item) => (<div>
        <img key={item.id} src={item.image} alt="img not found" />
        <p>{item.model || item.title}</p>
        </div>
      ))}
    </div>
  );
}

