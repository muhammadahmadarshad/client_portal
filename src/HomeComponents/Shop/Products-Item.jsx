import React from 'react';
import '../Shop/Product_Item.css'
import {Card,CardBody,CardImg,CardTitle,CardSubtitle} from 'reactstrap'
import { Link } from 'react-router-dom';

export default function Product(props)  {
    return (
     
            <div className='p-5 product-item'>


     <Link className='text-decoration-none'  to={`/product_details/${props.product._id}`}>
    <Card className='p-0 text-center  shadow-sm '> 
        <CardImg  src={props.product.image.url}></CardImg>
        <CardBody>
        <CardTitle>
        {props.product.name}
        </CardTitle>

        <CardSubtitle>
            {props.product.description}
        </CardSubtitle>
        {props.product.qty===0? <span className='text-center text-danger'>{'Out of Stock'}</span>
        :''
             }
        </CardBody>
        
    </Card>
    </Link>       
    </div>
    )}
