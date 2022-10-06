import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './Context';

const Details = () => {
    const {id} = useParams();
    console.log(id);
const data = useContext(DataContext);
const chosenFood = data.allfoods.filter(food => food._id === id);
console.log(chosenFood)

  return (
    <div>
{
    chosenFood.map((food)=>(
        <div key={food._id}>
             <h2>{food.food}</h2>
      <h3>{food.price}</h3>
      <h4>{food.customer}</h4> 
      <a href={'/details/'+food._id}>View Details</a>
             </div>
    )

    )
}

    </div>
  )
}

export default Details