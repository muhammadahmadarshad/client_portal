import React from "react";
import RecipeItem from "./RecipeItem";
import Loading from '../Loading/Loading'
import Paginate from '../Paginate/Paginate'

const Recipe = (props) => {
   
    const {loading,error} =props;
    
    if(error){

      return (

        <div>
            <h1 className='text-center text-danger'>
              Network Error
            </h1>       
        </div>
      )
    }

   else if(loading )
        return (
          <Loading/>)

    const { recipes,match,history} = props;
    const {recipe}=recipes
    return (
        <div>
       {
        recipe? <div >

        
        <div className='row'>
          {recipe.length ?recipe.map((recipee,index) => (
            <RecipeItem name={recipee.recipe_name} 
            id={recipee.recipe_id}
            image={recipee.recipe_image}
            description={recipee.recipe_description}
            key={index}
          />

    )):<RecipeItem name={recipe.recipe_name} 
        
    image={recipe.recipe_image}
    id={recipe.recipe_id}
    description={recipe.recipe_description}
     />}</div> 


      <Paginate recipe={recipes} match={match} history={history}></Paginate>

        </div>:
        <h1 className='text-center text-danger'><i className='fa fa-times'> Recipe Not Found</i></h1>
          }
        
        </div>
       
    );
}
export default Recipe