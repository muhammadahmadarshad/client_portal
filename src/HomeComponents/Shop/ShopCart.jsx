import React from 'react'
import { useAuth } from '../../auth';
import ShopCartItem from './ShopCartItem';
import {Link} from 'react-router-dom'

const ShopCart = () => {
    const {state}=useAuth()

    var count=0
   

    for(let i=0; i<state.cart.length;i++){
    
        count=count+state.cart[i].price

    }

    return (  <div className='m-auto '>
        <div className="mt-2 container">
    <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                        {state.cart.map(p=>{


                               return <ShopCartItem key={p._id} product={p} /> 


                        })}

                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Total</h3></td>
                    <td className="text-right"><h3><strong>${count}</strong></h3></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                        </button></td>
                        <td>
                        {state.cart.length>0&&<Link to='/checkout' type="button" className="btn btn-success">
                            Checkout <span className="glyphicon glyphicon-play"></span>
                    </Link>}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    </div>);
}
 
export default ShopCart;