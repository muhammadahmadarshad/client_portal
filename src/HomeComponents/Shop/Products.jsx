import React from 'react';
import Product from './Products-Item';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';
import Paginate from './Paginate'
import Header from '../Header/Header';
export default function Products(props)  {


  const [loading,setLoading]=React.useState(true) 
  const {page}=useParams()
  const [data,setData]= useState()
   
    React.useEffect(()=>{
        setLoading(true)
        Axios({method:'get'
        ,url:`http://localhost:5000/product/get_all_products/${page}`
        })
        .then(res=>{
            
            setData(res.data)
            setLoading(false)
        })
        

   },[page])

   if (loading){

    return <div>
      
          <Header/>
      <Loading/>
          </div>
   
   }
  
    return (
        <div >  
          <Header/>
            <h1 className='text-center text-primary'>All Products</h1>
       <div className='container m-auto'>

       {
            data.products.length?<div>
            <div className='row'>
           {data.products.map((item,index)=>{

            return <div key={index}  className='col-md-3 col-sm-6 col-12'><Product product={item}/></div>
           })}
           </div>
           <div className='mt-5'>
            <Paginate match={props.match} url={`/all_products/`} count={8} history={props.history} total_results={data.total_results}/>
          </div> </div>:<div>

            <h1 className='text-center text-danger'>Not Found</h1>
        </div>
        
        }
       </div>
       </div>
       
       )}
