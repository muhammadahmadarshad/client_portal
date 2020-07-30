import React from 'react'
import Loading from '../../Components/Loading/Loading'
import Product from './Products-Item'
import Paginate from './Paginate'
export default function SearchedProducts({loading,products,match,history,url}){
    console.log(products)
if(loading){



    return <Loading/>
}



else if(products['products'])
    {

        return (<div >
            <div className='row'>
            {
                products.products.map((item,index)=>{
                    return(
                        <div key={index} className='col-md-3 col-sm-6 col-12'>
                        <Product  product={item}/>
                        </div>
                    
                    )

                })
            }

            </div>
                <div className='mt-5'>
                    <Paginate match={match} history={history} total_results={products.total_results} url={url}/>
                </div>
                

        </div>)
    }
else {

    return <div>


        <h3 className='text-center text-danger'>404 Not Found</h3>
    </div>
}



}