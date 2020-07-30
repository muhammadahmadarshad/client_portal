import React from 'react'
import classNames from 'classnames'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import Axios from 'axios'
import {Table} from 'reactstrap'
import Loading from '../Loading/Loading'
import NutritionTable from '../NutritionTable/NutritionTable'
const Recipe_Details = (props) => {

    const {id}=props.match.params
    const [isOpen,setOpen]=React.useState(false)
    const [recipe,setRecipe]=React.useState({})
    const [loading,setLoading]=React.useState(true)
    function toggle(){

        setOpen(!isOpen)
    }

    React.useEffect(()=>{

        getDetails(id)




    },[id])




    function getDetails(recipeID){
        
        Axios({method:'GET',
                url:`http://localhost:5000/search/recipiesByID/${recipeID}`
        
            })
        .then(res=>{
            console.log(res.data)
            setRecipe({...res.data.recipe})
            setLoading(false)
        })
        .catch(err=>console.log(err))

    }

    return (
<div className="App">
   
   <Sidebar toggle={toggle} isOpen={isOpen}/>
  

   <div className={classNames('content container-fluid',{'is-open':isOpen})}>
   
   <NavBar toggle={toggle} isOpen={isOpen }/>
    {!loading?
            <div className='container'>
                <h2 className='text-primary text-center'>{recipe.recipe_name}</h2>

                
                { !recipe.recipe_images?
                 
                 
                 <img src='https://www.leezed.com/assets/images/noimage.jpg' alt={recipe.recipe_name} />
              
              
                 :<img className='rounded cover' src={recipe.recipe_images['recipe_image']} width="100%" height="600em" alt={recipe.recipe_name} />    
             
             }


<div>
                <Table className='mt-5'>
                    <tbody>
                    <tr>
                        <td>Description</td>
                        <td>{recipe.recipe_description}.</td>
                        

                    </tr>

                    <tr>
                        <td>Servings</td>
                        <td>{recipe.number_of_servings}</td>
                        

                    </tr>

                    <tr>
                        <td>Categories</td>
                        <td>{recipe.recipe_categories.recipe_category.map(item=>{

                            return item.recipe_category_name+", "

                        })}.</td>

                        
                        

                    </tr>
                    {recipe.recipe_types.size?<tr>
                        <td>Recipe Types</td>
                        <td>{recipe.recipe_types.recipe_type.map(item=>{

                            return item+", "

                        })}.</td>
                       
                        
                        

                    </tr>:
                    <tr>
                    <td>Recipe Types</td>
                    <td>{recipe.recipe_types.recipe_type}</td>
                   
                    
                    

                </tr>
                    
                    
                    
                    }
                    </tbody>
                </Table>
                </div>
                <h3><i>Nutrition Facts</i></h3>
                <hr/>
                <NutritionTable facts={recipe.serving_sizes.serving}/>
                 
            
            <div className='row mt-2'>

                <div className='col-md-6  col-12 '>

                <div>
                    <h3><i>Ingredients</i></h3>
                    <hr/>
                    <ol>    
                    {recipe.ingredients.ingredient.map((item,index)=>{

                        return(

                        <li className='p-1' key={index}>  {item.ingredient_description}</li>
                        )

                    })}
                </ol>


                </div>
               


                </div>


                <div className='col-md-6  col-sm-6 col-12'>
                
                <h3><i>Directions</i></h3>
                <hr/>
                <ol>    
                    {recipe.directions.direction.map((item,index)=>{

                        return(

                        <li className='p-1' key={index}>  {item.direction_description}</li>
                        )

                    })}
                </ol>
                 <div> 

   



                </div>

                

                </div>




            </div>
        
            </div>
            :<div className='m-auto'>

                <Loading/>
            </div>





    }




    </div>
    </div>
    )
}

export default Recipe_Details

