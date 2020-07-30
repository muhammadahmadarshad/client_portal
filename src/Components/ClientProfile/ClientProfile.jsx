import React,{useState} from 'react'
import './ClientProfile.css'
import moment from 'moment'
import axios from 'axios'

import UpdateAccount from './UpdateAccount'
import { Button } from 'reactstrap'
import AccountTable from './Account_Table'

function ClientProfile(props) {

  const  { first_name,last_name,email,password,city,country,address,weight,height,dob,gender}=props.data
    
    const mom=moment(dob)
    const [Firstname,setFirstName] = useState({firstname:first_name,err:false,msg:''}) 
    const [Lastname,setLastName] = useState({lastname:last_name,err:false,msg:''})

    const [Password,setPassword] = useState({password:password,err:false,msg:''})

    const [Height,setHeight] = useState({height,err:false,msg:''})
    const [Weight,setWeight] = useState({weight,err:false,msg:''})
    const [Country,setCountry] = useState({country,err:false,msg:''})
    const [City,setCity] = useState({city,err:false,msg:''})
    const [Address,setAddress] = useState({address,err:false,msg:''})
    const [DOB,setDOB] = useState({dob:`${mom.year()}-${`${mom.month() +
        1}`.padStart(2, 0)}-${`${mom.date()}`.padStart(
        2,
        0
      )}`,err:false,msg:''})

    function onChangeFirstName({target}){
        
        setFirstName({err:false,msg:"",firstname:target.value})
    }

    






    function onChangeLastName({target}){

        setLastName({err:false,msg:"",lastname:target.value})

    }


    function onChangePassword({target}){


            setPassword({err:false,msg:"",password:target.value})

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
        console.log(target.value)

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



    }
    const [update,setUpdate]=useState(true)

    function onSubmit(e){

        e.preventDefault()
        
    
        const data={
            first_name:Firstname.firstname,
            last_name:Lastname.lastname,
            password,
            email,
            country:Country.country,
            address:Address.address,
            city:City.city,
            height:Height.height,
            weight:Weight.weight ,
            dob:new Date(DOB.dob),
            gender              
        }

    
        axios({

            method:'PUT',
            data,
            url:'http://localhost:5000/update_account',
            headers:{'x-auth-token':localStorage.getItem('token')}
        }).then(res=>{
            props.getData()
        })
        .catch(err=>{
            console.log(err.response.data)
            showError(err.response.data)
        })

    }

   const onClickUpdate=()=>{
        setUpdate(!update)


   }



    return (

        <div>
            
            <div > <Button onClick={onClickUpdate} className='btn-position'>
                {!update?<span className='fa fa-times'></span>:<span className='fa fa-pencil'></span>}
                
                </Button></div>
            {!update?<UpdateAccount
            
            Firstname={Firstname} Lastname={Lastname} 
            Address={Address} DOB ={DOB} City={City} Country={Country} 
            Password={Password} Weight={Weight} Height={Height} onChangeAddress={onChangeAddress} 
            onChangeCity={onChangeCity}  onChangeDOB={onChangeDOB}  onChangePassword={onChangePassword} 
            onChangeWeight={onChangeWeight} onChangeHeight={onChangeHeight} onChangeFirstName={onChangeFirstName} onChangeLastName={onChangeLastName}
            onSubmit={onSubmit}  onChangeCountry={onChangeCountry}
            />:
                <AccountTable data={props.data} />
            
            }
            </div>
       

 
    )
}

export default ClientProfile;