import React from 'react'
import Product from './Products-Item'
import Paginate from './Paginate'
export default function SearchedProducts({total_results,products,match,history,url}){



    if(products.length<=0)
{

    return <h1 className='text-danger text-center'>No Products Available</h1>
}    

        return (<div >
            <div className='row'>
            {
                products.map((item,index)=>{
                    return(
                        <div key={index} className='col-md-3 col-sm-6 col-12'>
                        <Product  product={item}/>
                        </div>
                    
                    )

                })
            }

            </div>
                <div className='mt-5'>
                    <Paginate match={match} count={12} history={history} total_results={total_results} url={url}/>
                </div>
                

        </div>)


}