import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddToCart() {
  
  const products=JSON.parse(localStorage.getItem("userProduct"));
const[list,setList]=useState(products);
const navigate=useNavigate();

function clear(){
  localStorage.clear();
  setList([]);
}
function Navigate(){
  navigate('/');
}
  return (
    <>
    <div className='header'>
    <p id="header1">WOMEN</p>
    <p id="header1">MEN</p>
    <p id="header1">KIDS</p>
    <p id="header1">BRANDS</p>
    <h1>SHOPKART</h1>
    <img id="search"src="search.png" alt=''/>
    <img id="myAcc" src="person.png" alt=''/>
    <img id="wishlist" src="wishlist.jpg" alt='' />
    <img  id="cart" src="cart.png" alt="cart" />
    </div>
    {list !== null ? (
        <div>
          {list.map(function (value, index) {
            return (
              <div className="cartItems" key={index}>
                <img id="cart_img" src={value.image} alt="product" />
                <p id="prod_name"> Product Name: {value.title}</p>
                <p> Product Price: ${value.price}</p>
              </div>
            );
          })}
          <button onClick={clear}>CLEAR CART</button>
          </div>
      ) : (
        <div id="clear-cart">
          <h1>CART IS EMPTY!</h1> <br/>
          <button onClick={Navigate}>START SHOPPING</button>
          </div>
      )}
      
    </>
  )
}

export default AddToCart