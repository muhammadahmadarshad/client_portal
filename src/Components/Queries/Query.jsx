import React ,{useState,useEffect}from 'react';

import classNames from 'classnames'

import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/navbar';
import Loading from '../Loading/Loading';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


  


export default function Query(props)  {

  const [isOpen,setOpen]=useState(false)
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState({})
  const [err,setError]=useState(false) 
  const {id}=useParams()

  
  
  let toggle=()=>{
      setOpen(!isOpen)
   }

let getData=()=>{
    setLoading(true)
    Axios({method:"GET",url:'http://localhost:5000/query/message_by_id/'+id,headers:{
        'x-auth-token':localStorage.getItem('token')
    }}).then(res=>{
        console.log(res.data)
        setData(res.data)
        setLoading(false)
        
        setError(false)

    })
    .catch(err=>{


        setError(true)
        setLoading(false)
    })


   }
   useEffect(getData,[id])

if(loading){


    return (        
    <div className="App wrapper content">     
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    <div className={classNames('content container-fluid',{'is-open':isOpen})}>
    <NavBar toggle={toggle} isOpen={isOpen }/>
        <Loading></Loading>
    </div>


            
     
     </div>
)


}  

else if(err){


    return (        
    <div className="App wrapper content">     
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    <div className={classNames('content container-fluid',{'is-open':isOpen})}>
    <NavBar toggle={toggle} isOpen={isOpen }/>
        <h1 className='text-center text-danger'>Not Found</h1>
    </div>


            
     
     </div>
)


} else {
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
       <div className='container'>

       <h3 className='text-primary'>Message:</h3>

        <div className='jumbotron bg-primary text-white'>
        
            <p className='text-left'>{data.query}</p>
        </div>

        
        <div >
               
        <h3 className='text-primary'>Response:</h3>
                <div className='jumbotron'>
                    
                    <p className='text-left'>{data.response}</p>
            
                    </div>
              
            


        </div>

       </div>


       </div>
        
        </div>

    );
  
}}
