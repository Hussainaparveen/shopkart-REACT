import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';

function Page1() {
  const [products, setProducts] = useState([]);
  const[userProducts,setUserProducts]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate=useNavigate();

  useEffect(function (){
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(json => {
        setProducts(json);
      })
    },[]);
           
  function addToCart(index) {
       // get products from local storage assign to variable;
       
       // if product exist add the selected product to stored variable & set to local storage again

       // else create array of select product obj & set to localstorage
    const selectedProduct = products[index];
  
    let data_retrieved = JSON.parse(localStorage.getItem("userProduct"));
  
    if (data_retrieved === null) {
      data_retrieved = [];
    }
  
    const updatedUserProducts = [...data_retrieved, selectedProduct];
  
    setUserProducts(updatedUserProducts);
    localStorage.setItem("userProduct", JSON.stringify(updatedUserProducts));
    // navigate('/AddToCart')
  }console.log(userProducts);
  
  function handleClick(id){
    navigate(`prodDesc/${id}`);
  }

  function Navigate(e){
    // e.preventDefault();
    navigate(`/AddtoCart`)
  }
  function filterByCategory(category) {
    // update the category in a state variable 
    setSelectedCategory(category);
  }
// write filter based on the selected category
//if selected category matches with products.category then that will be displayed 
//else all the products will be displayed. 
  const filteredProducts = selectedCategory
  ? products.filter(product => product.category.includes(selectedCategory))
  : products;
  return (
    <div>
    <div className='header'>
        <p id="header1">WOMEN</p>
        <p id="header1" >MEN</p>
        <p id="header1">JEWELLERY</p>
        <p id="header1">BRANDS</p>
        <h1>SHOPKART</h1>
        <img id="search"src="search.png" alt='search'/>
        <img id="myAcc" src="person.png" alt='myAccount'/>
        <img id="wishlist" src="wishlist.jpg" alt='wishlist' />
        <img  id="cart" src="cart.png" alt="cart" onClick={Navigate}/>
        </div> 
        <h3 id="side_heading">FASHION <sup>20</sup></h3>
        <div id="add-ons">
        <button id="filter" onClick={() => filterByCategory("men's clothing")}>MEN</button>
        <button id="filter" onClick={() => filterByCategory("women's clothing")}>WOMEN</button>
        <button id="filter" onClick={() => filterByCategory("jewelery")}>JEWELLERY</button>
        <button id="filter" onClick={() => filterByCategory("electronics")}>ELECTRONICS</button>
        <button onClick={() => filterByCategory("")}>SHOW ALL</button>
        {/* <button id="filter">FILTERS (3)</button> | 
        <button id="tops">TOPS </button>
        <button id="size">SIZE M </button>
        <button id="price">$300-$720 </button>
        <button id="sort">SORT BY +</button> */}
        </div>
    <div className='App' >
      {filteredProducts.map(function (product,index) {
        return (
          <div  className="products" key={product.id}>
            <img src={product.image} alt={product.title} onClick={()=>handleClick(product.id)} />
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <button onClick={()=>{addToCart(index)}}>Add To Cart</button>
          </div>
        );
      })}
    </div>
    </div>
);
}
export default Page1
