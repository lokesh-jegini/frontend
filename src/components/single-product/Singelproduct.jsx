import React,{useState} from 'react'
import "./singleproduct.css"
import { NavLink } from 'react-router-dom';
export  function Singelproduct(probs) {
  const [filterdetails ,setDetails]=useState([])
  const  companhandler=(selectdata,e)=>{
    if(selectdata&&e.target.checked) {
      const filteredData=probs.mobileData.filter((item3)=>{
        return (item3.company==selectdata)
      
      })
      setDetails(filteredData)
    }
   
    else{
      setDetails([])
    }

  }
  console.log(filterdetails)
  
  

  return (
    <div className="Singelproduct">
        <div className="filter-container">
        {probs.mobileData.map((item1) => (
          <div key={item1.id}>
            <input
           checked={filterdetails.some((item) => item.company === item1.company)}
              type="checkbox"
              id={item1.company}
              onChange={(e) => {
               companhandler(item1.company,e);
              }}
            />
            <label htmlFor={item1.company}>{item1.brand || item1.company}</label>
          </div>
        ))}
      </div>
      <div className='singlewrap'>
      {(filterdetails.length==0?probs.mobileData:filterdetails).map((item) => (<div >
      
      <NavLink to={`/dynamicroute/${item.id}/?probdata=${JSON.stringify(item)}`}>
      <img key={item.id} src={item.image} alt="img not found" />
      </NavLink>
       
        <p>{item.model || item.title}</p>
     
        </div>
      ))}
      </div>
  
    </div>
  );
}
