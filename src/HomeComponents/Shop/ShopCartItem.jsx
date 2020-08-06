import React, { useState } from 'react'
import { useAuth } from '../../auth';
import { Link } from 'react-router-dom';


const ShopCartItem = (props) => {
    const {product}= props

    
 
    const {dispatch} = useAuth()
    let [qty,setQty]= useState(product.qty)

    const QtyIncrement=()=>{
        if(qty+1<=product.stock){
        setQty(qty+1);
        dispatch({type:'update_qty',payload:{...product,qty:qty+1}})
        }
    }

    const QtyDecrement=()=>{
        setQty(qty-1)
        dispatch({type:'update_qty',payload:{...product,qty:qty-1}})
    }


    return ( 
        <tr>
            <td className="col-md-6 col-12">
            <div className="media">
        <Link className="thumbnail pull-left" to={`/product_details/${product._id}`}> <img className="media-object" alt={product.name} src={product.image.url} style={{width: "100px", height: "100px"}}/> </Link>
                <div className="media-body">
                    <h4 className="media-heading"><Link to={`/product_details/${product._id}`}>{product.name}</Link></h4>
            <h5 className="media-heading"> by <Link to={`/products/${product.brand}/1`}>{product.brand}</Link></h5>
                </div>
            </div></td>
            <td className="col-md-1" style={{textAlign: "center"}}>
   
        <div>
        <span onClick={QtyDecrement} className='btn btn-sm btn-danger fa fa-minus'> </span>
        <span className='border'>{qty}</span>
        <span onClick={QtyIncrement} className='btn btn-sm btn-success fa fa-plus'> </span>

        </div>
   
    
            </td>
            <td className="col-md-1 text-center"><strong>${product.price}</strong></td>
            <td className="col-md-1 text-center"><strong>${product.price}</strong></td>
            <td className="col-md-1">
            <button onClick={()=>{

                dispatch({type:"remove_from_cart",payload:product})
            }} type="button" className="btn btn-danger">
                <span className="fa fa-trash"></span>
            </button></td>
        </tr> );
}
 
export default ShopCartItem;