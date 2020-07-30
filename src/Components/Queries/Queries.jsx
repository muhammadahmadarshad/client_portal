import React ,{useState,useEffect}from 'react';

import classNames from 'classnames'

import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/navbar';
import Loading from '../Loading/Loading';
import Axios from 'axios';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment'

  


export default function Queries(props)  {

  const [isOpen,setOpen]=useState(false)
  const [loading,setLoading]=useState(true)
  const [data,setData]=useState([])
  const [err,setError]=useState(false) 
  let toggle=()=>{
      setOpen(!isOpen)
   }


   useEffect(()=>{
        setLoading(true)
     
        Axios({method:'get',url:'http://localhost:5000/query/get_all_messages/'+props.match.params.id,headers:{'x-auth-token':localStorage.getItem('token')}})
        .then(res=>{
            console.log(res.data)
            
            setData(res.data)
            setLoading(false)
           
            setError(false)
        })
        .catch(()=>{
            setError(true)
            setLoading(false)


        })

   },[])

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


}  
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
       <div className='container'>

            <h1 className='text-center'>Query</h1>


        <Table striped>

            <thead className='bg-primary text-white'>
                <tr>
                    <th>Message</th>
                    <th>Time</th>
                    <th>Response</th>
                </tr>
            </thead>


            <tbody>
                {data.messages.map(item=>{
                    let {response,query,createdAt,_id}=item
                        console.log(item)
                    return(
                        <tr key={_id}>
                            <td>{query}</td>
                            <td>{moment(createdAt).calendar()}</td>
                             <td>{response?response:"Pending"}</td>
                        
                        </tr>

                    )
                })}
                
            </tbody>
        </Table>



       </div>


       </div>
        
        </div>

    );
  
}
