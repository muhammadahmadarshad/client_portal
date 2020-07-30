import React from 'react';
import Loading from '../Loading/Loading';
import DietPlanItem from './DietPlanItem';
import Paginate from '../../HomeComponents/Shop/Paginate'
import moment from 'moment'
import { Table } from 'reactstrap';
const DietPlanTable = (props) => {

    let {loading,items,created_by} = props
    if(loading)
    return <Loading/>
    else if(created_by){

        return ( 
    
    
            <div><Table striped className='mb-4'>
        
                <thead>
                <tr>
                <th scope='col'>Food Name</th>
                <th scope='col'>Meal</th>
                <th scope='col'>Taken</th>
                <th scope='col'>Time to Eat</th>

                </tr>
        
        
                </thead>
        
                <tbody>
                {items.map((item,index)=>{
                    return(
        
                       <tr>
                           <td data-label='Food Name'>{item.food.food_name}</td>
                           <td data-label='Meal' className='p-1'>{item.meal}</td>
                           <td data-label='taken' className='p-1'>{item.taken?'Yes':'No'}</td>
                    <td data-label='Time to Eat'>{moment(item.time_to_eat).calendar()}</td>
                       </tr>)
                })}
        
                </tbody>
                <tfoot></tfoot>
            </Table> 
        
                <Paginate total_results={props.total_results} 
                history={props.history}
                match={props.match} url={props.url} />
            </div>);




    }
    return ( 
    
    
    <div><table className='mb-4'>

        <thead>
        <tr>
        <th scope='col'>Food Name</th>
        <th scope='col'>Meal</th>
        <th scope='col'>Taken</th>
        <th scope='col'>Time to Eat</th>
        <th scope='col'>Update</th>
        <th scope='col'>Remove</th>
        </tr>


        </thead>

        <tbody>
        {items.map((item,index)=>{
            return(

                <DietPlanItem  getDietPlan={props.getDietPlan} key={index} item={item}/>)
        })}

        </tbody>
        <tfoot></tfoot>
    </table> 

        <Paginate total_results={props.total_results} 
        history={props.history}
        match={props.match} url={props.url} />
    </div>);
}
 
export default DietPlanTable;