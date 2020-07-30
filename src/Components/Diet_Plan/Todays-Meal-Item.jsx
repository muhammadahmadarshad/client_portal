import React, { useState } from 'react'
import moment from 'moment'
import {Input, FormGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
const TodaysMealItem = (props) => {
    const {item,getTodaysMeal}=props
    const [taken,setTaken]=useState(item.taken)
    const onChangeTaken=(e)=>{
        setTaken(e.target.checked)
        
    }

    
const update_item=(e)=>{
    console.log(item.time_to_eat)
    axios({
        method:'put',
        url:`http://localhost:5000/diet_plan/update_meal`,
        data:{_id:item._id,time_to_eat:item.time_to_eat,taken:e.target.checked,food:item.food._id,meal:item.meal},
        headers:{'x-auth-token':localStorage.getItem('token')}
    }).then((res)=>{
       getTodaysMeal()
    }).catch(err=>{
        console.log(err.response.data)
    })
    }
    return ( <tr >
    <td data-label="name">
    {<Link to={`/food_details/${item.food.food_id}`}>{item.food.food_name}</Link>}
    </td>
    <td data-label='Time to Eat.'>
    { moment(item.time_to_eat).calendar()}
    </td>
    <td data-label="meal">
    {item.meal}
    </td>
    <td data-label='Taken'>
        {<FormGroup>
            <Input style={{width:20,height:20}} checked={taken} type='checkbox' onClick={update_item} onChange={onChangeTaken} />
        </FormGroup>
        }
    </td>
</tr> );
}
 
export default TodaysMealItem;