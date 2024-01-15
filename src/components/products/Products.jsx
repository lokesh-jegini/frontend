import React from 'react';
import './Products.css';

function Products(props) {
  console.log(props);
  debugger
  let slicedata=props.data.slice(0,4)
  return (
    <div className='Products_container'>
      <h2>{props.children}</h2>
    <div className='products'>
      {slicedata.map((item, index) => (
        <div className='imgBox' key={index}>
          <img className='proImage' src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Products;
