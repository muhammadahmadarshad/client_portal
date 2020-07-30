import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './Food&Recipes.css'
import RecipeItem from './RecipeItem'
function Food_Recipes() {

    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        getRecipes();
    });

    const getRecipes = async () => {
        const res = await Axios.get(
            `https://api.edamam.com/search?q=${search}&app_id=ac851001&app_key=6ae408f7c4201156ea565140fc7350db`
        );

        setRecipes(res.data.hits)

    }

    const onInputChange = (event) => {
        setSearch(event.target.value)
    };

    const onSearchClick = () => {
        getRecipes();
    };

    return (
        <div className="recipes">
            <div className="jumbotron jumbotron-search ">
                <h1 className='display-4'>
                    <i className="material-icons search-icons text-white">menu_book</i>
                    <span className="text-white">   Search Food Recipe  </span>
                </h1>
                <div className="input-group w-50 mx-auto " >
                    <input type="text" className="form-control" placeholder="Search Recipe..." value={search} onChange={onInputChange} />
                    <div className="input-group-append">
                        <button className="btn btn-warning" onClick={onSearchClick}> Search</button>
                    </div>
                </div>
            </div>
            <br />

            <div className="jumbotron bg-white Jumbotron">

                <div className="container">
                    <div className="row">
                        {
                            recipes.map(recipe => (
                                <RecipeItem name={recipe.recipe.label}
                                    image={recipe.recipe.image}
                                    ingredientLines={recipe.recipe.ingredientLines}
                                />

                            ))
                        }


                    </div>
                </div>

            </div>


        </div>

    )
}

export default Food_Recipes;