import React from 'react';
import './App.css';
import Header from '../src/HomeComponents/Header/Header';
import Main from '../src/HomeComponents/Main/Main';
import { Route,Redirect } from 'react-router-dom'
import Contact from '../src/HomeComponents/Contact-Us/Contact';
import About from '../src/HomeComponents/About/About';
import Food_Recipes from '../src/HomeComponents/Food&Recipes/Food&Recipes';
import Login from '../src/HomeComponents/Login/Login';
import Signup from '../src/HomeComponents/SignUp/Signup';
import BMI from '../src/HomeComponents/BMI/BMI';
import Products from './HomeComponents/Shop/Products';
import Brand from './HomeComponents/Shop/Brand';
import ShopCart from './HomeComponents/Shop/ShopCart';
import ProductsDetails from './HomeComponents/Shop/Product_Details';
import Checkout from './HomeComponents/Shop/Checkout'
function Home() {
    return ( <div>
        <Header/>

        <Route exact path = "/"
        component = { Main }/> 
        <Route exact path = "/contact" component = { Contact }/> 
        <Route exact path = "/about" component = { About }/> 
        <Route exact path = "/food-recipes" component = { Food_Recipes }/> 
        <Route exact path = "/signup"component = { Signup }/> <Route exact path = "/login" component = { Login }/> <Route exact path = "/bmi" component = { BMI }/> 
        <Route exact path = "/all_products/:page" component = { Products }/> 
        <Route exact path = "/products/:query/:page" component = { Brand }/> 
        <Route exact path = '/shop-cart' component = { ShopCart }/> 
        <Route exact path = '/checkout' component = { Checkout }/> 
        <Route exact path = '/product_details/:id' component = { ProductsDetails } /> 
        <Redirect to='/'></Redirect>
        </div>


    );
}

export default Home;