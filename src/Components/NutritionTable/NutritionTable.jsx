import React from 'react';
import {Table} from 'reactstrap'
export default function NutritionTable(props)
{

    const {
        calcium,
        calories,
        carbohydrate,
        cholesterol,
        fat,
        fiber,
        iron,
        monounsaturated_fat,
        polyunsaturated_fat,
        potassium,
        protein,
        saturated_fat,
        serving_size,
        sodium,
        sugar,
        trans_fat,
        vitamin_a,
        vitamin_c,
    }=props.facts



return (
    <div>
        <Table striped size='md'>
            <tbody>
                <tr>
                <th>Calories</th>
                <td>{calories} cal</td>   
                </tr> 
                <tr>
                <th>Serving Size</th>
                <td>{serving_size}</td>   
                </tr> 
               <tr>
                <th>Total Fats</th>
                <td>{fat}g</td>   
                </tr> 

                <tr>
                <td>Saturated Fats</td>
                <td>{saturated_fat}g</td>   
                </tr> 
                <tr>
                <td>Trans Fats</td>
                <td>{trans_fat} g</td>   
                </tr>

                <tr>
                <td>Monounsaturated Fats</td>
                <td>{monounsaturated_fat}g</td>   
                </tr>
                <tr>
                <td>Polyunsaturated Fats</td>
                <td>{polyunsaturated_fat}g</td>   
                </tr>

                <tr>
                <th>Cholesterol</th>
                <td>{cholesterol} mg</td>   
                </tr> 
                <tr>
                <th>Sodium</th>
                <td>{sodium} mg</td>   
                </tr> 

                <tr>
                <th>Carbohydrates</th>
                <td>{carbohydrate} g</td>   
                </tr> 


                <tr>
                <td>Dietry Fiber</td>
                <td>{fiber} g</td>   
                </tr>

                <tr>
                <td>Sugar</td>
                <td>{sugar} g</td>   
                </tr>

                <tr>
                <th>Protein</th>
                <td>{protein} g</td>   
                </tr> 
                
                <tr>
                <td>Calcium</td>
                <td>{calcium} mg</td>   
                </tr>
                
                <tr>
                <td>Iron</td>
                <td>{iron} mg</td>   
                </tr>
                
                <tr>
                <td>Potassium</td>
                <td>{potassium} mg</td>   
                </tr>


                <tr>
                <td>Vitamin A</td>
                <td>{vitamin_a} IU </td>   
                </tr>

                <tr>
                <td>Vitamin C</td>
                <td>{vitamin_c} mg</td>   
                </tr>



            
               




            </tbody>




        </Table>



    </div>


)






}
