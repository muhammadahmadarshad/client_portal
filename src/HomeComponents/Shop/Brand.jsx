import React from 'react';
import { useState } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SearchedProducts from './Searched_Products'
export default function Brand(props)  {
  const {page,query}=useParams()
  const [products,setProducts]=useState({})
  const [loading,setLoading] = useState(true) 

  console.log(query,page)
  
  function get_products(){
      if(query && page && parseInt(page)>0){
        Axios({
            method:'get',
            url:`http://localhost:5000/product/search_products/${query}/${page}`,
        }).then(res=>{
            setLoading(false)
            setProducts(res.data)
        }).catch((err)=>{
          console.log(err)

            setLoading(false)
        })

      }
      else 
        setLoading(true)
  }


  

useEffect(get_products,[page,query])
  

  
    return (
        <div > 
       
          <h3 className='text-center text-primary'>{query.toUpperCase()}</h3>

       <div >
       
       <div >
           <div className='container'>
           <SearchedProducts url={`/products/${query}/`}  loading={loading} match={props.match} history={props.history} products={products}/>

           </div>
            



       </div>
       </div>
       </div>
    )}