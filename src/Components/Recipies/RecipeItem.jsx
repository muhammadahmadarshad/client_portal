import React from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'
export default function RecipeItem(props){

    const {image,name,description,id}=props

    return(
        <div className=' col-lg-4  col-sm-6  col-md-4 col-12  mt-2 mb-2'>
                <Card className='shadow'>
                    {image?
                        <CardImg src={image} />
                        : <CardImg src={"https://www.leezed.com/assets/images/noimage.jpg"} height='30%' width='40%'/>

                    }
                    
                    <CardBody>
                    <CardTitle><strong>{name}</strong></CardTitle>
                    <CardText>{description}</CardText>
                        <Link className='text-center' to={`/recipe_details/${id}`}> <i>Detail</i></Link>
                    </CardBody>

                </Card>


        </div>



    )


}
