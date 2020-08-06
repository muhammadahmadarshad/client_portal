import React from 'react';
import { useState } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SearchedProducts from './Searched_Products'
import Loading from '../../Components/Loading/Loading';
export default function Brand(props)  {
  const {page,query}=useParams()
  const [products,setProducts]=useState({})
  const [loading,setLoading] = useState(true) 
  const [err,setError]=useState(false)

  console.log(query,page)
  
  function get_products(){
    setError(false)
    setLoading(true)
      if(query && page && parseInt(page)>0){
        Axios({
            method:'get',
            url:`http://localhost:5000/product/search_products/${query}/${page}`,
        }).then(res=>{
          setProducts(res.data)
          setError(false)
            setLoading(false)
           
          }).catch((err)=>{
          setError(true)
            setLoading(false)
        })

      }
      else {
        setError(true)
        setLoading(false)
      }}


  

useEffect(get_products,[page,query])
  
  if(loading){

      return <Loading/>
  }
  else if (err){

    return <h1 className="text-danger text-center">Products Not Found</h1>
  }
  else
    return (
        <div > 
       
          <h3 className='text-center text-primary'>{query.toUpperCase()}</h3>

       <div >
       
       <div >
           <div className='container'>
           <SearchedProducts url={`/products/${query}/`} total_results={products.total_results} loading={loading} match={props.match} history={props.history} products={products.products}/>
           </div>
            

       </div>
       </div>
       </div>
    )}