import React from 'react'
import { useAuth } from '../../auth';
import ShopCartItem from './ShopCartItem';
import {Link} from 'react-router-dom'
import { Table } from 'reactstrap';
import Header from '../Header/Header';


const ShopCart = () => {
    const {state}=useAuth()

    var count=0
   

    for(let i=0; i<state.cart.length;i++){
    
        count=count+state.cart[i].price

    }

    return ( <div>


            <Header/>
   <div className='container mt-5' >

        <h1 className="text-center text-primary">Shop Cart</h1>
        <hr/>
        <div className="w-100">

            <Table hover>
                <thead>
                    <tr>
                      
                        <th >Product</th>
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
                        <td><h3>Total</h3>   </td>
                        <td>   </td>
                        
                        <td></td>
                    <td className=""><h3><strong>${count}</strong></h3></td>
                    <td></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        
                       
                        <td>
                        {state.cart.length>0&&<Link to='/checkout' type="button" className="btn btn-success">
                            Checkout <span className="glyphicon glyphicon-play"></span>
                    </Link>}</td>
                    <td>   </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div> </div> );
}
 
export default ShopCart;