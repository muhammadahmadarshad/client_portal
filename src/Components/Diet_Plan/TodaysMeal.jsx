import React, { useState ,useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'
import Loading from '../Loading/Loading';
import {Table} from 'reactstrap'
import Axios from 'axios';
import TodaysMealItem from './Todays-Meal-Item';
export default function TodaysMeal(props)  {

  const [isOpen,setOpen]=React.useState(false)
  const [loading,setLoading]=useState(true)
  const [food,setFood]= useState([])
  let toggle=()=>{
      setOpen(!isOpen)
   }

   function getTodaysMeal(){
    
        Axios({method:'get',
             url:"http://localhost:5000/diet_plan/todays_meal",
             headers:{'x-auth-token':localStorage.getItem('token')}    
     }).then((res)=>{
         setFood(res.data.meals)
         console.log(res.data.meals)
         setLoading(false)
 
     }).catch(()=>{

        setLoading(false)
     })
    }

   
   useEffect(getTodaysMeal, [])
  
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>

       <div className='container'>


        {loading?
        
            <Loading/>:
            <div>
                {food?<div>
                    <h3 className='text-center p-2 text-primary bg-dark shadow'>Today's Pending  Meals</h3>
                    <Table >
                    <thead >
                    <tr className='bg-primary text-white'>
                    <th>Food</th>
                    <th>Time to Eat</th>
                    <th>Meal</th>
                    <th>Taken</th>
                    </tr>
                    </thead>
                    <tbody>
                    {food.map((item,index)=>{
                     if(!item.taken){
                     return(<TodaysMealItem getTodaysMeal={getTodaysMeal} key={index} item={item}/>)
                     
                    }
                    return (<tr key={index}/>)
                    })}
                    </tbody>

                </Table>
                <h3 className='text-center p-2 text-primary bg-dark shadow'>Today's Completed Meals</h3>
                <Table >
                    <thead >
                    <tr className='bg-primary text-white'>
                    <th>Food</th>
                    <th>Time to Eat</th>
                    <th>Meal</th>
                    <th>Taken</th>
                    </tr>
                    </thead>
                    <tbody>
                    {food.map((item,index)=>{
                     if(item.taken){
                     return(<TodaysMealItem getTodaysMeal={getTodaysMeal} key={index} item={item}/>)
                     
                    }
                    return(<tr key={index}/>)
                    })}
                    </tbody>

                </Table>
                
                
                </div>:<h1>You Dont Have Diet Plan.</h1>}
            </div>
        }            



       </div>

       </div>
       </div>)}


