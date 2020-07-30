import React from 'react';
import '../Shop/Product_Item.css'
import {Card,CardBody,CardImg,CardTitle,CardSubtitle} from 'reactstrap'
import { Link } from 'react-router-dom';

export default function Product(props)  {
    return (
     
            <div className='p-5 product-item'>


            
    <Card className='p-0 text-center  shadow-sm '> 
        <CardImg  src={props.product.image.url}></CardImg>
        <CardBody>
        <CardTitle>
        {props.product.name}
        </CardTitle>

        <CardSubtitle>
            {props.product.description}
        </CardSubtitle>
        <Link to={`/product_details/${props.product._id}`} className='btn text-white btn-primary btn-block'>Details</Link>
        <span className='text-center text-danger'>{props.product.qty===0?'Out of Stock':''}</span>
        </CardBody>
        
    </Card>

    </div>
    )}
