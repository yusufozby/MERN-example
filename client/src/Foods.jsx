import React from 'react'

import { useContext } from 'react';
import { DataContext } from './Context';
const Foods = () => {
   const data = useContext(DataContext);
   
  return (
    <div>
        
  <input type="text" value={data.food} onChange={(e)=>data.setFood(e.target.value)}  placeholder="food" />
  <input type="text" value={data.price} onChange={(e)=>data.setPrice(e.target.value)}  placeholder="price" />
  <input type="text" value={data.customer} onChange={(e)=>data.setCustomer(e.target.value)}  placeholder="customer" />
  <button onClick={()=>data.addFood()}>Add Food</button>
{
  data.allfoods.map((food)=>(
    <div key={food._id}>
      <h2>{food.food}</h2>
      <h3>{food.price}</h3>
      <h4>{food.customer}</h4> 
      <button onClick={()=>data.updateFood(food._id)}>Update Food</button>
      <button onClick={()=>data.deleteFood(food._id)}>Delete Food</button>
      <a href={'/details/'+food._id}>View Details</a>

    </div>
  ))
}
  </div>
  )
}

export default Foods