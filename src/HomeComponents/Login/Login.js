import React,{useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import {Input,Form, Spinner} from 'reactstrap'
import axios from 'axios'
import {useAuth} from '../../auth'
import Header from '../Header/Header'
function Login(props) {

    const {dispatch} = useAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')
    const [err,setErr]=useState({msg:"",error:false})
    const [loading,setLoading]=useState(false)
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }
  
    const onLogin=(e)=>{

        e.preventDefault()
        setLoading(false)
        setLoading(true)
        axios({url:"http://localhost:5000/login",method:'post',data:{email,password}}).then((res)=>{
        console.log(res.data)
        dispatch({type:'set_token',payload:res.data.token})
        dispatch({type:'me',payload:res.data.me})
        localStorage.setItem('token',res.data.token)
        props.history.push('/dashboard')
        }).catch(err=>{
            
            setErr({msg:err.response.data.msg,error:true})
            setLoading(false)

        })
    
    
      }
    
    return (<div>
        <Header/>
        <div className="login">
            <div class="login-form">
                <Form onSubmit={onLogin} >
                    <h2>Log In</h2>
                    <div class="form-group">
                        <Input type="email" invalid={err.error} name="username"  placeholder="Email Address" value={email} onChange={onChangeEmail} />
                    </div>
                    <div class="form-group">
                        <Input type="password" invalid={err.error} name="password" placeholder="Password" value={password}  onChange={onChangePassword} />
                    </div>

                    <div class="form-group">
                    <button disabled={loading} type="submit" className="btn btn-block btn-warning btn-lg">{loading?<Spinner/>:"Login"}</button>
                    </div>
                    {err.error&&
                    <div class="form-group">
                    <h6 className='text-danger'>* {err.msg}</h6>
                    </div>}
                    
                </Form>
                <div className="text-center">If you dont have an account? <Link to="/signup"> Sign Up</Link> </div>
                <div className="text-center"> <Link to="/forget_password">If you have forgot password?</Link> </div>

            </div>
        </div>
        </div>
    )

}
export default Login;