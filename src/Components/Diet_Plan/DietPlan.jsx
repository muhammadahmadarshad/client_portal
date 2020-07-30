import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'

import axios from 'axios'
import MakeDietPlan from './MakeDietPlan'
import DietPlanTable from './DietPlanTable';
import { useParams } from 'react-router-dom';

const DietPlan = (props) => {
    const [isOpen,setOpen]=React.useState(false)
    const [title,setTitle]=React.useState({value:'',err:false,msg:"Required"})
    const [start_date,setStartDate]=React.useState({value:'',err:false,msg:""})
    const [duration,setDuration]=React.useState({value:'',err:false,msg:""})
    const [plan,setDietPlan]= React.useState()
    const [loading,setLoading]= React.useState(false)

    const {page}=useParams()
    function onChangeTitle(e){
        setTitle({value:e.target.value,err:false,msg:''})
    }

    function onChangeStartDate(e){
        setStartDate({value:e.target.value,err:false,msg:''})
    }
    function onChangeDuration(e){
        setDuration({value:e.target.value,err:false,msg:''})
    }


    


    const getDietPlan=()=>{
        if(parseInt(page)>0){
            setLoading(true)
        
            
        axios({url:`http://localhost:5000/diet_plan/get_diet_plan/${page}`,
            headers:{'x-auth-token':localStorage.getItem('token')},
            method:'get'
    }).then(res=>{
        console.log(res.data)
        setDietPlan(res.data)
        setLoading(false)
    }).catch(err=>{

        setLoading(false)
    })
}

    else{

        props.history.push('/personal_diet/1')
    }

    }

    React.useEffect(

        getDietPlan
    ,[page])

    function onSubmit(e){
        e.preventDefault();
        axios({url:'http://localhost:5000/diet_plan/make_diet_plan',
            method:'post',
            data:{start_date:new Date(start_date.value),title:title.value,duration:duration.value},
            headers:{'x-auth-token':localStorage.getItem('token')}        
        }).then(res=>{

            getDietPlan()
        }).catch(err=>{
            console.log(err.response)
           let {data}=err.response
    
            if (!data['path']){


            }
            else if(data['path'][0]==='title'){

                setTitle({...title,err:true,msg:data.message})
            }
            else if(data.path[0]==='start_date'){

                setStartDate({...start_date,err:true,msg:data.message})
            }

            else if(data.path[0]==='duration'){

                setDuration({...duration,err:true,msg:data.message})
            }


        })
    }
    let toggle= ()=>{
        setOpen(!isOpen)
     }
    return ( <div className='App wrapper content'>
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    <div className={classNames('content container-fluid',{'is-open':isOpen})}>
    <NavBar toggle={toggle} isOpen={isOpen }/>
    <div className='container' >
     {!plan?
        <MakeDietPlan title={title} loading={loading} start_date={start_date} onSubmit={onSubmit} duration={duration} onChangeDuration={onChangeDuration} onChangeTitle={onChangeTitle} onChangeStartDate={onChangeStartDate} />    
        :
        <div className='m-auto' >
            <h1 className='text-center'>Diet Plan</h1>
            
            <DietPlanTable 
            match={props.match} 
            history={props.history}
            url='/personal_diet/'
            total_results={plan.total_results} created_by={plan['diet_plan']['created_by']} getDietPlan={getDietPlan} items={plan['diet_plan']['items']} loading={loading}/>
            </div> 
             
      }
        </div>
        </div>
        
    </div> );
}
 
export default DietPlan;