import React,{useState,useEffect} from 'react'
import './ClientProfile.css'

import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'

import ClientProfile from './ClientProfile'
import Loading from '../Loading/Loading'

function Profile(props) {
   
    const [isOpen,setOpen]=useState(false)
    const [loading,setloading]=useState(true)
    const [data,setData]=useState(true)

    const getData=()=>{
        setloading(true)
      axios({
        url:'http://localhost:5000/me',
        method:'get',
        headers:{'x-auth-token':localStorage.getItem('token')}
      }).then(
        (res)=>{
            setData(res.data)
            setloading(false)
        }
      )


    }
   
    useEffect(getData,[])
    let toggle=()=>{
      setOpen(!isOpen)
  
  
  }


   


   


    return (
      <div className="App wrapper content">
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <div className={classNames('content container-fluid ',{'is-open':isOpen})}>

        <NavBar toggle={toggle} isOpen={isOpen }/>
        
        {loading?
            <Loading/>
        :
        <div>
            <ClientProfile  data={data} getData={getData}/>
        </div>}

        </div>
        </div>
    )
}

export default Profile;