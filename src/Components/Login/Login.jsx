import React,{useState} from 'react';
import {Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import {Link} from 'react-router-dom' 
import './Login.css'
import {useAuth} from '../../auth'
import axios from 'axios'
export default function Login (props) {

 let [email,setEmail]=useState('')
 let [password,setPassword]=useState('')
  const {dispatch}=useAuth()
  const changeEmail=(e)=>{


    setEmail(e.target.value)


  }

 const changePassword=(e)=>{


    setPassword(e.target.value)


  }


  const onLogin=(e)=>{

    e.preventDefault()

    axios({url:"http://localhost:5000/login",method:'post',data:{email,password}}).then((res)=>{
    dispatch({type:'set_token',payload:res.data.token})
    localStorage.setItem('token',res.data.token)
    props.history.push('/dashboard')
    })


  }



  
    return (
      <div className='box' >
      <h2 className='text-center text-design text-dark mb-2 text-shadow'>Health Portal</h2>
      <div className='jumbotron  login-center'>
      
      <i className='fa  avatar fa-user'></i>
       
      <form onSubmit={onLogin}>
          
        <div className='mt-2'>
      
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText className='bg-white ' > <span className='pt-1 pb-1 text-center  fa fa-envelope-o '></span></InputGroupText>

          </InputGroupAddon>
          <Input onChange={changeEmail} value={email} placeholder="Enter Email" invalid={false} type='email' />
        </InputGroup>
        
        </div>
        <div className='mt-2'>
        <InputGroup>
        <InputGroupAddon>
          <InputGroupText className='bg-white ' > <span className='p-1  fa fa-lock '></span></InputGroupText>

        </InputGroupAddon>
       
      

        <Input onChange={changePassword} value={password} placeholder="Enter Password" type='password' />
        </InputGroup>
        </div>
        <div className='mt-4 btn-center'> 
        <Input type='submit' value='Login'  className='bg-success text-white'></Input>
        
       
        </div>
        <div className='text-center mt-4'>
        <Link className='text-primary' to='/forgotPassword'>Forgot Password?</Link>
        
        </div>
        <div className='text-center mt-4'>
        <Link to='/signup'  className='text-primary'>Don't have account? Create Account.</Link>
        </div>
        </form>
      </div>
      </div>
    );
 
}
