import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'
import { Input, Label,Form,FormGroup} from 'reactstrap';
import {specialities} from './specialities'
import { useState } from 'react';
import Axios from 'axios';
import ListContainer from './NutritionistList';
export default function Nutrionists(props)  {
  const [isOpen,setOpen]=useState(false)
   const [data,setdata]=useState([])
   const [loading,setLoading]=useState(false)
   const [err,setError]=useState(false)
  let [query,setQuery]=useState('')


  let toggle=()=>{
      setOpen(!isOpen)
   }
  function onChange(e){
    setQuery(e.target.value)
  }

function  onsubmit(e){
    
    e.preventDefault()
    setLoading(true)
    Axios({method:'POST',url:'http://localhost:5000/nutritionist/find',data:{query}})
    .then(res=>{
        setdata(res.data)
        setLoading(false)
        setError(false)
    })
    .catch(err=>{
        setError(true)
        setLoading(false)
    })
}
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
        
        <div className="container">
                <h1 className='text-center'>Nutrionists</h1>
            <div className="jumbotron">
                <Form onSubmit={onsubmit}>
                <FormGroup>
                <Label for='query'>Select Speciality</Label>
                <Input type='select' value={query} id='query' onChange={onChange} required >

                    <option value=''>Select Speciality</option>
                    {
                        specialities.map((sp,i)=><option key={i} value={sp}>{sp}</option>)
                    }
                </Input>
                </FormGroup>
                    <FormGroup>
                        <Input className='btn-primary' type='submit' value='Search'></Input>
                    </FormGroup>
                </Form>

            </div>

            <div>
                <ListContainer data={data} loading={loading} err={err}></ListContainer>
            </div>
        </div>

       </div>


               
        
        </div>

    );
  
}
