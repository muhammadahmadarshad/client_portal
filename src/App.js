import React, { useEffect } from 'react';

import Dashboard from './Components/Dashboard/Dashboard'

import {BrowserRouter as Router,Redirect,Switch,Route} from 'react-router-dom'
import './App.css'
import SearchRecipe from './Components/Recipies/Search-Recipes';
import Recipe_Details from './Components/Recipies/Recipe_Details';
import Food_Search from './Components/Food/Food-Search';
import FoodDetail from './Components/Food/Food_Detail';
import PrivateRoute  from './PrivateRoute'
import Favorite_Food from './Components/Food/Favourite_Foods'
import DietPlan from './Components/Diet_Plan/DietPlan'
import CompleteReport from './Components/Reports/CompleteReport'
import Home from './Home'
import TodaysMeal from './Components/Diet_Plan/TodaysMeal';
import TodayReport from './Components/Reports/Today_Report';
import WeekReport from './Components/Reports/Weekly_Report';
import Profile from './Components/ClientProfile/Profile';
import ChangePassword from './Components/ClientProfile/Change-Password';
import Nutrionists from './Components/Nutrtionist/SearchNutritionist'
import NutritionistDetails from './Components/Nutrtionist/NutrinistDetails';
import Query from './Components/Queries/Query'
import Queries from './Components/Queries/Queries';
import { useAuth } from './auth';
import Axios from 'axios';
import DietPlanDetails from './Components/Diet_Plan/DietPlanDetails';
import Main from '../src/HomeComponents/Main/Main';


import Login from '../src/HomeComponents/Login/Login';
import Signup from '../src/HomeComponents/SignUp/Signup';

import Products from './HomeComponents/Shop/Products';
import Brand from './HomeComponents/Shop/Brand';
import ShopCart from './HomeComponents/Shop/ShopCart';
import ProductsDetails from './HomeComponents/Shop/Product_Details';
import Checkout from './HomeComponents/Shop/Checkout'
import Password from './Components/resetPassword/Password';

function App() {

  const {dispatch,state}=useAuth()
  useEffect(()=>{

    Axios({method:'get', url:"http://localhost:5000/me", headers:{'x-auth-token':localStorage.getItem('token')}})
    .then(res=>{

      dispatch({type:'me',payload:res.data})

    })
    .catch(err=>{



    })


  },[])


  return (
    <div  >
    <Router>
      <Switch>
      <PrivateRoute exact path='/dashboard' component={Dashboard}/>
      <PrivateRoute exact path='/personal_diet/:page' component={DietPlan}/>
      <PrivateRoute exact path='/account' component={Profile}/>
      <PrivateRoute exact path='/search_recipe/:query?/:page?' component={SearchRecipe}/>
      <PrivateRoute exact path='/search_food/:query?/:page?' component={Food_Search}/>
      <PrivateRoute exact path='/recipe_details/:id' component={Recipe_Details}/>
      <PrivateRoute exact path='/food_details/:food_id' component={FoodDetail} />
      <PrivateRoute exact path='/my_foods/:page' component={Favorite_Food} />
      <PrivateRoute exact path='/today_meals' component={TodaysMeal}/>
      <PrivateRoute exact path='/today_report' component={TodayReport}/>
      <PrivateRoute exact path='/week_report' component={WeekReport}/>
      <PrivateRoute exact path='/change_password' component={ChangePassword}/>
      <PrivateRoute exact path='/nutritionists' component={Nutrionists}/>
      <PrivateRoute exact path='/query_detail/:id' component={Query}></PrivateRoute>
      <PrivateRoute exact path='/queries/:page' component={Queries}></PrivateRoute>
      <PrivateRoute exact path='/nutritionist_details/:id' component={NutritionistDetails}/>
      <PrivateRoute exact path='/diet_plan_details/:id' component={DietPlanDetails}/>
      <PrivateRoute exact path='/complete_report' component={CompleteReport}/>
      
     
      <Route exact path = "/"
        component = { Main }/> 


        <Route exact path = "/signup"component = { Signup }/> <Route exact path = "/login" component = { Login }/> 
        <Route exact path = "/all_products/:page" component = { Products }/> 
        <Route exact path = "/products/:query/:page" component = { Brand }/> 
        <Route exact path = '/shop-cart' component = { ShopCart }/> 
        <Route exact path = '/checkout' component = { Checkout }/> 
        <Route exact path = '/product_details/:id' component = { ProductsDetails } /> 
        <Route exact path="/forget_password" component={Password}/>
        <Route exact path='/page-not-found' component={Home}/>
        <Redirect to='/page-not-found'/>
    
      </Switch>
     

    </Router>
    </div>
  );
}

export default App;
