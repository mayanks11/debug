import React ,{useState,useEffect} from 'react'
// import axios from 'axios';
import './Cart.css'
import image1 from '../../imgs/pizza.jpg';
import potato_chip from '../../imgs/allo.png';
import colddrink from '../../imgs/colddrink.png'
import cheeseburger from '../../imgs/cheesebuger.png'


const Cart = ()=>{
  const [foodItems, setFoodItems] = useState([]);
  const foods=[{index: 0,item: "Burger", price: "₹120", imgUrl: image1},
  {index: 1, item: "Pizza", price: "₹120", imgUrl: image1}, 
  {index: 2, item: "Chesse Burger", price: "₹145", imgUrl: cheeseburger},
   {index: 3, item: "Cold drink", price: "₹120" , imgUrl: colddrink}, 
  {index: 4, item: "Potato chip", price: "₹120", imgUrl: potato_chip}, 
  {index: 5, item: "Chesse Burger", price: "₹145", imgUrl: cheeseburger}];

  // const addToCart =(e)=>{
  //   try {
  //     console.log(e);
      
  //   } catch (error) {console.log(error);}
  // }
  function addToCart(id){
    setFoodItems(foods[id]);
  }
  useEffect(() => {
    console.log(foodItems)
  },[foodItems])
  return (
    <>
      <div className="feature">
          <div className="feature-title center">
            <h5 className="">Feature</h5>
          </div>
          <div className="row">
      {
        
        foods.map((foodItems => 
          //  <div>
          //  <p className="content">{foodItems.item}</p>
          //  <p className="content">{foodItems.price}</p>
          //  </div>
          <div className="col-lg-4 col-md-6">  
          <div className="card">
          <img  className="card-img"src={foodItems.imgUrl} alt=" srcset" />
          <div className="food-content card-body">
            <h5 className="card-title">{foodItems.item}</h5>
            <p className="card-text">{foodItems.price}</p>
            <button className="btn btn-primary" onClick={() =>{addToCart(foodItems.index)}}>Add to cart</button>
          </div>
        
          </div>
          </div>
        ))
      }
      </div>

      </div>
    </>
  )
}

export default Cart
