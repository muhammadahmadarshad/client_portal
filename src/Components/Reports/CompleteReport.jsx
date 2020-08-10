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
const CompleteReport = () => {

    const [isOpen,setOpen]=React.useState(false)
    const [data,setData]= useState([])
    const [loading,setLoading]=useState(true)
    let toggle=()=>{
        setOpen(!isOpen)
     }
     
     useEffect(()=>{
         setLoading(true)
        Axios({method:'get',url:'http://localhost:5000/diet_plan/complete_report',
        headers : {'x-auth-token':localStorage.getItem('token')}
     })
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })
            
     },[])



    return (        
        
        <div className="App wrapper report content">  
       
       
            <Sidebar toggle={toggle} isOpen={isOpen}/>

            <div className={classNames('content container-fluid',{'is-open':isOpen})}>
    
                <NavBar toggle={toggle} isOpen={isOpen }/>


               {!loading? <div className='container'>
                    <h2 className='text-center text-primary bg-dark p-1'>Complete Report of Active Diet Plan</h2>
                    <div style={{overflowX:"auto"}}>
                    <BarChart className='m-auto' width={1200} height={300} data={data}  
                        margin={{
                                top: 5, right: 20, left: 20, bottom: 5,
                            }}>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"calories"} fill="#ada611" /> 
                        <Bar dataKey={"sugar"} fill="#084a1a" />   
                        <Bar dataKey={"protein"} fill="#2c39c9" />   
                        <Bar dataKey={"calcium"} fill="#220038" /> 
                        <Bar dataKey={"carbohydrate"} fill="#5e3805" />             
                    </BarChart>

                    </div>


                    <div className='row mt-1'>
                        {data.map((item,index)=>{

                            return (
                                <div key={index} className='m-2   col-md-12'>
                                    <h4 className='m-auto w-75  text-center bg-dark p-3 text-white'>{item.time}</h4>
                                    
                                <Table className='m-auto w-75' hover striped>
                                    <tbody>
                                        <tr>
                                            <th>Calories</th>
                                            <td>{item.calories?item.calories:0} kcal</td>
                                        </tr>

                                        <tr>
                                            <th>Protein</th>
                                            <td>{item.protein?item.protein:0} g</td>
                                        </tr>

                                        <tr>
                                            <th>Vitamin C</th>
                                            <td>{item.vitamin_c?item.vitamin_c:0} mg</td>
                                        </tr>

                                        <tr>
                                            <th>Sugar</th>
                                            <td>{item.sugar?item.sugar:0} g</td>
                                        </tr>

                                        <tr>
                                            <th>Carbohydrate</th>
                                            <td>{item.carbohydrate?item.carbohydrate:0} g</td>
                                        </tr>

                                        <tr>
                                            <th>Fats</th>
                                            <td>{item.fat?item.fat:0} g</td>
                                        </tr>
                                    </tbody>


                                </Table>
                                <br/>
                                </div>
                            )






                        })
                        
                    
                        }
                        


                    </div>
                </div>:<Loading/>}
    
            </div>
    
        </div>
     );
}
 
export default CompleteReport;