import React from 'react';
import './App.css';
import Header from '../src/HomeComponents/Header/Header';
import Main from '../src/HomeComponents/Main/Main';
import { Route } from 'react-router-dom'

import Login from '../src/HomeComponents/Login/Login';
import Signup from '../src/HomeComponents/SignUp/Signup';

import Products from './HomeComponents/Shop/Products';
import Brand from './HomeComponents/Shop/Brand';
import ShopCart from './HomeComponents/Shop/ShopCart';
import ProductsDetails from './HomeComponents/Shop/Product_Details';
import Checkout from './HomeComponents/Shop/Checkout'
import Password from './Components/resetPassword/Password';
function Home() {
    return ( <div>
        <Header/>

        <Route exact path = "/"
        component = { Main }/> 


        <Route exact path = "/signup"component = { Signup }/> <Route exact path = "/login" component = { Login }/> 
        <Route exact path = "/all_products/:page" component = { Products }/> 
        <Route exact path = "/products/:query/:page" component = { Brand }/> 
        <Route exact path = '/shop-cart' component = { ShopCart }/> 
        <Route exact path = '/checkout' component = { Checkout }/> 
        <Route exact path = '/product_details/:id' component = { ProductsDetails } /> 
        <Route exact path="/forget_password" component={Password}/>
        </div>


    );
}

export default Home;