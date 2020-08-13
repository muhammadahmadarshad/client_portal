import React ,{useState,useEffect}from 'react';

import classNames from 'classnames'
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../Navbar/navbar';
import Loading from '../Loading/Loading';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import { Table, Button,Modal,ModalHeader,ModalFooter, Spinner, } from 'reactstrap';
import moment from 'moment'
  


export default function DietPlanDetails(props)  {

  const [isOpen,setOpen]=useState(false)
  const [loading,setLoading]=useState(true)
  const [err,setErr]=useState(false)
  const [data,setData]=useState()
  const [removing ,setremoving]=useState(false)

  const [modal,setmodal]=useState(false)

  let modal_toggle=()=>{

    setmodal(!modal)

  }
  let toggle=()=>{
      setOpen(!isOpen)
   }

   let {id}=useParams()


   useEffect(()=>{

    Axios({method:'get',url:`http://localhost:5000/diet_plan/get_diet_plan_details/${id}`,headers:{'x-auth-token':localStorage.getItem('token')}})
    .then(res=>{
        setData(res.data)
        setLoading(false)
        setErr(false)
    })
    .catch(err=>{

        setErr(true)
        setLoading(false)
    })


   },[id])

const delete_plan=()=>{

    setremoving(true)
    Axios({method:'DELETE',url:`http://localhost:5000/diet_plan/plan_delete/${data._id}`,headers:{'x-auth-token':localStorage.getItem('token')}})
    .then(res=>{
       setremoving(false)
        props.history.push('/dashboard')

    })
    .catch(err=>{
        setremoving(false)
    })


}


if(loading)
{
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
            <Loading/>

       </div>


               
        
        </div>

    );

}

else if(err){

    return(

    <div className="App wrapper content">  
       
       
    <Sidebar toggle={toggle} isOpen={isOpen}/>

    <div className={classNames('content container-fluid',{'is-open':isOpen})}>
    
    <NavBar toggle={toggle} isOpen={isOpen }/>
         <h1 className='text-center text-danger'>Not Available</h1>

    </div>
          
     </div>)


}


  else
    return (
<div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
        
        <div className='container '>
            <h3 className='text-primary' style={{textAlign:"center"}}>Diet Plan Details</h3>
            <hr/>
            <div>
            <Table striped className='w-75 m-auto' >

                <tbody>
                    <tr>
                        <th>Owner Name</th>
                        <td>{data.owner_id.first_name+" "+data.owner_id.last_name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{data.owner_id.email}</td>
                    </tr>
                    <tr>
                    <th>Gender</th>
                        <td>{data.owner_id.gender}</td>
                    </tr>
                    <tr>
                    <th>BMI</th>
                        <td>{data.owner_id.weight/Math.pow(data.owner_id.height/100,2)}</td>
                    </tr>
                    <tr>
                        <th>Diet Plan Purpose</th>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <th>Duration</th>
                    <td>{data.duration}</td>
                    </tr>

                    <tr>
                        <th>Started Date</th>
                        <td>
                            {moment(data.start_date).calendar()}
                        </td>
                    </tr>
                    <tr>
                        <th>End Date</th>
                        <td>
                            {(moment(data.start_date)).add(data.duration,'days').calendar()}
                        </td>
                    </tr>


                    <tr>
                        <th>Created By</th>
                        <td>{data.created_by?data.created_by.first_name+" "+data.created_by.last_name:'N/A'}</td>
                    </tr>
                </tbody>
            </Table>

            <div>



            </div>





            <div className="row mt-5">
                <div className="col-md-12 col-12 ">
                  <Link className='btn btn-primary btn-block w-75 m-auto' to={`/personal_diet/1`}>Show Diet Plan</Link>
                  <div className='mt-3'>
                 <Button className='w-75 m-auto' color="danger" block  onClick={modal_toggle}>Delete Diet Plan</Button>
      <Modal isOpen={modal} toggle={modal_toggle}  backdrop='static'   >
        <ModalHeader toggle={modal_toggle} className='text-center'>Are You Sure?</ModalHeader>

        <ModalFooter>
          <Button color="primary" onClick={delete_plan}>{!removing?'Yes':<Spinner/>}</Button>{' '}
          <Button color="secondary" onClick={modal_toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>

                </div>
            </div>
            </div>
            
        </div>

       </div>


               
        
        </div>

    );
  
}
