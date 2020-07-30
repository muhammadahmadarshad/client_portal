import React from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'reactstrap'
import Loading from '../Loading/Loading'
import Paginate from './Food-Pagination';

const FoodItem = ({food,loading,match,history,}) => {
    if(loading)
        return (

            <Loading></Loading>
        )


    else if(food.food){



    return ( 
        <div>

        <Table striped  bordered>
        <thead>
        <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
      

        </tr>
        </thead>
        <tbody>

            {
            food.food.map((item,index)=>(    
            <tr key={index}>
            <td><Link to={`/food_details/${item.food_id}`}>{item.food_name}</Link></td>
            <td>{item.food_description}</td>
            <td>{item.food_type}</td>
           
            </tr>)
            )}


        </tbody>

    </Table>
    
    <Paginate food={food} match={match} history={history}/>

  </div>
 );
}

else{

    return   <div>

        <h1 className='text-danger text-center'>Food Not Found</h1>
    </div>




}
  



}
 
export default FoodItem;