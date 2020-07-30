import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'
import {FastfoodOutlined,FavoriteOutlined,DescriptionOutlined
       , TodayOutlined,PollOutlined,RestaurantMenuOutlined, HomeOutlined} from '@material-ui/icons'

import './Dashboard.css'
import { Link } from 'react-router-dom';
  


export default function Dashboard(props)  {

  const [isOpen,setOpen]=React.useState(false)
/*
  const [data,setData] =useState([])
  useEffect(()=>{

    Axios({method:'get',url:'http://localhost:5000/diet_plan/report'
    ,headers:{'x-auth-token':localStorage.getItem('token')}})
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
 },[])*/

  let toggle=()=>{
      setOpen(!isOpen)
   }

  
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
       <div className='container' >
         <div className='d-flex content-justify-center'>

      
        <div className='m-auto'>
        <div className='row '>

        <div className='col-md-3 mt-4 col-6'>
          <Link className='btn ' style={{background:"#b80096",color:"#fff"}} to='/'>
          <span className='text-center'>

          <HomeOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Home
          </Link>
          </div>

          <div className='col-md-3 mt-4 col-6'>
          <Link className='btn ' style={{background:"#06313d",color:"#fff"}} to='/search_food'>
          <span className='text-center'>

          <FastfoodOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Search Foods
          </Link>
          </div>

          <div className='col-md-3 mt-4 col-6'>
          <Link className='btn ' style={{background:'#05083d',color:'#fff'}} to='/my_foods/1'>
          <span className='text-center'>

          <FavoriteOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Favorite Foods
          </Link>
          </div>


          <div className='col-md-3 col-6 mt-4'>
          <Link className='btn' style={{background:"#707173",color:'#fff'}} to='/search_recipe'>
          <span className='text-center'>

          <RestaurantMenuOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Search Recipes
          </Link>
          </div>

          <div className='col-md-3 col-6 mt-4'>
          <Link className='btn' style={{background:'#1e0121', color:'#fff'}} to='/personal_diet/1'>
          <span className='text-center'>

          <DescriptionOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          My Diet Plan
          </Link>
          </div>

          <div className='col-md-3 col-6 mt-4'>
          <Link className='btn ' style={{background:'#474447',color:'#fff'}} to='/today_meals'>
          <span className='text-center'>

          <TodayOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Today's Meals
         
          </Link>
          </div>

          <div className='col-md-3 col-6 mt-4'>
          <Link className='btn btn-success' to='/today_report'>
          <span className='text-center'>

          <PollOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Today's
          Report
          </Link>
          </div>


          
          <div className='col-md-3 col-6 mt-4'>
          <Link className='btn ' style={{background:'#02767a',color:'#fff'}} to='/week_report'>
          <span className='text-center'>

          <PollOutlined style={{fontSize:100,color:'#fff'}}/>
           
          
          </span>
          <br/>
          Weekly Report
          </Link>
          </div>


        </div>
          </div>

       </div>
        </div>

        </div>
        
        </div>

    );
  
}
