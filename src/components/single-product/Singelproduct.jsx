import React, { useState } from 'react';
import "./singleproduct.css";
import { NavLink } from 'react-router-dom';

export function Singelproduct(probs) {
  const [filterdata, setFilterdata] = useState([]);

  const companhandler = (mango) => {
    if (filterdata.includes(mango)) {
      // Remove the selected company from the filterdata list
      setFilterdata(filterdata.filter((item) => item !== mango));
    } else {
      // Add the selected company to the filterdata list
      setFilterdata([...filterdata, mango]);
    }
  };

  const filterProduct = filterdata.length === 0 ? probs.mobileData : probs.mobileData.filter((item2) => filterdata.includes(item2.company));

  return (
    <div className="Singelproduct">
      <div className="filter-container">
        {probs.mobileData.map((item1) => (
          <div className="filterblock" key={item1.company}>
            <input
              type="checkbox"
              id={item1.company}
              checked={filterdata.includes(item1.company)}
              onChange={() => {
                companhandler(item1.company);
              }}
            />
            <label htmlFor={item1.company}>{item1.brand || item1.company}</label>
          </div>
        ))}
      </div>

      {filterProduct.map((item) => (
        <div key={item.id}>
          <div className="img-block">
            <NavLink to={`/dynamicroute/${item.id}/?probdata=${JSON.stringify(item)}`}>
              <img src={item.image} alt="img not found" />
            </NavLink>
          </div>
          <p>{item.model || item.title}</p>
        </div>
      ))}
    </div>
  );
}
