import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

 function ProdDesc() {
  const navigate=useNavigate();
  const[data,setData]=useState([]);
const {id}=useParams();


useEffect(function(){
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(json => setData([json]))
}, []);
function Navigate(){
  navigate('/AddToCart')
}

  return (
    <div>
       <div className='header'>
        <p id="header1">WOMEN</p>
        <p id="header1">MEN</p>
        <p id="header1">KIDS</p>
        <p id="header1">BRANDS</p>
        <h1>SHOPKART</h1>
        <img id="search"src="/search.png" alt='search'/>
        <img id="myAcc" src="/person.png" alt='myAccount'/>
        <img id="wishlist" src="/wishlist.jpg" alt='wishlist' />
        <img  id="cart" src="/cart.png" alt="cart" onClick={Navigate}/>
        </div> 
        {data.map(function(value,index){
          return(
         <div id="desc_head" key={index}>
        <h2>Product Description</h2>
        <img  id="prodDesc_img" src={value.image} alt="products"/>
        <p>ID: {id}</p>
        <p>Title: {value.title}</p>
        <p>Description: {value.description}</p>
        <p>Price: {value.price}</p>      
        <p>Category: {value.category}</p> 
        <p>Rating: {value.rating.rate}</p>
        <p>Available Stock:{value.rating.count}</p>
        </div>
      )})}
        </div>
  );
}
export default ProdDesc;
