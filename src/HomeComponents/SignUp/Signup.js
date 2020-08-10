import React,{useState} from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import {Form,Input, Label, Spinner} from 'reactstrap'
import {countryList} from '../../Components/Countries/countries'
import axios from 'axios'
import {useAuth} from '../../auth'

function Signup(props) {
    const [Firstname,setFirstName] = useState({firstname:"",err:false,msg:''}) 
    const [Lastname,setLastName] = useState({lastname:"",err:false,msg:''})
    const [Email,setEmail] = useState({email:"",err:false,msg:''})
    const [Password,setPassword] = useState({password:"",err:false,msg:''})
    const [Ret_type,set_Retype] = useState({password:"",err:false,msg:'',matched:true})
    const [Height,setHeight] = useState({height:"",err:false,msg:''})
    const [Weight,setWeight] = useState({weight:"",err:false,msg:''})
    const [Country,setCountry] = useState({country:"",err:false,msg:''})
    const [City,setCity] = useState({city:"",err:false,msg:''})
    const [Address,setAddress] = useState({address:"",err:false,msg:''})
    const [DOB,setDOB] = useState({dob:"",err:false,msg:''})
    const [Gender,setGender]=useState({gender:"",err:false,msg:''})
    const [loading,setLoading]=useState(false)
    const {dispatch}=useAuth()

    function onChangeFirstName({target}){
        
        setFirstName({err:false,msg:"",firstname:target.value})

    }

    function onChangeGender(e){

        setGender({...Gender,gender:e.target.value})
    }

    function onChangeLastName({target}){

        setLastName({err:false,msg:"",lastname:target.value})

    }

    function onChangeEmail({target}){
        setEmail({err:false,msg:"",email:target.value})
    }

    function onChangePassword({target}){
        if(target.value===Ret_type.password)
        {set_Retype({err:false,msg:"",password:target.value,matched:true})
        setPassword({err:false,msg:"",password:target.value})}
        else{

            setPassword({err:false,msg:"",password:target.value})
        }
    }


    function onChangeRe_type({target}){

        if(target.value===Password.password)
        set_Retype({err:false,msg:"",password:target.value,matched:true})
        else 
        set_Retype({err:false,msg:"",password:target.value,matched:false}) 
    }


    function onChangeHeight({target}){

        setHeight({err:false,msg:"",height:target.value})

    }


    function onChangeWeight({target}){

        setWeight({err:false,msg:"",weight:target.value})

    }


    function onChangeCountry({target}){

        setCountry({err:false,msg:"",country:target.value})

    }


    function onChangeCity({target}){

        setCity({err:false,msg:"",city:target.value})

    }

    function onChangeDOB({target}){

        setDOB({err:false,msg:"",dob:target.value})

    }

    function onChangeAddress({target}){

        setAddress({address:target.value,err:false,msg:""})

    }

    function showError(data){

        if(data.path[0]==='first_name'){

            setFirstName({...Firstname,err:true,msg:data.message})

        }

        else if(data.path[0]==='last_name'){

            setLastName({...Lastname,err:true,msg:data.message})

        }

        else if(data.path[0]==='email'){

            setEmail({...Email,err:true,msg:data.message})
        }

       else if(data.path[0]==='password'){

            setPassword({...Password,err:true,msg:data.message})

        }

        else if(data.path[0]==='country'){

            setCountry({...Country,err:true,msg:data.message})

        }

        else if(data.path[0]==='city'){

            setCity({...City,err:true,msg:data.message})

        }

        else if(data.path[0]==='address'){

            setAddress({...Password,err:true,msg:data.message})
        }

        else if(data.path[0]==='weight'){

            setWeight({...Weight,err:true,msg:data.message})

        }

        else if(data.path[0]==='height'){

            setHeight({...Height,err:true,msg:data.message})

        }

        else if(data.path[0]==='dob'){

            setDOB({...DOB,err:true,msg:data.message})

        }

        
        else if(data.path[0]==='gender'){

            setGender({...Gender,err:true,msg:data.message})

        }



    }



    function onSubmit(e){

        e.preventDefault()
        
        const data={
            first_name:Firstname.firstname,
            last_name:Lastname.lastname,
            gender:Gender.gender,
            password:  Password.password,
            email:Email.email,
            country:Country.country,
            address:Address.address,
            city:City.city,
            height:Height.height,
            weight:Weight.weight ,
            dob:new Date(DOB.dob)              
        }

        if(data.password===Ret_type.password){
        setLoading(true)
        axios({

            method:'POST',
            data,
            url:'http://localhost:5000/signup'
        }).then(res=>{
            dispatch({type:'set_token',payload:res.data.token})
            localStorage.setItem('token',res.data.token)
            setLoading(false)
            props.history.push('/dashboard')
        })
        .catch(err=>{
            const {data}= err.response
            setLoading(false)
            showError(data)

        })

    }}



    return (
        <div className="signup">
            <div class="signup-form">
                <Form onSubmit={onSubmit} >
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">First Name:<Input value={Firstname.firstname} invalid={Firstname.err} onChange={onChangeFirstName} type="text" className="form-control" placeholder="First Name" />
                            {Firstname.err&&<span className='text-danger'>{Firstname.msg}</span>}
                            </div>
                            <div className="col-sm-6">Last Name :<Input type="text" value={Lastname.lastname} onChange={onChangeLastName} className="form-control" placeholder="Last Name" />
                            {Lastname.err&&<span className='text-danger'>{Lastname.msg}</span>}
                            </div>
                            
                        </div>
                    </div>


                    <div class="form-group ">
                    Gender:
                            <div className='row text-center'>
                            
                            <div className='col-sm-6'>
                            <Label htmlFor='male'>
                            <Input onChange={onChangeGender}  name='gender' id='male' value='Male' type="radio" /> Male
                            </Label>
                            </div>
                            <div className='col-sm-6'>
                            <Label>
                            <Input onChange={onChangeGender} htmlFor='female' name='gender' id='female' value= "Female" type="radio" />
                            Female
                            </Label>
                            
                            </div>

                            {Gender.err&&<span className='text-center text-danger'>{Gender.msg}</span>}
                            </div>
                            
                            
                            

                        
                    </div>







                    <div class="form-group">
                        <div className="row">
                            <div className="col-sm-6">Email Address:<Input invalid={Email.err} value={Email.email} 
                            
                            type="email" className="form-control" placeholder="Email"
                            onChange={onChangeEmail}    
                            />
                            {Email.err&&<span className='text-danger'>{Email.msg}</span>}
                            </div>
                            <div className="col-sm-6">DOB: 
                            
                            <Input value={DOB.dob} onChange={onChangeDOB} type="date" id="birthday"  name="birthday" className="form-control" />
                            {DOB.err&&<span className='text-danger'>{DOB.msg}</span>}
                            </div>
                            

                            
                        </div>
                    </div>
                    <div class="form-group">
                        <div className="row">

                            <div className="col-sm-6">Password:
                            <Input value={Password.password} onChange={onChangePassword} type="password" className="form-control" placeholder="Password" />
                            {Password.err&&<span className='text-danger'>{Password.msg}</span>}
                            </div>
                            <div className="col-sm-6">Re-Enter Password:
                            <Input type="password" value={Ret_type.password} invalid={!Ret_type.matched || Ret_type.err || Password.err} onChange={onChangeRe_type} className="form-control" placeholder="Confirm Password" />
                            {!Ret_type.matched&&<span className='text-danger'>*Must be matched with Password</span>}
                            {Password.err&&<span className='text-danger'>{Password.msg}</span>}
                            </div>
                            

                        </div>
                    </div>
                    <div class="form-group">
                        <div className="row">
                           
                            <div className="col-sm-6">Weight:
                            <Input type="number" value={Weight.weight} invalid={Weight.err} onChange={onChangeWeight} className="form-control" placeholder="Weight" />
                            {Weight.err&&<span className='text-danger'>{Weight.msg}</span>}
                            </div>
                            <div className="col-sm-6">Height:
                            <Input type="number" value={Height.height} invalid={Height.err} onChange={onChangeHeight} className="form-control" placeholder="Height" />
                            {Height.err&&<span className=' text-danger'>{Height.msg}</span>}
                            </div>
                            
                        
                        </div>
                        
                        
                    </div>
                    <div class="form-group">
                        <div className="row">
                        <div className="col-sm-6">Country:<Input id="country" type='select' invalid={Country.err}  value={Country.country} onChange={onChangeCountry} name="country" class="form-control" >
                                <option value="0" className="display">Select Country</option>
                            {countryList.map((country,index)=>(<option key={index} value={country}>{country}</option>))}
                
                            </Input> 
                            {Country.err&&<span className='text-danger'>{Country.msg}</span>}
                            
                            </div>
                            <div className="col-sm-6">City:<Input value={City.city} invalid={City.invalid} onChange={onChangeCity} type= "text" className="form-control" placeholder="City" />
                            {City.err&&<span className='text-danger'>{City.msg}</span>}
                            </div>
                            

                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">Address:<Input invalid={Address.err} type='textarea' value={Address.address} onChange={onChangeAddress} className="form-control" placeholder="Address" />
                    {Address.err&&<span className='text-danger'>{Address.msg}</span>}
                    </div>
                    
                    </div>
                    <div >
                    
                    <div class="row mt-3">
                        <div className='col-sm-12'><button disabled={loading} type="submit" className="btn btn-warning btn-lg btn-block">{!loading?'Register Now':<Spinner/>}</button>
                        <div className="text-right">Already have an account? <Link to="/login">Sign in</Link></div>
                   
                    </div>
                    </div>
                    </div>
                    
                </Form>
                

            </div>
        </div>
    )
}

export default Signup;