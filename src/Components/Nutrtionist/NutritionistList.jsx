import React,{useState} from 'react'
import Loading from '../Loading/Loading';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListContainer = (props) => {

    let {loading,err,data}=props
 
 
    if(loading){

        return <Loading/>

    }

    else if(err){

        return <h1 className="text-center text-danger">Not Available</h1>
    }

    else if(data.length>0){

        return(<div>

            <Table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(nutri=>(

                        <tr key={nutri.owner_id._id}>
                            <td>{nutri.owner_id.first_name}</td>
                            <td>{nutri.owner_id.last_name}</td>
                            <td>{nutri.owner_id.email}</td>
                            <td><Link to={`/nutritionist_details/${nutri.owner_id._id}`} className='btn btn-primary'>Show</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>)


    }
 
 else
    return ( 
     <div>


    </div> );
}
 
export default ListContainer;