import React,{useState} from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'
import {Form, FormGroup, Input, Button} from 'reactstrap'

import Axios from 'axios';

export default function ChangePassword(props)  {

  const [isOpen,setOpen]=React.useState(false)
  const [password,setPassword]=useState({value:"",msg:'',err:false})
  const [new_password,setNewPassword]=useState({value:"",msg:'',err:false})
  const [err,setErr] = useState(false)
  const [sucess,setSuccess]= useState(false)

  function onChangePassword ({target}){
    setPassword({value:target.value,msg:"",err:false})

  }

  function onChangeNewPassword ({target}){
    setNewPassword({value:target.value,msg:"",err:false})
  }


  let toggle=()=>{
      setOpen(!isOpen)
   }


   function onSubmit(e){
    e.preventDefault()

     if(!new_password.value){
        setPassword({...new_password,msg:"Should not be Empty",err:true})
    }

    else if(new_password.value.length<5){
        setNewPassword({...new_password,msg:"Password must be greater than 5 charactars.",err:true})
    }

    else{

        Axios({method:"put",
    
        url:"http://localhost:5000/change_password",
        headers:{'x-auth-token':localStorage.getItem('token')},
        data:{password:password.value,new_password:new_password.value}
    }).then(()=>{

        setSuccess(true)
        setErr(false)
    })
    .catch(()=>{

        setPassword({...password,err:true})
        setErr(true)
    })
    }
   }

  
    return (
        <div className="App wrapper content">  
       
       
       <Sidebar toggle={toggle} isOpen={isOpen}/>

       <div className={classNames('content container-fluid',{'is-open':isOpen})}>
       
       <NavBar toggle={toggle} isOpen={isOpen }/>
       <div className='container-fluid'>
        <div className='jumbotron w-50 m-auto'>
            <h3>Change Password</h3>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                Password:
                <Input 
                invalid={password.err} 
                value={password.value} onChange={onChangePassword} placeholder='Current Password'>
                </Input>
            </FormGroup>
            <FormGroup>
                New Password:
                <Input value={new_password.value}
                    invalid={new_password.err}
                    onChange={onChangeNewPassword}
                    placeholder='New Password'
                ></Input>
                {new_password.err&&<span>{new_password.msg}</span>}
            </FormGroup>
            <FormGroup>
            
                <Button block color='success' type='submit'>Update</Button>
            </FormGroup>
        </Form>

        {err&&<span className='text-danger'>Invalid Password</span>}
        {sucess&&<span className='text-success'>Successfully Updated</span>}
        </div>




       </div>
       </div>
       </div>
       
       )}