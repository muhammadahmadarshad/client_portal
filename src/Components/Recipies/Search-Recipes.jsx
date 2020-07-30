import React, { useState,useEffect} from 'react';
import Header from './RecipieHeader'
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/navbar';
import classNames from 'classnames'
import axios from 'axios'
import Recipe from './Recipe';
import {useParams} from 'react-router-dom'
function SearchRecipe(props) {

  let {query,page}=useParams()

  console.log(query,page)

  const [search, setSearch] = useState(query===undefined?'':query);
  const [recipes, setRecipes] = useState({});
  const [loading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [error,setError]=useState(false)
  const [request,setRequest]=useState(false)
 
  function onInputChange(e){

    setSearch(e.target.value)

}

  function toggle(){

    setOpen(!isOpen)

  }

  useEffect(()=>{

    
    if(query!==undefined){
      setRequest(true)
      setSearch(query)
      setLoading(true)
      setError(false)
    axios({method:'get',
            url:`http://localhost:5000/search/recipes/${query}/${page-1}`
        })
    .then(res=>{
      
      setRecipes({...res.data.recipes})
      setLoading(false)
  

    })
    .catch(err=>{
        setError(true)

    })}


  },[query,page])


 function  getRecipes(){
  setError(false)
   props.history.push(`/search_recipe/${search}/${1}`)

  }

  return (


    <div className="App">
   
       <Sidebar toggle={toggle} isOpen={isOpen}/>
      

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>

       <Header search={search} onInputChange={onInputChange} onSearchClick={getRecipes}/>
       
        <div className='container'>

          {request&&
              <Recipe loading={loading} error={error} recipes={recipes} 
              match={props.match} history={props.history}
              ></Recipe>
}
        
            
            
        
      
        </div> 
       
       
      </div>

    </div>
  );
}

export default SearchRecipe;
