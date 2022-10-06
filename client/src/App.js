
import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Details from './Details';
import Foods from './Foods';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { DataContext } from './Context';


function App() {
  const [food,setFood] = useState('');
    const [price,setPrice] = useState('');
    const [customer,setCustomer] = useState('');
    const [allfoods,setAllFoods] = useState([]);
  
  
  const getFoods = async () => {
    await axios.get("http://localhost:3001/viewfoods").then((res) =>setAllFoods(res.data));
  
  }
  useEffect(()=>{
     getFoods();
  
  },[])
  
    const addFood = async () => {
      const newFood = {
        food,
        price:Number(price),
        customer
      }
        await axios.post("http://localhost:3001/addfood",newFood).then(()=>getFoods());
    }
    const updateFood = async (id) => {
      const selectedFood = allfoods.find(food => food._id === id);
      selectedFood.price += 10;
      await axios.put("http://localhost:3001/updatefood/"+id,selectedFood).then(()=>getFoods());
  }
  const deleteFood = async (id) =>{
     await axios.delete("http://localhost:3001/deletefood/"+id).then(()=>getFoods());
  
  
  }
  
  return (
    <DataContext.Provider value={{food,setFood,customer,setCustomer,allfoods,setAllFoods,price,setPrice,updateFood,deleteFood,addFood}}>
    <Router>
 

<Routes>
   <Route element={<Details />} path='/details/:id' />
   <Route element={<Foods/>} path='/' />
</Routes>
    
    </Router>
    
    </DataContext.Provider>
  );
}

export default App;
