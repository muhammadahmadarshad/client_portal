import React from 'react'

const RecipeItem = (props) => {


    const { name, image, ingredientLines } = props
    return (
        <div className="col-sm-3">
            <div className="card py-2">
                <img src={image} alt="" className="img-fluid w-50 mx-auto rounded-circle" />
                <div className="card-body mx-auto">
                    <h4>{name}</h4>

                </div>
                <ul className="list-group  list-group-flush ">
                    <button className="btn btn-dark" data-toggle="collapse" data-target="#collapseExample" > View Ingredients</button>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            {
                                ingredientLines.map(ingredients => (
                                    <li className="list-group-item">
                                        {ingredients}
                                    </li>
                                ))
                            }
                            </div>
                            </div>
                </ul>
                    </div>
        </div>
    )

}

export default RecipeItem