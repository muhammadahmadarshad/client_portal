import React from 'react'
import './DetailsTable.css'
import { Button, ButtonGroup, Table } from 'reactstrap'
import { useAuth } from '../../auth'
export default function DetailsTable(props){
    const {dispatch}=useAuth()
    const 
    {
        name,category,description,brand,price,qty,facts,image,
    }=props.product

    function addToCart(){

        dispatch({type:'add_to_cart',payload:{...props.product,qty:1,stock:props.product.qty}})


    }


    return(<div className='detail w-150'>


            <Table >
            <thead>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>Status</th>  
                <th>brand</th>
                <th>category</th>
                <th>facts</th> 
                <th>description</th> 
            </tr>    
            </thead>    
            <tbody>
            <tr>
            <td><img alt={image.url} src={image.url} width='300' height='300'/></td>
            <td data-label='name'>{name}</td> 
            <td  data-label='price'>{price} $</td>
            <td data-label='status'>{qty>0?<span className='text-success'>Available</span>:<span className='text-danger'>Out of Stock</span>}</td>
            <td data-label='brand'>{brand}</td>
            <td data-label='category'>{category}</td> 
            <td data-label='facts:'><p className='text-right p-3'>
                <br/>
                {facts}</p></td>
            <td data-label='description:'><p className='text-center p-3'>
                <br/>
                {description}</p></td>    
            <td>{qty>0&&<ButtonGroup>
            <Button onClick={addToCart} color='success'>Add to Cart</Button></ButtonGroup>}</td>   
            
            </tr>    
            </tbody>        
            </Table>
        
        
        </div>



    )
}