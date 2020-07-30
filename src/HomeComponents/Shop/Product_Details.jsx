import React from 'react';


import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';

import DetailsTable from './DetailsTable'
export default function ProductsDetails(props)  {
  const [loading,setLoading]=React.useState(true) 
  const {id}=useParams()
  const [data,setData]= useState()




function getProduct(){
    setLoading(true)
    Axios({method:'get',
    url:`http://localhost:5000/product/product_details/${id}`
    })
    .then(res=>{
        
        let {data}= res
        setData(data)
        setLoading(false)

    })  
}

   
    React.useEffect(getProduct,[id])

    return (
        <div >  
       

       <div>
      
       <div className='container-fluid'>
        {!loading?<div>
            <h3 className=' p-2 text-center rounded'>{data.name}</h3>
        <div >
            <div className='m-auto'>
            <div style={{width:'60%'}} className='w-50 m-auto'>{<div className='m-auto'>
                <DetailsTable 
                    product={data}
                />
                
                </div>}
            </div>

            </div>
        </div>
        
        </div>
        :<Loading/>}
       </div>
       </div>
       </div>
       
       
       )}
