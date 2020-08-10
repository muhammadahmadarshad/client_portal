import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NavBar from '../Navbar/navbar'
import classNames from 'classnames'
import {Bar,BarChart,XAxis,YAxis,Tooltip,Legend} from 'recharts'
import { useEffect } from 'react';
import Axios from 'axios';
import {Table} from 'reactstrap'
import { useState } from 'react';
import Loading from '../Loading/Loading';
const TodayReport = () => {

    const [isOpen,setOpen]=React.useState(false)
    const [data,setData]= useState([])
    const [loading,setLoading] =useState(true)
    const [total,setTotal]=useState({})
    let toggle=()=>{
        setOpen(!isOpen)
     }
     
     useEffect(()=>{
        Axios({method:'get',url:'http://localhost:5000/diet_plan/today_report',
        headers : {'x-auth-token':localStorage.getItem('token')}
     })
        .then(res=>{
            setData(res.data.sort())
            var protein=0,sugar=0,carbohydrate=0,fats=0,calories=0,calcium=0,vitamin_c=0,fiber=0
            for (var x of res.data){
                protein+=x.protein
                sugar+= x.sugar    
                carbohydrate+=x.carbohydrate
                fats+=x.fat
                calories+=x.calories
                calcium+=x.calcium
                vitamin_c+=x.vitamin_c
                fiber+=x.fiber
                
            }

            setTotal({

                protein,
                sugar,
                carbohydrate,fats,calories,calcium,vitamin_c,fiber
            })
            setLoading(false)
        }).catch(err=>{

            setLoading(false)
        })



     },[])



    return (        
        
        <div className="App wrapper report content">  
       
       
            <Sidebar toggle={toggle} isOpen={isOpen}/>

            <div className={classNames('content container-fluid',{'is-open':isOpen})}>
    
                <NavBar toggle={toggle} isOpen={isOpen }/>
                {!loading?    

                <div className='container'>
                    <h2 className='text-center text-primary bg-dark p-1'>Today's Report</h2>
                    <div style={{overflowX:"auto"}}>
                    <BarChart className=' m-auto' width={1000} height={300} data={data}  
                        margin={{
                                top: 5, right: 20, left: 20, bottom: 5,
                            }}>
                        <XAxis dataKey="_id" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"calories"} fill="#ada611" /> 
                        <Bar dataKey={"sugar"} fill="#084a1a" />   
                        <Bar dataKey={"protein"} fill="#2c39c9" />   
                        <Bar dataKey={"calcium"} fill="#220038" /> 
                        <Bar dataKey={"carbohydrate"} fill="#5e3805" />  
                        <Bar dataKey={"fiber"} fill="#ae4705" />   
                    </BarChart>

                    </div>


                    <div >
                            <h1 className='text-center'>Todays Cosumption</h1>
                              <Table striped>
                                <tbody>

                                    <tr>
                                        <th>Calories</th>
                                        <td>{total.calories} kcal</td>
                                    </tr>

                                    <tr>
                                        <th>Protein</th>
                                        <td>{parseInt(total.protein)} g</td>
                                    </tr>

                                    <tr>
                                        <th>Sugar</th>
                                        <td>{parseInt(total.sugar)} g</td>
                                    </tr>

                                    <tr>
                                        <th>Vitamin C</th>
                                        <td>{parseInt(total.vitamin_c)} mg</td>
                                    </tr>

                                    <tr>
                                        <th>Fats</th>
                                        <td>{parseInt(total.fats)} g</td>
                                    </tr>

                                    <tr>
                                        <th>Calcium</th>
                                        <td>{parseInt(total.calcium)} g</td>
                                    </tr>
                                    <tr>
                                        <th>Fiber</th>
                                        <td>{parseInt(total.fiber)} g</td>
                                    </tr>
                                </tbody>

                              </Table>

                    </div>
                </div>:<Loading/>}
    
            </div>
    
        </div>
     );
}
 
export default TodayReport;